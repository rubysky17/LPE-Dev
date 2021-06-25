import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import { courseList } from "app/const/course.js";
import PriceTag from "./components/pricetag";
import IntroduceCourse from "./components/introducecourse";
import FixedTag from "./components/fixedtag";
import Combo from "./components/combo";

import "./styles/styles.scss";

function CourseDetail() {
  const history = useHistory();
  let { id, level } = useParams();
  const [secondCourse, setSecondCourse] = useState(null);
  const firstCourse = courseList[level]?.find((item) => item.id === +id);

  useEffect(() => {
    if (level === "level2") {
      setSecondCourse(courseList["level1"].find((item) => item.id === +id));
    }
  }, [level, id]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="course">
      <div className="container">
        <div className="row checkout-head">
          <button
            className="checkout-head_button"
            type="button"
            onClick={() => {
              handleGoBack();
            }}
          >
            <i className="fal fa-chevron-left"></i>
          </button>

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
            <IntroduceCourse {...firstCourse} />
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
        </div>
      </div>

      {level !== "level2" ? (
        <FixedTag firstCourse={firstCourse} level={level} />
      ) : (
        <FixedTag
          firstCourse={firstCourse}
          secondCourse={secondCourse}
          level={level}
        />
      )}
    </div>
  );
}

export default CourseDetail;
