import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.scss";

function CardPrice({ item }) {
  return (
    <div className="cardPrice-container">
      <p className="color-text">{item.name}</p>
      <p className="price-text">
        {item.price?.toLocaleString()}
        <span>VNĐ</span>
      </p>

      <Link to="/dang-ky">
        <button
          className={`button-register ${item.disabled && "disabled"}`}
          disabled={item.disabled}
        >
          Đăng ký ngay
        </button>
      </Link>
    </div>
  );
}

export default CardPrice;
