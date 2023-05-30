import React from "react";
import { getComments } from "../redux/actions";

const Post = ({ id, title, body, dispatch }) => {
  return (
    <div className="pt-3">
      <div className="card w-75">
        <div>
          <img
            style={{ width: 30 }}
            src="https://pic.onlinewebfonts.com/svg/img_569204.png"
          />
        </div>
        <div className="card-body" key={id}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(getComments(id))}
          >
            Комментарии
          </button>
        </div>
      </div>
    </div>
  );
};
export default Post;
