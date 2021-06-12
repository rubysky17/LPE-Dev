import React from "react";

import TabBar from "../tabs";
import Coach from "app/components/coach";

import "./styles/styles.scss";

function IntroduceCourse({ ...detaiCourse }) {
  return (
    <>
      <img
        src="https://images.pexels.com/photos/5537517/pexels-photo-5537517.jpeg"
        alt="course-cover"
        className="img-fluid course-cover"
      />

      <div className="introduce">
        <h1 className="introduce-title">{detaiCourse.title}</h1>

        <p className="introduce-description">{detaiCourse.description}</p>

        <div className="introduce_menu">
          <TabBar {...detaiCourse} />
        </div>

        <div className="coach-intro">
          <p className="coach-intro-title">Giới thiệu giảng viên</p>

          <Coach
            picture="https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/nguyen-lieu-03.png"
            name="La Hạ Giang Thanh"
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            luctus feugiat sollicitudin. Quisque dapibus ac nulla sit amet
            finibus. Fusce tristique nulla at elementum vulputate. Sed vitae
            ullamcorper dolor, sit amet viverra orci. Mauris id metus mattis,
            dictum mi id, ultrices ipsum. Curabitur gravida aliquam imperdiet.
            Nam porttitor finibus ligula, sed elementum justo malesuada ut.
          </p>
        </div>
      </div>
    </>
  );
}

export default IntroduceCourse;
