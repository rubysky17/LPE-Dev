import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function PriceTag({ level, ...detailCourse }) {
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
        {level === "level2" ? (
          <>
            <a className="pricetag_content-button mb-3" href="#combo">
              Đăng ký học
            </a>
            <p className="text-danger">
              *Lưu ý: Chỉ đăng ký kèm khóa học cùng chủ đề Level 1
            </p>
          </>
        ) : (
          <Link
            className="pricetag_content-button"
            to={`/checkout/${level}/${detailCourse.id}`}
          >
            Đăng ký học
          </Link>
        )}
      </div>
    </div>
  );
}

export default PriceTag;
