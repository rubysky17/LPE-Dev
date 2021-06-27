import React from "react";
import { Link } from "react-router-dom";
import ComboItem from "./components/item";

import "./styles/styles.scss";

function Combo({ course1, course2, isTwo }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <ComboItem {...course1} level="level1" />

          <ComboItem {...course2} level="level2" />
        </div>
        <div className="col-12 col-md-4 wrapper-total_price">
          <p className="total-text">Tổng:</p>
          <p className="total_new">
            {(course1?.priceNew + course2?.priceNew).toLocaleString()} đ
          </p>
          <p className="total_old">
            {(course1?.priceOld + course2?.priceOld).toLocaleString()} đ
          </p>

          <Link
            to={
              isTwo
                ? `/checkout/level2/${course2?.id}/${course1?.id}`
                : `/checkout/level2/${course2?.id}`
            }
            className="pricetag_content-button"
            style={{
              padding: "15px 0",
            }}
          >
            Thanh toán
          </Link>

          <p className="text-danger mt-3">*Giá áp dụng khi mua combo</p>
        </div>
      </div>
    </div>
  );
}

export default Combo;
