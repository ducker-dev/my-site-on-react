import { CHANGE_THEME } from "./actions";

const initialState = {
  theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
};

export const changeTheme = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};
