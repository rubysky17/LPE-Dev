import React from "react";
import "./styles/style.scss";

function InProgress() {
  return (
    <div
      className="wrapper"
      style={{
        background: "#ffeaa7",
      }}
    >
      {/* <img className="img-fluid" src={loading} alt={loading} /> */}
      <h1
        style={{
          textTransform: "uppercase",
          color: "#333",
        }}
      >
        Giao dịch đang được xử lý
      </h1>

      <a className="btn btn-primary mt-4" href="https://lpeonline.vn">
        Trở lại trang chủ
      </a>
    </div>
  );
}

export default InProgress;
