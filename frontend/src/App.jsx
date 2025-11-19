import React, { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import RoleSelector from "./components/RoleSelector";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [role, setRole] = useState("general");

  return (
    <div className="max-w-xl mx-auto p-4">

      <LanguageSelector value={language} onChange={setLanguage} />

      <RoleSelector value={role} onChange={setRole} />

      {/* Your other UI parts */}
    </div>
  );
}
