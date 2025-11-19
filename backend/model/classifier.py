from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import json
import os

MODEL_NAME = "j-hartmann/emotion-english-distilroberta-base"

tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_NAME)

labels = json.load(open("model/labels.json", "r"))


def predict_mind_condition(text: str):
    inputs = tokenizer(text, return_tensors="pt", truncation=True)

    with torch.no_grad():
        outputs = model(**inputs)

    logits = outputs.logits
    predicted_class = torch.argmax(logits).item()
    score = torch.softmax(logits, dim=1).max().item()

    return {
        "raw_label": predicted_class,
        "condition": labels[f"LABEL_{predicted_class}"],
        "confidence": float(score)
    }
