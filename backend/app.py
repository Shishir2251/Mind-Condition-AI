from fastapi import FastAPI
from pydantic import BaseModel
from model.classifier import predict_mind_condition
from utils.translator import auto_translate_to_english
from utils.prompts import get_role_prompt

from transformers import pipeline

app = FastAPI()

chat_model = pipeline(
    "text-generation",
    model="microsoft/phi-3-mini-4k-instruct"
)



class PredictRequest(BaseModel):
    text: str


class ChatRequest(BaseModel):
    role: str
    message: str


@app.get("/")
def root():
    return {"message": "Mind Condition AI API Running"}


@app.post("/predict")
def predict(req: PredictRequest):
    translated = auto_translate_to_english(req.text)
    result = predict_mind_condition(translated)
    return {
        "input_text": req.text,
        "translated_text": translated,
        "prediction": result
    }


@app.post("/chat")
def chat(req: ChatRequest):
    prompt = get_role_prompt(req.role) + f"\nUser: {req.message}\nAI:"

    response = chat_model(
        prompt,
        max_length=180,
        temperature=0.4
    )[0]["generated_text"]

    return {"role": req.role, "response": response}
