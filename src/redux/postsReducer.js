import { FETCH_POST, FETCH_COMMENTS } from "./types";

const initialState = {
  posts: [],
  comments: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
