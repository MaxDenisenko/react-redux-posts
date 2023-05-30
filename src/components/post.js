import React from "react";

const Post = ({ post }) => {
  return (
    <div className="pt-3">
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">Card title {post}</h5>
          <p className="card-text">
            loremsldkflsdjflkdsjflksdjflksdjflksdjflkdsjf
          </p>
        </div>
      </div>
    </div>
  );
};
export default Post;
