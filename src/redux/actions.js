import axios from "axios";
import { FETCH_POST, HIDE_LOADER, SHOW_LOADER, FETCH_COMMENTS } from "./types";

export const getPosts = () => {
  return async (dispatch) => {
    dispatch(showLoader());
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    const data = res.data;
    dispatch({ type: FETCH_POST, payload: data });
    setTimeout(() => {
      dispatch(hideLoader());
    }, 500);
  };
};
export const showLoader = () => {
  return { type: SHOW_LOADER };
};
export const hideLoader = () => {
  return { type: HIDE_LOADER };
};

export const getComments = (postId) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    const data = res.data;
    dispatch({ type: FETCH_COMMENTS, payload: data });
  };
};
