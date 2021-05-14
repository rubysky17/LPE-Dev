import React from "react";
import "./styles/styles.scss";

function Comment({ data }) {
  return (
    <div className="comment-container">
      <div className="comment-container_ava">
        <img
          src="https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg"
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
