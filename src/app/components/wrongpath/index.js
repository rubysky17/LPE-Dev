import React from "react";

function Wrongpath() {
  return (
    <div
      className="wrapper"
      style={{
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <h1
        style={{
          textTransform: "uppercase",
          color: "white",
        }}
      >
        Opps! Hình như bạn truy cập sai đường dẫn
      </h1>

      <a className="btn btn-danger mt-4" href="https://lpe.vn/">
        Trở lại trang chủ
      </a>
    </div>
  );
}

export default Wrongpath;
