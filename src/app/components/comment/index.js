import React from "react";

import "./styles/styles.scss";

function Comment({ name, job, avatar, comment }) {
  return (
    <div className="comment">
      <div className="comment-person">
        <img
          src={avatar}
          alt={avatar}
          className="img-fluid comment-person_img"
        />

        <div className="comment-person_info">
          <p>{name}</p>
          <p>{job}</p>
        </div>
      </div>

      <div className="comment-content">
        <p>{comment}</p>
      </div>
    </div>
  );
}

export default Comment;