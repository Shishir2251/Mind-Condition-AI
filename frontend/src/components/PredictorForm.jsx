import { useState } from "react";
import { predictMind } from "../api";
import { useTranslation } from "react-i18next";
import Disclaimer from "./Disclaimer";

export default function PredictorForm() {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = async () => {
    const res = await predictMind(text);
    setResult(res.data ,prediction);
  };

  return (
    <div>
      <h2>{t("title")}</h2>

      <textarea
        placeholder={t("message")}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handlePredict}>{t("predict")}</button>

      {result && (
        <div>
          <h4>Prediction: {result.condition}</h4>
          <p>Confidence: {result.confidence}</p>
        </div>
      )}

      <Disclaimer />
    </div>
  );
}
