import React from "react";

export const Comments = ({ id, email, body }) => {
  return (
    <div class="card">
      <div class="card-header">Комментарий №{id}</div>
      <div class="card-body">
        <h5 class="card-title">{email}</h5>
        <p class="card-text">{body}</p>
      </div>
    </div>
  );
};
