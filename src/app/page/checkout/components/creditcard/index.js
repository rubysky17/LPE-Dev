import React from "react";

import "./styles/styles.scss";

function CreditCard({ type }) {
  return (
    <div className="credit">
      {type === "atm" ? (
        <i className="fab fa-cc-visa"></i>
      ) : (
        <i className="fal fa-credit-card-front"></i>
      )}

      <div className="credit-desc">
        <p className="credit-desc_name">
          {type === "atm"
            ? "Thanh toán bằng thẻ Visa, Master, JCB,.."
            : "Nội địa ATM Cards"}
        </p>
        <p className="credit-desc_detail">
          {type === "atm"
            ? "Hỗ trợ thẻ debit và credit (Visa, Mastercard, JCB) thông qua cổng thanh toán Onepay"
            : "Hỗ trợ thẻ ATM tất cả các ngân hàng Việt Nam: Vietcombank, BIDV, Techcombank, VP Bank..."}
        </p>
      </div>
    </div>
  );
}

export default CreditCard;
