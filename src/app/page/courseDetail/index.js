import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// import data from scratsh
import { courseList, coachDetail } from "app/const/course.js";
// import components
import IntroduceCourse from "./components/introducecourse";
import PriceTag from "./components/pricetag";
import Combo from "./components/combo";
import FixedTag from "./components/fixedtag";
import { Card, Title } from "app/components";

import "./styles/styles.scss";

function CourseDetail() {
  let { id, level } = useParams();

  const [secondCourse, setSecondCourse] = useState(null);
  const [thirdCourse, setThirdCourse] = useState(null);
  const firstCourse = courseList[level]?.find((item) => item.id === +id);
  const coach = coachDetail.find((coach) => coach.id === firstCourse.coach);

  const [suggestCourse, setSuggestCourse] = useState(null);
  useEffect(() => {
    if (level === "level1") {
      setSuggestCourse(courseList["level2"].find((item) => item.id === +id));
    }
  }, [level, id]);
  useEffect(() => {
    if (level === "level2") {
      setSecondCourse(courseList["level1"].find((item) => item.id === +id));
    }
  }, [level, id]);

  useEffect(() => {
    if (firstCourse.hasOwnProperty("childId")) {
      setThirdCourse(
        courseList["level1"].find((item) => item.id === firstCourse.childId[1])
      );
    }
  }, [firstCourse]);

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
            <IntroduceCourse coachDetail={coach} {...firstCourse} />
          </div>

          <div className="col-12 col-md-4">
            <PriceTag {...firstCourse} level={level} />
          </div>

          {level === "level2" && !!secondCourse && (
            <div className="col-12" id="combo">
              <p className="coach-intro-title">Siêu ưu đãi</p>
              <Combo course2={firstCourse} course1={secondCourse} />
            </div>
          )}

          {level === "level2" && !!thirdCourse && (
            <div className="col-12 mt-5">
              <Combo course2={firstCourse} course1={thirdCourse} isTwo />
            </div>
          )}

          {level === "level1" && !!suggestCourse && (
            <div className="col-12">
              <Title text="Gợi ý khóa học level 2" />
              <Card {...suggestCourse} level="level2" />
            </div>
          )}
        </div>
      </div>

      {level !== "level2" && (
        <FixedTag firstCourse={firstCourse} level={level} />
      )}
    </div>
  );
}

export default CourseDetail;
