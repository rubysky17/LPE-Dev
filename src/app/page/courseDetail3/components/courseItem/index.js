import React from "react";

import { Coach } from "app/components";
import MenuBar from "./components/menubar";

function CourseItem({ coachDetail, ...detaiCourse }) {
  return (
    <div className="introduce">
      <h1 className="introduce-title">{detaiCourse.title}</h1>

      <p className="introduce-description">{detaiCourse.description}</p>

      <div className="introduce_menu">
        <MenuBar {...detaiCourse} />
      </div>

      <div className="coach-intro">
        <p className="coach-intro-title">Giới thiệu giảng viên</p>

        <Coach picture={coachDetail.img} name={coachDetail.name} />

        <ul>
          {coachDetail?.desc?.map((meta, index) => {
            return (
              <li key={index} className="mb-2">
                + {meta}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CourseItem;
