import React from "react";
import { connect } from "react-redux";
import Post from "./post";

const Posts = ({ posts }) => {
  if (!posts.length) {
    return (
      <div className="pt-3 text-center">
        <div class="alert alert-warning" role="alert">
          Постов нет!!!
        </div>
      </div>
    );
  }
  return posts.map((post) => <Post post={post} id={post} />);
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps)(Posts);
