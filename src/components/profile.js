import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/actions";
import { Link, Navigate, useLocation } from "react-router-dom";
import Loader from "./loader";
import Post from "./post";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.users);
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.posts.comments);
  const load = useSelector((state) => state.app.loading);
  const location = useLocation();
  const { userId } = location.state;
  useEffect(() => {
    dispatch(getUser(userId));
  }, []);
  if (user.length === 0) return <Loader />;
  return (
    <>
      <div className="pt-3">
        <Link to={"/posts"} className="btn btn-secondary">
          Назад
        </Link>

        <div>
          <b>Profile: </b> {user.name}
        </div>
        <div>
          <b>Email: </b> {user.email}
        </div>
        <div>
          <b>Company: </b> {user.company.name}
        </div>
        <div>
          <b>Website: </b> {user.website}
        </div>
        <div>
          <b>Phone: </b> {user.phone}
        </div>
      </div>
      <div>
        {posts.map((post) => (
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
    </>
  );
};

export default Profile;
