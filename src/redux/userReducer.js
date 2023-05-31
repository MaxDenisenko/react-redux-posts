import { FETCH_USER } from "./types";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
