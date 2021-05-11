import React, { useState } from "react";
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

import "./styles/styles.scss";

function RunFaster() {
  const title = "run faster - công ty tnhh giáo dục leading performance";
  const [isOpen, setIsOpen] = useState(false);
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
                <img
                  src={item.img}
                  alt={item.img}
                  className={`img-fluid ${item.className}`}
                />
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
