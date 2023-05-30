import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./post";
import { getComments, getPosts } from "../redux/actions";
import Loader from "./loader";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const load = useSelector((state) => state.app.loading);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (load) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <div className="pt-3 text-center">
        <div className="alert alert-warning" role="alert">
          Постов нет!!!!
        </div>
      </div>
    );
  }
  return posts.map((post) => (
    <Post
      title={post.title}
      id={post.id}
      body={post.body}
      dispatch={dispatch}
    />
  ));
};

export default Posts;
