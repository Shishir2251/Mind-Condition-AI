import axios from "axios";

const API = "http://localhost:8000";

export const predictMind = (text) =>
  axios.post(`${API}/predict`, { text });

export const roleChat = (role, message) =>
  axios.post(`${API}/chat`, { role, message });
