import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function ComboItem({ level, ...course }) {
  return (
    <div className="row item my-3">
      <div className="col-4 col-md-4 col-lg-2 item_pic">
        <img src={course.picture} alt={course.picture} className="img-fluid" />
      </div>

      <div className="col-8 col-md-8 col-lg-10 item_desc">
        <Link to={`/course/${level}/${course.id}`}>
          <p>
            {course.title} ({level.toUpperCase()})
          </p>
        </Link>

        <p className="d-none d-sm-block">{course.description}</p>

        <div className="item_desc-price">
          <span className="price-new">{course.priceNew.toLocaleString()}đ</span>
          <span className="price-old">{course.priceOld.toLocaleString()}đ</span>
        </div>
      </div>
    </div>
  );
}

export default ComboItem;
