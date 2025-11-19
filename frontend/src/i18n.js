import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Mind Condition Checker",
        predict: "Predict",
        message: "Enter your message",
        role: "Select Role",
        disclaimer: "This system does NOT provide medical diagnosis."
      }
    },
    bn: {
      translation: {
        title: "মনের অবস্থা বিশ্লেষক",
        predict: "পূর্বানুমান",
        message: "আপনার বার্তা লিখুন",
        role: "রোল নির্বাচন করুন",
        disclaimer: "এই সিস্টেম কোন চিকিৎসা নির্ণয় প্রদান করে না।"
      }
    }
  },
  lng: "en",
  fallbackLng: "en"
});

export default i18n;
