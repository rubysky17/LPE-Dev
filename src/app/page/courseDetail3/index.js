import React from "react";
import { Link } from "react-router-dom";
// import data from scratsh
import { courseList, coachDetail } from "app/const/course.js";
// import components
import PriceTag from "../courseDetail/components/pricetag";
import FixedTag from "../courseDetail/components/fixedtag";

import "./styles/styles.scss";
import CourseItem from "./components/courseItem";

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
          <div className="col-12 col-md-8">
            {/* <IntroduceCourse coachDetail={coach} {...firstCourse} /> */}
            <CourseItem coachDetail={coach} {...firstCourse} />
          </div>

          <div className="col-12 col-md-4">
            <PriceTag {...firstCourse} level={level} />
          </div>
        </div>
      </div>

      <FixedTag firstCourse={firstCourse} level={level} />
    </div>
  );
}

export default CourseDetail3;
