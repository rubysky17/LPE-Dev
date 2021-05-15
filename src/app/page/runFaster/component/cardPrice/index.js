import React from "react";
import "./styles/styles.scss";

function CardPrice({ href, item }) {
  return (
    <div className="cardPrice-container">
      <p className="color-text">{item.name}</p>
      <p className="price-text">
        {item.price?.toLocaleString()}
        <span>VNĐ</span>
      </p>

      <button className="button-register">
        <a href={href}>Đăng ký ngay</a>
      </button>
    </div>
  );
}

export default CardPrice;