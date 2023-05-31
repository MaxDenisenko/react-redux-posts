import axios from "axios";
import {
  FETCH_POST,
  HIDE_LOADER,
  SHOW_LOADER,
  FETCH_COMMENTS,
  FETCH_USER,
} from "./types";

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

export const getUser = (id) => {
  return async (dispatch) => {
    dispatch(showLoader());
    const resUser = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const dataUser = resUser.data;
    dispatch({ type: FETCH_USER, payload: dataUser });

    const resPosts = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const dataPosts = resPosts.data;
    dispatch({ type: FETCH_POST, payload: dataPosts });

    const resComments = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?userId=${id}`
    );
    const dataComments = resComments.data;
    dispatch({ type: FETCH_COMMENTS, payload: dataComments });
    dispatch(hideLoader());
  };
};
