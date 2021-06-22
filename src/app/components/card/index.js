import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function Card({ level, ...course }) {
  return (
    <div className="mt-4 mr-4">
      <div
        className="wrapper-card"
        style={{
          backgroundImage: `url(${course.picture})`,
          color: course.color ? course.color : "#fff",
        }}
      >
        <div className="bg-image"></div>
        <div className="content-card">
          <p className="card-title">{course.title}</p>

          <div className="content-price row my-1 mx-0">
            <div className="col-6  px-0">
              <p className="content-price_new">
                {course.priceNew.toLocaleString()}đ
              </p>
              <p className="content-price_old">
                {course.priceOld.toLocaleString()}đ
              </p>
            </div>
            <div className="col-6 wrapper-btn px-0">
              <Link
                to={`/course/${level}/${course.id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  className="btn-course"
                  style={{
                    color: course.color ? course.color : "#fff",
                    borderColor: course.color ? course.color : "#fff",
                  }}
                >
                  Nhận
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
