import enLanguage from './../Dictionaries/en.json';
import ruLanguage from './../Dictionaries/ru.json';

const initialState = {
  theme: localStorage.getItem("theme") === "dark" ? "dark" : "light",
  language: localStorage.getItem("language") === "ru" ? "ru" : "en",
  dictionary: localStorage.getItem("language") === "ru" ? ruLanguage : enLanguage
};

const changeState = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload
      };
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.payload.language,
        dictionary: action.payload.dictionary,
      };
    default:
      return state;
  }
};

export default changeState;
