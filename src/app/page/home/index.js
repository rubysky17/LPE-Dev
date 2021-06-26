import React from "react";

import { courseList, courseLevel, coachDetail } from "app/const/course.js";
import { Title, Card, Coach, Comment } from "app/components";

import "./styles/styles.scss";

function Home() {
  return (
    <div className="home">
      {/* Back ground for web page */}
      <img
        className="container-fluid"
        src="https://i.imgur.com/OhuGcYS.jpg"
        alt="https://i.imgur.com/OhuGcYS.jpg"
        style={{
          padding: 0,
        }}
      />

      <div className="container-fluid pb-4">
        {courseLevel?.map((level, index) => {
          return (
            <div key={index}>
              <Title text={level.name} desc={level.description} />

              <div className="wrapper-div">
                {courseList[level.levelId]?.map((course, index) => {
                  return <Card key={index} {...course} level={level.levelId} />;
                })}
              </div>
            </div>
          );
        })}

        <Title text="Coach" desc="Những Coach hàng đầu trong lĩnh vực NLP" />

        <div className="coach">
          {coachDetail?.map((coach, index) => {
            return <Coach key={index} picture={coach.img} name={coach.name} />;
          })}
        </div>

        <Title
          text="Nhận xét của học viên"
          desc="Những học viên đánh giá như thế nào về khóa học"
        />

        <div className="row testimonial pb-5">
          <div className="col-12 col-md-4">
            <Comment />
          </div>

          <div className="col-12 col-md-4">
            <Comment />
          </div>

          <div className="col-12 col-md-4">
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
