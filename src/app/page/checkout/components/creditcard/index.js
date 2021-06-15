import React from "react";

import "./styles/styles.scss";

function CreditCard({ type }) {

  const renderCard = () => {
    let result = {};

    if (type === "atm") {
      result.icon = <i className="fal fa-credit-card-front"></i>;
      result.name = "Nội địa ATM Cards";
      result.detail =
        "Hỗ trợ thẻ ATM tất cả các ngân hàng Việt Nam: Vietcombank, BIDV, Techcombank, VP Bank...";
    }

    if (type === "visa") {
      result.icon = <i className="fab fa-cc-visa"></i>;
      result.name = "Thanh toán bằng thẻ Visa, Master, JCB,..";
      result.detail =
        "Hỗ trợ thẻ debit và credit (Visa, Mastercard, JCB) thông qua cổng thanh toán Onepay";
    }

    if (type === "qr") {
      result.icon = <i className="fal fa-qrcode"></i>;
      result.name = "QR code";
      result.detail =
        "Hỗ trợ QR code (MOMO, ZaloPay, VNPAY,...) thông qua cổng thanh toán Onepay";
    }

    return (
      <>
        {result.icon}
        <div className="credit-desc">
          <p className="credit-desc_name">{result.name}</p>
          <p className="credit-desc_detail">{result.detail}</p>
        </div>
      </>
    );
  };

  return <div className="credit">{renderCard()}</div>;
}

export default CreditCard;
