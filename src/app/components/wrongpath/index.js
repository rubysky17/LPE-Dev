import React from "react";
import "./styles.scss";

function Wrongpath() {
  return (
    <div className="wrapper-wrongpath container-fluid">
      <img
        src="https://freefrontend.com/assets/img/html-css-404-page-templates/404-SVG-Animated-Page-Concept.png"
        alt="https://freefrontend.com/assets/img/html-css-404-page-templates/404-SVG-Animated-Page-Concept.png"
        className="img-fluid"
      />
      <p className="text">
        Truy cập của bạn có thể bị lỗi hoặc không tìm thấy nội dung
      </p>
      <a className="btn btn-secondary px-3 py-2" href="https://lpe.vn">
        Đi tới trang chủ
      </a>
    </div>
  );
}

export default Wrongpath;
