import React from "react";
import { Link } from "react-router-dom";
// import data from scratsh
import { courseList, coachDetail } from "app/const/course.js";
// import components
import FixedTag from "../courseDetail/components/fixedtag";

import "./styles/styles.scss";
import CourseItem from "./components/courseItem";
import ComboItem from "../courseDetail/components/combo/components/item";
import { Title } from "app/components";

import "./styles/styles.scss";
const level = "level3";
const id = 1;

function CourseDetail3() {
  const firstCourse = courseList[level]?.find((item) => item.id === id);
  const coach = coachDetail.find((coach) => coach.id === firstCourse.coach);

  return (
    <div className="course">
      <div className="container">
        <div className="row checkout-head">
          <Link className="checkout-head_button" type="button" to="/">
            <i className="fal fa-chevron-left"></i>
          </Link>

          <h3 className="text-center">Chi tiết khóa học</h3>

          <Link
            className="checkout-head_button"
            type="button"
            to={`/checkout/${level}/${id}`}
          >
            <i className="fal fa-chevron-right"></i>
          </Link>
        </div>

        <div className="row">
          <div className="col-12 col-md-12">
            <CourseItem coachDetail={coach} {...firstCourse} />
          </div>
        </div>

        <Title text="Thanh toán" />

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <ComboItem {...firstCourse} level="level3" />
            </div>

            <div className="col-12 col-md-4 wrapper-total_price">
              <p className="total-text">Tổng:</p>
              <p className="total_new">
                {(firstCourse?.priceNew).toLocaleString()} đ
              </p>
              <p className="total_old">
                {(firstCourse?.priceOld).toLocaleString()} đ
              </p>

              <Link
                to={`/checkout/level3/${firstCourse?.id}`}
                className="pricetag_content-button"
                style={{
                  padding: "15px 0",
                }}
              >
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <FixedTag firstCourse={firstCourse} level={level} /> */}
    </div>
  );
}

export default CourseDetail3;
