import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function CourseDetail({ ...detailCourse }) {
  return (
    <Link to={`/course/${detailCourse.id}`}>
      <div className="course-info">
        <img
          src={detailCourse.picture}
          alt={detailCourse.picture}
          className="course-info_img img-fluid"
        />

        <div className="course-info_desc">
          <p className="course-info_desc-name">{detailCourse.title}</p>
          <p className="course-info_desc-price">
            {detailCourse.priceNew.toLocaleString()} đ
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CourseDetail;
