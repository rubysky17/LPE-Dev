import Title from "app/components/title";
import React from "react";

import { courseList } from "app/const/course";
import Card from "app/components/card";
import Coach from "app/components/coach";
import Comment from "app/components/comment";
import Slider from "react-slick";

import "./styles/styles.scss";

function Home() {
  const course = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
          text="Phổ biến nhất"
          desc="Những khóa học phổ biến ưu chuộng nhất"
        />

        <Slider {...course} className="mb-4 slider-course">
          {courseList?.map((course) => {
            return <Card {...course} key={course.id} />;
          })}
        </Slider>

        <Title
          text="Bán chạy nhất"
          desc="Những khóa học bán chạy nhất trong tháng"
        />

        <Slider {...course} className="mb-4 slider-course">
          {courseList?.map((course) => {
            return <Card {...course} key={course.id} />;
          })}
        </Slider>

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
