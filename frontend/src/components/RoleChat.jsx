import { useState } from "react";
import { roleChat } from "../api";

export default function RoleChat() {
  const [role, setRole] = useState("general");
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const send = async () => {
    const res = await roleChat(role, msg);
    setReply(res.data.response);
  };

  return (
    <div>
      <h2>Role-based Chat</h2>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="doctor">Doctor</option>
        <option value="psychologist">Psychologist</option>
        <option value="general">General AI</option>
      </select>

      <textarea
        placeholder="Say something..."
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button onClick={send}>Send</button>

      <p><b>AI:</b> {reply}</p>
    </div>
  );
}
