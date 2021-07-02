import React from "react";
import { statusMessage } from "app/const/Status";

import "./styles/styles.scss";

function Failed({ status }) {
  const statusMgs = statusMessage.find((code) => code.code === status);

  return (
    <div className="wrapper container">
      <div className="check-failed">
        <i class="far fa-times"></i>
      </div>
      <div className="text-center content">
        <h2 className="mt-4 content-head-failed">
          Thanh toán của bạn thất bại
        </h2>
        <p className="mt-4 content-body">{statusMgs?.message}</p>

        <a className="btn btn-danger mt-1" href="https://lpe.vn/">
          Trở về trang chủ
        </a>
      </div>
    </div>
  );
}

export default Failed;
