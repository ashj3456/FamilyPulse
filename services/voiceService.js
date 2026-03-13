import * as Speech from "expo-speech";

export function speakReminder(language, medicineColor = "yellow") {
  let message = "";

  switch (language) {
    case "marathi":
      message = `आजी, तुमची ${medicineColor} रंगाची गोळी खायची वेळ झाली आहे`;
      Speech.speak(message, { language: "mr-IN" });
      break;

    case "hindi":
      message = `दादी, आपकी ${medicineColor} रंग की दवा लेने का समय हो गया है`;
      Speech.speak(message, { language: "hi-IN" });
      break;

    case "gujarati":
      message = `દાદી, તમારી ${medicineColor} રંગની દવા લેવાનો સમય થયો છે`;
      Speech.speak(message, { language: "gu-IN" });
      break;

    case "tamil":
      message = `பாட்டி, உங்கள் ${medicineColor} மாத்திரை எடுத்துக்கொள்ள வேண்டிய நேரம் வந்துவிட்டது`;
      Speech.speak(message, { language: "ta-IN" });
      break;

    case "kannada":
      message = `ಅಜ್ಜಿ, ನಿಮ್ಮ ${medicineColor} ಗುಳಿ ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಯ ಬಂದಿದೆ`;
      Speech.speak(message, { language: "kn-IN" });
      break;

    default:
      message = `It is time to take your ${medicineColor} medicine`;
      Speech.speak(message, { language: "en-US" });
  }
}
