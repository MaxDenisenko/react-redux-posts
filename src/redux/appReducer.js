import {
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
  SHOW_MENU,
} from "./types";

const initialState = { loading: false, alert: null, menu: false };

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case HIDE_ALERT:
      return {
        ...state,
        alert: null,
      };
    case SHOW_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};
