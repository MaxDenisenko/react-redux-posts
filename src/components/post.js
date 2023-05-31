import React, { useState } from "react";
import { getComments } from "../redux/actions";
import { Comments } from "./comments";
import { Link } from "react-router-dom";

const Post = ({ userId, title, body, dispatch, comments, id }) => {
  const [isShow, setisShow] = useState(false);
  return (
    <div className="pt-3">
      <div className="card w-75">
        <div>
          <Link to={`/profile/${userId}`} state={{ userId: userId }}>
            <img
              style={{ width: 30 }}
              src="https://pic.onlinewebfonts.com/svg/img_569204.png"
            />
          </Link>
        </div>
        <div className="card-body" key={id}>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(getComments(id));
              setisShow(!isShow);
            }}
          >
            Комментарии
          </button>
        </div>
        <div>
          {isShow &&
            comments.map((comment) => {
              if (id === comment.postId) {
                return (
                  <Comments
                    id={comment.id}
                    email={comment.email}
                    body={comment.body}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};
export default Post;
