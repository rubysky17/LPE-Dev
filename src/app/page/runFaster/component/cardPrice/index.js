import React, { useState } from "react";

import axios from "axios";

import "./styles/styles.scss";

function CardPrice({ item, url, handleError }) {
  const [onLoading, setOnLoading] = useState(false);

  const email = url.searchParams.get("email");
  const name = url.searchParams.get("name");

  const custom_register = new Date().toLocaleString();


  function handleSubmit() {
    setOnLoading(true);
      
      axios({
        method: "post",
        url: "https://sheet.best/api/sheets/a5d532ed-85e2-449d-a1e1-2c909555dabd",
        data: {
          name,
          email,
          custom_register,
        },
      })
        .then(function (response) {
          if (response.status === 200) {
            window.location.href = "https://lpe.vn/thank-you/";
  
            setOnLoading(false);
          }
        })
        .catch(function (error) {
          console.log(error);
  
          setOnLoading(false);
          handleError()
        });
    
   
  }

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

      <button
        className={`button-register ${item.disabled && "disabled"}`}
        disabled={item.disabled || onLoading}
        onClick={() => {
          handleSubmit();
        }}
      >
        {onLoading ? "Vui lòng chờ" : "Đăng ký ngay"}
      </button>
    </div>
  );
}

export default CardPrice;
