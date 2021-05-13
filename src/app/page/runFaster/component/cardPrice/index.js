import React from "react";
import "./styles/styles.scss";

function CardPrice({ href, special }) {
  return (
    <div className={`cardPrice-container ${special && "scale-card"}`}>
      <p>Khóa học dành cho</p>
      <p className="color-text">Người đăng ký sớm</p>
      <p className="price-text">5.000.000VNĐ</p>

      <button className="button-register">
        <a href={href}>Đăng ký ngay</a>
      </button>
    </div>
  );
}

export default CardPrice;
