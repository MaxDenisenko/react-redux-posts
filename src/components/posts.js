import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./post";
import { getPosts } from "../redux/actions";
import Loader from "./loader";
import { SEARCH } from "../redux/types";

const Posts = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.posts.comments);
  const load = useSelector((state) => state.app.loading);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    if (!e.target.value) {
      dispatch(getPosts());
    }
    setSearch(e.target.value);
    dispatch({ type: SEARCH, payload: search });
  };
  if (load) {
    return <Loader />;
  }

  return (
    <div>
      <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Поиск"
          aria-label="Поиск"
          value={search}
          onChange={handleSearchChange}
        />
      </form>
      <div>
        {posts &&
          posts.map((post) => (
            <Post
              title={post.title}
              id={post.id}
              userId={post.userId}
              body={post.body}
              dispatch={dispatch}
              comments={comments}
            />
          ))}
      </div>
    </div>
  );
};

export default Posts;
