import React from "react";
import "./styles/styles.scss";

function CardPrice({ item }) {
  return (
    <div className="cardPrice-container">
      <p className="color-text">{item.name}</p>
      <p className="price-text">
        {item.price?.toLocaleString()}
        <span>VNĐ</span>
      </p>

      {item.outOfDate ? (
        <p className="cardPrice_outOfDate">
          Hạn chót đến ngày <span>{item.outOfDate}</span>
        </p>
      ) : (
        <div className="null-div"></div>
      )}

      <a
        href="https://lpe.vn/dang-ky-run-faster/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className={`button-register ${item.disabled && "disabled"}`}
          disabled={item.disabled}
        >
          Đăng ký ngay
        </button>
      </a>
    </div>
  );
}

export default CardPrice;