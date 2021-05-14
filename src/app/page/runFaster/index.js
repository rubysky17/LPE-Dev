import React, {  useState } from "react";
import { usePageTitle } from "core/hooks/usePageTitle";

import * as DATA from "../../const/runFaster";
// slider
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import sand from "../../../assets/images/sand.jpg";
import cloud1 from "../../../assets/images/cloud2.jpg";
import cloud2 from "../../../assets/images/cloud1.jpg";
import bgVideo from "../../../assets/images/bgVideo.jpg";
import giaTri from "../../../assets/images/giaTri.png";

import "./styles/styles.scss";
// import { Link } from "react-router-dom";
import Stepper from "./component/stepper";
import Card from "./component/card";
import CardPrice from "./component/cardPrice";
import Comment from "./component/comment";

function RunFaster() {
  const title = "run faster - công ty tnhh giáo dục leading performance";
  const [isOpen, setIsOpen] = useState(false);
  const [activeClass1, setActiveClass1] = useState(true);
  const [activeClass2, setActiveClass2] = useState(false);
  const [day, setDay] = useState(DATA.stepperDay1);
  usePageTitle(title.toUpperCase());

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const classResponsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const commentResponsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  
  const toggleDay = (day) => {
    day === 1 ? setDay(DATA.stepperDay1) : setDay(DATA.stepperDay2);

    if (day === 1) {
      setActiveClass2(false);
      setActiveClass1(true);
    } else {
      setActiveClass2(true);
      setActiveClass1(false);
    }
  };

  return (
    <>
      <div className="container-fluid" style={{ padding: 0 }}>
        <Slider {...settings}>
          <div className="carousel-item">
            <img src={cloud1} alt={cloud2} className="carousel-img" />
            <div className="dark-layout"></div>
            <div className="carousel-text">
              <h1>RUN FASTER</h1>
              <p>Chạy nhanh lên</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={cloud2} alt={cloud1} className="carousel-img" />
            <div className="dark-layout"></div>
            <div className="carousel-text">
              <h1>
                <span className="text-1">BREAK THE</span> STORM
              </h1>
              <p>Vượt qua bão tố</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={sand} alt={sand} className="carousel-img" />
            <div className="carousel-text shadow-text">
              <h1 className="text-2">UNLOCK YOUR</h1>
              <h1>MINE POWER</h1>
              <p>Mở khóa sức mạnh tâm trí</p>
            </div>
          </div>
        </Slider>
      </div>

      {/* logo */}
      <div className="title-logo">
        <p className="title">Truyền thông nói về chúng tôi</p>
      </div>
      <Carousel
        responsive={classResponsive}
        className="intro-clip"
        showDots={false}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        {DATA.videoArray.map((item, index) => {
          return (
            <>
              <div className="intro-clip_logo" key={index}>
                <a
                  href={item.newLink}
                  alt={item.newLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.img}
                    alt={item.img}
                    className={`img-fluid ${item.className}`}
                  />
                </a>
              </div>
            </>
          );
        })}
      </Carousel>

      {/* Carousel */}
      <div className="container video-container">
        <div className="row">
          <div className="col-md-12 col-lg-6 text-content">
            <h2>FIND THE EVENT THAT’S RIGHT FOR YOU</h2>
            <p>
              Progress is the key to happiness – and Tony and his entire team
              are committed to helping you make progress in every area of your
              life so that you can go out and live the life you’ve always
              dreamed of.
            </p>
            <div className="row pl-3">
              <button className="button-register">Đăng ký</button>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 video-content">
            <img src={bgVideo} alt={bgVideo} className="img-fluid" />
            <div
              className="button-play"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="bg-item">
        <div className="container py-5">
          <div className="row stepper">
            <div className="col-12">
              <h1 className="text-center text-heading">Đã đến lúc phải chạy</h1>
            </div>

            <div className="col-md-6 text-center dp-big">
              <Card name="info" />
              <Card name="register" />
            </div>

            <div className="col-12 col-md-12 col-lg-6">
              <div className="row center-content">
                {day.map((item, index) => (
                  <Stepper
                    numberStep={item.id}
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>

              <div className="row container-button ">
                <button
                  onClick={() => {
                    toggleDay(1);
                  }}
                  className={`buttonToggleDay ${activeClass1 && "active"}`}
                >
                  Ngày 1
                </button>
                <button
                  onClick={() => {
                    toggleDay(2);
                  }}
                  className={`buttonToggleDay ${activeClass2 && "active"}`}
                >
                  Ngày 2
                </button>
              </div>
            </div>

            <div className="col-12 col-md-8 text-center dp-small">
              <Card name="info" />
              <Card name="register" />
            </div>
          </div>
        </div>
      </div>

      {/* Người dẫn đầu vượt bão */}
      <div className="container py-5">
        <h1 className="heading_person">Người dẫn dắt vượt bão</h1>
        <img src={giaTri} alt={giaTri} />
      </div>

      {/* Học phí */}
      <div className="price">
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center text-uppercase text-heading ">
                Học phí
              </h1>
            </div>

            <div className="col-12 col-md-4 col-lg-4">
              <CardPrice />
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <CardPrice />
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <CardPrice />
            </div>
          </div>
        </div>
      </div>

      {/* cảm nhận */}
      <section className="review">
        <div className="container">
          <h1 className="text-center text-uppercase py-5 heading_person">
            Cảm nhận của học viên
          </h1>
        </div>

        <div className="container carousel-review">
          <Carousel
            responsive={commentResponsive}
            className="intro-clip"
            infinite={true}
            showDots={false}
          >
            {DATA.comment.map((item, index) => {
              return <Comment data={item} key={index} />;
            })}
          </Carousel>
        </div>
      </section>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        autoplay
        videoId="ntEoGvhoVac"
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}

export default RunFaster;
