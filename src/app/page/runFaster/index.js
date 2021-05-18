import React, { useEffect, useState } from "react";
import { usePageTitle } from "core/hooks/usePageTitle";

import * as DATA from "../../const/runFaster";
// slider
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// WOW
import { WOW } from "wowjs";
// media
import sand from "../../../assets/images/sand.jpg";
import cloud1 from "../../../assets/images/cloud2.jpg";
import cloud2 from "../../../assets/images/cloud1.jpg";
import bgVideo from "../../../assets/images/bgVideo.jpg";
import mrVas from "../../../assets/images/mrVas.png";
// component
import Stepper from "./component/stepper";
import Card from "./component/card";
import CardPrice from "./component/cardPrice";
import Comment from "./component/comment";
import Loading from "../../components/loading";

import "./styles/styles.scss";



function RunFaster() {
  const title = "run faster - công ty tnhh giáo dục leading performance";
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  usePageTitle(title.toUpperCase());

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
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

  const stepperClass = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  
  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });

    wow.init();
  }, [isLoading]);

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="container-fluid" style={{ padding: 0 }}>
            <Slider {...settings}>
              <div className="carousel-item">
                <img src={cloud1} alt={cloud2} className="carousel-img" />
                <div className="dark-layout"></div>
                <div className="carousel-text">
                  <h1>
                    <span className="text-1">THE STORM</span> IS COMING
                  </h1>
                  <p>Một cơn bão đang tới</p>
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
                  <h1 className="text-1">RUN FASTER</h1>
                  <p>Chạy nhanh hơn</p>
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
              );
            })}
          </Carousel>

          {/* Carousel */}
          <div className="container video-container">
            <div className="row wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-md-12 col-lg-6 text-content">
                <h2>“CƠN BÃO NÀO RỒI CŨNG SẼ QUA ĐI”?!</h2>
                <p>
                  Không ai có thể dự đoán được khi nào cả thế giới sẽ quay trở
                  lại bình thường như trước. Vậy điều chúng ta nên làm lúc này
                  là chờ đợi, cầu nguyện, hay tôi phải làm gì đây vì nếu nó diễn
                  biến tệ hơn thì tôi sẽ tiếp tục thất bại? Việc chờ đợi có vẻ
                  như khá thoải mái và an nhàn, nhưng chờ đợi có nghĩa là hoàn
                  toàn thụ động trước những tác nhân có thể ảnh hưởng đến cuộc
                  đời tương lai của mình.
                </p>
                <div className="row pl-3">
                  <a
                    href="https://lpe.vn/dang-ky-run-faster/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button-register">Đăng ký</button>
                  </a>
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
                <div className="col-12 wow bounceIn" data-wow-delay="0.3s">
                  <h1 className="text-center text-heading">
                    Đã đến lúc phải chạy
                  </h1>
                </div>

                <div
                  className="col-md-6 text-center dp-big wow bounceInLeft"
                  data-wow-delay="0.3s"
                >
                  <Card name="info" />
                  <Card name="register" />
                </div>

                <div
                  className="col-12 col-md-12 col-lg-6  wow bounceInRight"
                  data-wow-delay="0.3s"
                >
                  <Carousel
                    responsive={stepperClass}
                    className="row"
                    showDots={false}
                    arrows={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={8000}
                  >
                    <div className="row center-content wrapper-step">
                      <div className="col-sm-12 text-center block-day">
                        <h1 className="day-css">Ngày 1</h1>
                      </div>
                      {DATA.stepperDay1.map((item, index) => {
                        return (
                          <Stepper
                            numberStep={item.id}
                            key={index}
                            title={item.title}
                            content={item.content}
                          />
                        );
                      })}
                    </div>

                    <div className="row center-content wrapper-step">
                      <div className="col-sm-12 text-center block-day">
                        <h1 className="day-css">Ngày 2</h1>
                      </div>
                      {DATA.stepperDay2.map((item, index) => {
                        return (
                          <Stepper
                            numberStep={item.id}
                            key={index}
                            title={item.title}
                            content={item.content}
                          />
                        );
                      })}
                    </div>
                  </Carousel>
                </div>

                <div className="col-12 col-md-8 text-center dp-small">
                  <Card name="info" />
                  <Card name="register" />
                </div>
              </div>
            </div>
          </div>
          {/* 4 item */}
          <div className="container mb-5">
            <h1 className="text-center text-uppercase py-5 heading_fee wow bounceIn">Khóa học này giúp bạn</h1>
            <div className='row'>
              {DATA.itemIcon.map((item,index) => {
                return (
                  <div
                    className="col-6 col-md-3 wrapperIcon wow bounceIn"
                    key={index}
                  >
                    <img src={item.src} alt={item.src} className="img-fluid" />
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Người dẫn đầu vượt bão */}
          <div className="bg-nguoiVuotBao">
            <div className="container py-5">
              <h1 className="heading_person wow bounceIn" data-wow-delay="0.3s">
                Người dẫn dắt vượt bão
              </h1>
              <div className="col-12">
                <img src={mrVas} alt={mrVas} className="img-vas_big" />
              </div>
              <div
                className="row container-vas wow bounceInRight"
                data-wow-delay="0.3s"
              >
                <div className="col-12 col-md-8">
                  <p>
                    Mr. Vas đã có gần 30 năm dẫn dắt quân đội tại Singapore &
                    hơn 17 năm nghiên cứu, làm việc về lĩnh vực NLP, cùng các
                    ngành khoa học Tâm Trí khác. Ông đã huấn luyện, đào tạo,
                    mang đến sự phát triển vượt bậc cho hàng trăm ngàn người ở
                    khắp Châu Á.
                  </p>
                  <p>
                    Với tầm nhìn “mang đến cuộc sống bình an & hạnh phúc cho
                    nhân loại”, Mr. Vas đã & đang không ngừng nghiên cứu, phát
                    triển các chương trình dạy của mình. Khi Covid hoành hành,
                    Mr. Vas nhận thức được rằng tất cả chúng ta không thể dậm
                    chân tại chỗ & chờ đợi nó trôi qua. Cần phải làm điều gì đó
                    để mọi người có thể vực dậy mạnh mẽ hơn & tiếp tục “chạy
                    nhanh hơn” về phía trước.
                  </p>
                  <p>
                    Mr. Vas sẽ là Người đồng hành - dẫn dắt để tất cả chúng ta
                    cùng nhau vượt qua cơn bão mang tên Covid-19. Nhưng chỉ khi
                    bạn thật sự mong muốn “vượt bão” & sẵn sàng chấp nhận thách
                    thức.
                  </p>
                </div>
                <div className="col-md-4"></div>
                <img src={mrVas} alt={mrVas} className="img-vas" />
              </div>
            </div>
          </div>

          {/* Học phí */}
          <div className="price">
            <div className="bg-adding"></div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1
                    className="text-center text-uppercase text-heading wow bounceIn"
                    data-wow-delay="0.3s"
                  >
                    Học phí
                  </h1>
                </div>

                {DATA.courseFee.map((item, index) => {
                  return (
                    <div
                      className="col-12 col-md-4 col-lg-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                      key={index}
                    >
                      <CardPrice item={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* cảm nhận */}
          <section className="review">
            <div className="container">
              <h1
                className="text-center text-uppercase py-5 heading_fee wow bounceIn"
                data-wow-delay="0.3s"
              >
                Cảm nhận của học viên
              </h1>
            </div>
            <div className="container">
              <div
                className="row carousel-review wow fadeInUp"
                data-wow-delay="0.3s"
              >
                {DATA.comment.map((item, index) => {
                  return <Comment data={item} key={index} />;
                })}
              </div>
            </div>
          </section>
          <footer>
            <div className="text-center"></div>
            <h3 className="name">Công Ty TNHH Giáo Dục Leading Performance</h3>

            <div className="f-line">
              <i className="fas fa-map-marker-alt"></i>
              <span>
                490 Phạm Thái Bường, Khu Mỹ Toàn I, P. Tân Phong, Quận 7, TP.
                HCM.
              </span>
            </div>

            <div className="f-line">
              Sáng: 7h30 - 12h00 <i className="far fa-clock"></i>
              Chiều: 13h00 - 16h30
            </div>
            <div className="f-line mr-0">
              <span className="f-line_phone">
                <i className="fas fa-phone-alt"></i> 028 7303 9996 - 1900 636
                034
              </span>
            </div>
          </footer>

          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            autoplay
            videoId="MvafPA1HJIw"
            onClose={() => {
              setIsOpen(false);
            }}
          />
        </>
      )}
    </>
  );
}

export default RunFaster;
