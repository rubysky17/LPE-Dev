import React from "react";

import "./styles/styles.scss";

function Comment() {
  return (
    <div className="comment">
      <div className="comment-person">
        <img
          src="https://randomuser.me/api/portraits/women/80.jpg"
          alt="https://randomuser.me/api/portraits/women/80.jpg"
          className="img-fluid comment-person_img"
        />

        <div className="comment-person_info">
          <p>Nguyễn Thị Ngọc</p>
          <p>Nhân viên kế toán</p>
        </div>
      </div>

      <div className="comment-content">
        <p>
          Đây là website giúp tôi có thể học được nhiều thứ và phát triển bản
          thân hơn nữa. Tôi cảm thấy bản thân mình mạnh mẽ hơn trước rất nhiều
          từ khi biết đến LPE live. Mong LPE sẽ phát triển hơn nữa trong tương
          lai sắp tới.
        </p>
      </div>
    </div>
  );
}

export default Comment;
