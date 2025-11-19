import { useState } from "react";
import { predictMind } from "../api";
import { useTranslation } from "react-i18next";
import Disclaimer from "./Disclaimer";

export default function PredictorForm() {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await predictMind(text);
      setResult(res.data.prediction);
    } catch (err) {
      console.error(err);
      setResult({ condition: "Error connecting to server", confidence: 0 });
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>{t("title")}</h2>
      <textarea
        placeholder={t("message")}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: "100px", padding: "10px", marginTop: "10px" }}
      />
      <button
        onClick={handlePredict}
        style={{ marginTop: "10px", padding: "10px 20px" }}
        disabled={loading}
      >
        {loading ? "Analyzing..." : t("predict")}
      </button>

      {result && (
        <div style={{ marginTop: "15px" }}>
          <strong>Prediction:</strong> {result.condition} <br />
          <strong>Confidence:</strong> {Math.round(result.confidence * 100)}%
        </div>
      )}

      <Disclaimer />
    </div>
  );
}
