import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function PriceTag({ ...detailCourse }) {
  return (
    <div className="pricetag">
      <img
        src={detailCourse.picture}
        alt={detailCourse.picture}
        className="img-fluid"
      />

      <div className="pricetag_content">
        <div className="pricetag_content-price">
          <p>{detailCourse.priceNew.toLocaleString()} đ</p>
          <p>{detailCourse.priceOld.toLocaleString()} đ</p>
        </div>

        <Link
          className="pricetag_content-button"
          to={`/checkout/${detailCourse.id}`}
        >
          Thanh toán
        </Link>
      </div>
    </div>
  );
}

export default PriceTag;
