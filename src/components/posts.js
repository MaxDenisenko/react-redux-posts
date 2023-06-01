import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./post";
import { getPosts } from "../redux/actions";
import Loader from "./loader";
import { CURENT_PAGE, SEARCH, SORT_DOWN, SORT_UP } from "../redux/types";

const Posts = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.posts.comments);
  const load = useSelector((state) => state.app.loading);
  const pageSize = useSelector((state) => state.posts.pageSize);
  const postsCount = useSelector((state) => state.posts.postsCount);
  const curentPage = useSelector((state) => state.posts.curentPage);

  let pagesCount = Math.ceil(postsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const lastIndex = curentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const currentPosts = posts.slice(firstIndex, lastIndex);

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

  const sortUp = () => {
    dispatch({ type: SORT_UP });
  };
  const sortDown = () => {
    dispatch({ type: SORT_DOWN });
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
        <span>
          <br />
          <button className="btn btn-primary" onClick={sortUp}>
            Сортировать по возрастанию
          </button>
        </span>
        <span>
          <button className="btn btn-secondary" onClick={sortDown}>
            Сортировать по убыванию
          </button>
        </span>
      </div>

      <nav aria-label="..." className="pt-3">
        <ul className="pagination pagination-sm">
          {pages.map((page, index) => (
            <li class="page-item">
              <span
                className="page-link"
                key={index}
                onClick={() =>
                  dispatch({
                    type: CURENT_PAGE,
                    payload: page,
                  })
                }
                tabindex="-1"
              >
                {page}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        {posts &&
          currentPosts.map((post) => (
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
