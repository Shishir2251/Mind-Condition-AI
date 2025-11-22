# Mind Condition AI

This project, "Mind Condition AI," is a full-stack application designed to predict a user's mental state (like stress, depression, anxiety) from text input. It also features a role-based AI chatbot for smart conversations. Built with FastAPI, HuggingFace, React, and Tailwind, it offers a comprehensive solution without requiring external APIs like OpenAI. The backend handles predictions and chat responses, while the React frontend provides an interactive user interface.

## Run Instructions

1.  **Backend Setup**
    *   Navigate to the `backend` directory: `cd backend`
    *   Install dependencies: `pip install -r requirements.txt`
    *   Run the FastAPI application: `uvicorn app:app --reload`

2.  **Frontend Setup**
    *   Navigate to the frontend directory: `cd frontend/frontend` (or `cd frontend` if `frontend` is the root of the frontend project)
    *   Install dependencies: `npm install`
    *   Start the development server: `npm run dev`

## Folder Structure

```
root
 |
 |-- .gitignore
 |-- h.txt
 |-- README.md
 |
 |-- backend
 |   |---> app.py
 |   |---> requirements.txt
 |   |
 |   |---> model
 |   |    |---> classifier.py
 |   |    |---> labels.json
 |   |
 |   |---> utils
 |        |---> prompts.py
 |        |---> translator.py
 |
 |-- frontend
 |    |---> package-lock.json
 |    |---> package.json
 |    |
 |    |---> frontend
 |         |---> .gitignore
 |         |---> index.html
 |         |---> package-lock.json
 |         |---> package.json
 |         |---> README.md
 |         |
 |         |---> public
 |         |    |---> vite.svg
 |         |
 |         |---> src
 |              |---> App.css
 |              |---> index.css
 |              |
 |              |---> assets
 |                   |---> react.svg
 |
 |-- public
      |---> index.html
```

## File Descriptions

*   **`.gitignore`**: Specifies directories and files to be excluded from Git version control.
*   **`h.txt`**: Contains arbitrary text; its purpose is unclear without further context.
*   **`README.md`**: Project README file describing the "Mind Condition AI" application.
*   **`backend/app.py`**: FastAPI application with endpoints for text prediction and AI chat.
*   **`backend/requirements.txt`**: Lists Python dependencies for the FastAPI backend.
*   **`backend/model/classifier.py`**: Python script for predicting mind conditions using a transformer model.
*   **`backend/model/labels.json`**: JSON file mapping numerical labels to descriptive emotion categories.
*   **`backend/utils/prompts.py`**: Python code defining AI assistant prompts based on roles.
*   **`backend/utils/translator.py`**: Python script to automatically translate text into English.
*   **`frontend/package-lock.json`**: Locks down dependency versions for the "mind-condition-ai" frontend project.
*   **`frontend/package.json`**: Defines metadata and scripts for the "mind-condition-ai" React frontend application.
*   **`frontend/frontend/.gitignore`**: Git ignore file for the nested frontend project.
*   **`frontend/frontend/index.html`**: Entry point HTML file for the frontend application, likely built with Vite.
*   **`frontend/frontend/package-lock.json`**: Locks down dependency versions for the nested "frontend" project.
*   **`frontend/frontend/package.json`**: Defines metadata and scripts for the nested React frontend project.
*   **`frontend/frontend/README.md`**: README file for the Vite-based React application.
*   **`frontend/frontend/public/vite.svg`**: SVG file containing the Vite logo.
*   **`frontend/frontend/src/App.css`**: CSS file for styling the main container and other UI elements.
*   **`frontend/frontend/src/index.css`**: CSS file defining global styles for the frontend application.
*   **`frontend/frontend/src/assets/react.svg`**: SVG code representing the React logo.
*   **`frontend/public/index.html`**: Primary entry point HTML file for a web application's frontend.