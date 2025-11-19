from googletrans import Translator
from langdetect import detect

translator = Translator()

def auto_translate_to_english(text: str):
    lang = detect(text)
    if lang == "en":
        return text
    translated = translator.translate(text, src=lang, dest="en").text
    return translated
