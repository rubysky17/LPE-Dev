import React from "react";

import TabBar from "../tabs";
import Coach from "app/components/coach";

import "./styles/styles.scss";

function IntroduceCourse({ coachDetail, ...detaiCourse }) {
  console.log(coachDetail);
  return (
    <>
      {detaiCourse.video && (
        <iframe
          width="100%"
          height="400"
          src={detaiCourse.video}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}

      <div className="introduce">
        <h1 className="introduce-title">{detaiCourse.title}</h1>

        <p className="introduce-description">{detaiCourse.description}</p>

        <div className="introduce_menu">
          <TabBar {...detaiCourse} />
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
    </>
  );
}

export default IntroduceCourse;
