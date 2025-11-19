import { useState } from "react";
import { roleChat } from "../api";

export default function RoleChat() {
  const [role, setRole] = useState("general");
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!msg) return;
    setLoading(true);
    try {
      const res = await roleChat(role, msg);
      setReply(res.data.response);
    } catch (err) {
      console.error(err);
      setReply("Error connecting to server");
    }
    setLoading(false);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Role-based Chat</h3>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="general">General AI</option>
        <option value="doctor">Doctor</option>
        <option value="psychologist">Psychologist</option>
      </select>

      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Say something..."
        style={{ width: "100%", height: "80px", marginTop: "10px" }}
      />

      <button onClick={sendMessage} style={{ marginTop: "10px", padding: "5px 10px" }}>
        {loading ? "Thinking..." : "Send"}
      </button>

      {reply && (
        <div style={{ marginTop: "10px", background: "#f0f0f0", padding: "10px", borderRadius: "5px" }}>
          <strong>AI:</strong> {reply}
        </div>
      )}
    </div>
  );
}
