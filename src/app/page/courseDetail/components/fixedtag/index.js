import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function FixedTag({ ...detailCourse }) {
  return (
    <div className="fixed">
      <div className="bg-tag">
        <div className="container">
          <div className="row fixed-tag">
            <div className="col-6 fixed-price">
              <p>{detailCourse.priceNew.toLocaleString()}đ</p>
              <p>{detailCourse.priceOld.toLocaleString()}đ</p>
            </div>
            <div className="col-6">
              <Link
                className="fixed-price_btn"
                to={`/checkout/${detailCourse.id}`}
              >
                MUA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedTag;
