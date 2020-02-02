import { CHANGE_THEME } from "./actions";

const initialState = {
  theme: "light"
};

export const changeTheme = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
  }

  return state;
};
