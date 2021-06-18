import Title from "app/components/title";
import React from "react";

import { courseList } from "app/const/course.js";
import Card from "app/components/card";
import Coach from "app/components/coach";
import Comment from "app/components/comment";

import "./styles/styles.scss";

function Home() {
  return (
    <div className="home">
      {/* Back ground for web page */}
      <div className="jss110">
        <div className="jss111">
          <div className="bg-webpage"></div>

          <div className="bg-content">
            <h2>học online trực tuyến cùng LPE live</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-4">
        <Title
          text="Level 1"
          desc="Những khóa học dành cho người mới bắt đầu"
        />

        <div className="wrapper-div">
          {courseList?.map((course) => {
            return <Card {...course} key={course.id} />;
          })}
        </div>

        <Title
          text="Level 2"
          desc="Những khóa học chỉ dành cho người hoàn thành LEVEL 1"
        />

        <div className="wrapper-div">
          {courseList?.map((course) => {
            return <Card {...course} key={course.id} />;
          })}
        </div>

        <Title text="Coach" desc="Những Coach hàng đầu trong lĩnh vực NLP" />

        <div className="coach">
          <Coach
            picture="https://lpe.vn/storage/gioi-thieu/la-ha-giang-thanh/nguyen-lieu-03.png"
            name="La Hạ Giang Thanh"
          />
          <Coach
            picture="https://lpe.vn/themes/default/images/img1.png"
            name="Gopalan Vasanth"
          />
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
