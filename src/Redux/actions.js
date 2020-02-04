import enLanguage from './../Dictionaries/en.json';
import ruLanguage from './../Dictionaries/ru.json';

export const changeTheme = theme => ({
  type: "CHANGE_THEME",
  payload: theme
});

export const changeLanguage = language => {
  const activeDictionary = language === "en" ? enLanguage : ruLanguage;
  return {
    type: "CHANGE_LANGUAGE",
    payload: {
      language: language,
      dictionary: activeDictionary
    }
  }
};
