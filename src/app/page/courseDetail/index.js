import React from "react";
import { useParams } from "react-router-dom";

import { courseList } from "app/const/course.js";
import PriceTag from "./components/pricetag";
import IntroduceCourse from "./components/introducecourse";
import FixedTag from "./components/fixedtag";
import Combo from "./components/combo";

import "./styles/styles.scss";

function CourseDetail() {
  let { id, level } = useParams();

  const firstCourse = courseList[level]?.find((item) => item.id === +id);
  const secondCourse = courseList["level1"].find((item) => item.id === +id);

  return (
    <div className="course py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <IntroduceCourse {...firstCourse} />
          </div>

          <div className="col-12 col-md-4">
            <PriceTag {...firstCourse} level={level} />
          </div>

          <div className="col-12" id="combo">
            {level === "level2" && (
              <>
                <p className="coach-intro-title">Siêu ưu đãi</p>
                <Combo course2={firstCourse} course1={secondCourse} />
              </>
            )}
          </div>
        </div>
      </div>

      <FixedTag {...firstCourse} />
    </div>
  );
}

export default CourseDetail;
