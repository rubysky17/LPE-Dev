import React from "react";
import { Link } from "react-router-dom";

import {
  courseList,
  courseLevel,
  coachDetail,
  testimonials,
} from "app/const/course.js";
import { Title, Card, Coach, Comment } from "app/components";

import "./styles/styles.scss";
import LazyLoadImg from "app/components/lazyLoadImg";

function Home() {
  return (
    <>
      <div className="home">
        {/* Back ground for web page */}
        <LazyLoadImg
          className="container-fluid p-0"
          width="100%"
          // height="100%"
          src="https://lpe.vn/lpeonline/background.jpg"
          alt="https://lpe.vn/lpeonline/background.jpg"
        />

        <Link
          to="/quiz/question1"
          style={{
            textDecoration: "none",
          }}
        >
          <button className="btn btn-success">Làm bài trắc nghiệm</button>
        </Link>

        <div className="container-fluid pb-4">
          {courseLevel?.map((level, index) => {
            return (
              <div key={index}>
                <Title text={level.name} desc={level.description} />

                <div className="wrapper-div">
                  {courseList[level.levelId]?.map((course, index) => {
                    return (
                      <Card key={index} {...course} level={level.levelId} />
                    );
                  })}
                </div>
              </div>
            );
          })}

          <Title
            text="Bài trắc nghiệm"
            desc="Bài trắc nghiệm tìm hiểu tính cách của bạn"
          />

          <Title text="Coach" desc="Những Coach hàng đầu trong lĩnh vực NLP" />

          <div className="coach">
            {coachDetail?.map((coach, index) => {
              return (
                <Coach key={index} picture={coach.img} name={coach.name} />
              );
            })}
          </div>

          <Title
            text="Nhận xét của học viên"
            desc="Những học viên đánh giá như thế nào về khóa học"
          />

          <div className="row testimonial pb-5">
            {testimonials.map((person) => {
              return (
                <div className="col-12 col-md-4">
                  <Comment {...person} key={person.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
