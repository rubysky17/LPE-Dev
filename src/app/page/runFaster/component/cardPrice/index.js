import React from "react";
import axios from "axios";

import "./styles/styles.scss";

function CardPrice({ item, url, handleError }) {
  const email = url.searchParams.get("email");
  const name = url.searchParams.get("name");

  const custom_register = new Date().toLocaleString();

  function handleSubmit() {
    if (!name && !email) {
      handleError();
    } else {
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
           console.log(response);
          }
        })
        .catch(function (error) {
          console.log(error);
          handleError();
        });
    }
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

      <form
        action="https://app.getresponse.com/add_subscriber.html"
        accept-charset="utf-8"
        method="post"
      >
        
        <input type="hidden" name="name" value={name} />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="campaign_token" value="5u92S" />
        <input type="hidden" name="start_day" value="0" />
        
        <input
          type="hidden"
          name="thankyou_url"
          defaultValue="https://lpe.vn/thank-you"
        />

        <button
          className={`button-register ${item.disabled && "disabled"}`}
          disabled={item.disabled}
          type="submit"

          onClick={() => {
            handleSubmit();
          }}
        >
          Đăng ký ngay
        </button>
      </form>
    </div>
  );
}

export default CardPrice;
