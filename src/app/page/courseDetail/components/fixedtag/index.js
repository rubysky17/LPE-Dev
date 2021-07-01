import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function FixedTag({ firstCourse, secondCourse, level }) {
  return (
    <div className="fixed">
      <div className="bg-tag">
        <div className="container">
          <div className="row fixed-tag">
            <div className="col-7 fixed-price">
              <p>{firstCourse.priceNew.toLocaleString()} đ</p>
              <p>{firstCourse.priceOld.toLocaleString()}đ</p>
              {secondCourse && (
                <p className="text-danger">*Giá khi mua combo 2 level</p>
              )}
            </div>
            <div className="col-5">
              {
                <Link
                  className="fixed-price_btn"
                  to={`/checkout/${level}/${firstCourse.id}`}
                >
                  MUA
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixedTag;