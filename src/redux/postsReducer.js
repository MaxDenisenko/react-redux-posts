import { FETCH_POST, FETCH_COMMENTS } from "./types";

const initialState = {
  posts: [],
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
        posts: state.posts.map((post) => {
          if (post.id === action.postId) {
            return { ...post, comments: action.payload };
          }
          return post;
        }),
      };
    default:
      return state;
  }
};
