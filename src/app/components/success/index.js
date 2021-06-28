import React from "react";

import "./styles/styles.scss";

function Success({ price, infoBill }) {
  return (
    <div className="wrapper content container">
      <div className="check-success">
        <i className="fas fa-check"></i>
      </div>
      <div className="text-center">
        <h2 className="mt-4 content-head">Thanh toán của bạn đã thành công</h2>
        <p className="mt-4 content-body">
          Đơn hàng {infoBill} có giá {(price / 100).toLocaleString()}đ đã thanh
          toán thành công. LPE cảm ơn bạn đã sử dụng LPE live.
        </p>

        <a className="btn btn-success mt-1" href="https://lpe.vn/">
          Trở về trang chủ
        </a>
      </div>
    </div>
  );
}

export default Success;
