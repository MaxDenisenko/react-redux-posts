import axios from "axios";
import {
  FETCH_POST,
  HIDE_LOADER,
  SHOW_LOADER,
  FETCH_COMMENTS,
  FETCH_USER,
  SHOW_ALERT,
  HIDE_ALERT,
} from "./types";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=100`
      );
      const data = res.data;
      setTimeout(() => {
        dispatch({ type: FETCH_POST, payload: data, postsCount: data.length });
        dispatch(hideLoader());
      }, 500);
    } catch (error) {
      dispatch(showAlert(error.message));
      dispatch(hideLoader());
    }
  };
};

export const showLoader = () => {
  return { type: SHOW_LOADER };
};

export const hideLoader = () => {
  return { type: HIDE_LOADER };
};

export const showAlert = (error) => {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: error });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };
};

export const hideAlert = () => {
  return { type: HIDE_ALERT };
};

export const getComments = (postId) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = res.data;
      dispatch({ type: FETCH_COMMENTS, payload: data });
    } catch (error) {
      dispatch(showAlert(error.message));
    }
  };
};

export const getUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const resUser = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const dataUser = resUser.data;

      const resPosts = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      const dataPosts = resPosts.data;

      const resComments = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?userId=${userId}`
      );
      const dataComments = resComments.data;

      setTimeout(() => {
        dispatch({ type: FETCH_USER, payload: dataUser });
        dispatch({ type: FETCH_POST, payload: dataPosts });
        dispatch({ type: FETCH_COMMENTS, payload: dataComments });
        dispatch(hideLoader());
      }, 500);
    } catch (error) {
      dispatch(showAlert(error.message));
      dispatch(hideLoader());
    }
  };
};
