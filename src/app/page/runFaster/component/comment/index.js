import React from "react";
import "./styles/styles.scss";

function Comment({ data }) {
  return (
    <div className="comment-container">
      <div className="comment-container_ava">
        <img
          src="https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Man-Person-People-Avatar-User-Happy-512.png"
          alt="ava"
        />
        <p className="comment-name">{data.name}</p>
        <p className="comment-desc">{data.desc}</p>
      </div>

      <p className="comment-content">{data.comment}</p>
    </div>
  );
}

export default Comment;
