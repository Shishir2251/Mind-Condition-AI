🧠 Mind Condition AI

A full-stack AI-powered mental state prediction and role-based chatbot system built with FastAPI + HuggingFace + React + Tailwind + Vite.
🚀 Features

🧠 Mental Condition Prediction

Predicts user mental state from text:

Stress

Depression

Anxiety

Burnout

Other conditions (depends on model)

Backend returns:

{
  "condition": "Stress",
  "score": 0.92,
  "explanation": "The model detected emotional overload..."
}

💬 AI Chatbot Panel

Smart conversation engine

Responds based on selected role & language

Uses HuggingFace free model (no OpenAI needed)

⚡ Full-stack Integration

React frontend

FastAPI backend

RAG-friendly structure

Clean API routes

📂 Project Structure
mind-condition-ai/
│── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── models/
│
│── frontend/
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── components/
│       │   ├── LanguageSelector.jsx
│       │   ├── RoleSelector.jsx
│       │   ├── PredictorForm.jsx
│       │   ├── Chatbot.jsx
│       │   └── Disclaimer.jsx
│       └── assets/
│
└── README.md

🛠️ Installation & Setup
1️⃣ Backend Setup (FastAPI)
✔ Install dependencies
cd backend
pip install -r requirements.txt

✔ Run the backend server
uvicorn main:app --reload --host 0.0.0.0 --port 8000


If you see:

Uvicorn running on http://0.0.0.0:8000


Backend is OK.

2️⃣ Frontend Setup (React + Vite + Tailwind)
✔ Install dependencies
cd ../frontend
npm install

✔ Run the UI
npm run dev


You should now see the full interface:

Disclaimer

Language Switch

Role Selector

Mind Condition Predictor

Chatbot Panel

🔧 API Endpoints
POST /predict

Predict mind condition from user text.

Request

{
  "text": "I feel stressed every day."
}


Response

{
  "condition": "Stress",
  "score": 0.92,
  "explanation": "Detected emotional distress..."
}

POST /chat

Role-based chatbot reply.

Request

{
  "message": "I am feeling low lately.",
  "role": "psychologist",
  "language": "bn"
}


Response

{
  "reply": "আপনার কথা শুনে মনে হচ্ছে আপনি মানসিক চাপের মধ্যে আছেন..."
}

📦 Technologies Used
Frontend

React

Vite

Tailwind CSS

Axios

Backend

FastAPI

HuggingFace Transformers

Sentence-Transformers (optional)

Python 3.10+

🧪 Testing

Run backend tests:

pytest


Run frontend:

npm run dev

❗ Common Issues & Fixes
❌ "Error loading ASGI app. Could not import module main"

Fix:

Ensure file is named main.py

Ensure you run inside /backend

Correct command:

uvicorn main:app --reload

🤝 Contributing

Pull requests are welcome!
Suggested areas:

More languages

Better model

UI enhancements

Offline mode

📄 License

MIT License — free to use, modify & distribute.