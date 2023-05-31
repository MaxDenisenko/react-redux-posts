import {
  FETCH_POST,
  FETCH_COMMENTS,
  SEARCH,
  SORT_UP,
  SORT_DOWN,
} from "./types";

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
    case SEARCH:
      return {
        ...state,
        posts: state.posts.filter((post) =>
          post.title.includes(action.payload)
        ),
      };
    case SORT_UP: {
      return {
        ...state,
        posts: [...state.posts.sort((a, b) => (a.title > b.title ? 1 : -1))],
      };
    }
    case SORT_DOWN: {
      return {
        ...state,
        posts: [...state.posts.sort((a, b) => (a.title < b.title ? 1 : -1))],
      };
    }
    default:
      return state;
  }
};
