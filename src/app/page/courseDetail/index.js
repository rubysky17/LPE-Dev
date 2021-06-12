import React from "react";
import { useParams } from "react-router-dom";

import { courseList } from "app/const/course";
import PriceTag from "./components/pricetag";
import IntroduceCourse from "./components/introducecourse";
import FixedTag from "./components/fixedtag";

import "./styles/styles.scss";

function CourseDetail() {
  let { id } = useParams();

  const detailCourse = courseList?.find((item) => item.id === +id);

  return (
    <div className="course py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <IntroduceCourse {...detailCourse} />
          </div>

          <div className="col-12 col-md-4">
            <PriceTag {...detailCourse} />
          </div>
        </div>
      </div>

      <FixedTag {...detailCourse} />
    </div>
  );
}

export default CourseDetail;
