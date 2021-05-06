import React, { useEffect, useState } from "react";
import { usePageTitle } from "core/hooks/usePageTitle";
import Iframe from "react-iframe";
import findPurposes from "assets/images/banner.jpg";
import RegisterButton from "app/components/registerButton";
import ScrollButton from "app/components/scrollButton";
import * as DATA from "app/const/Page";
import ModalVideo from "react-modal-video";

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./styles/styles.scss";

function CourseOne() {
  const title = "Tìm Lại Lẽ Sống Và Khát Vọng Thành Công";
  usePageTitle(title.toUpperCase());

  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const buttonDOM = document.querySelector(".scrollToTop");
    if (buttonDOM) {
      setInterval(() => {
        buttonDOM.classList.toggle("button-light");
      }, 500);
    }
  });

  const handleOpenModal = (open, id) => {
    setIsOpen(open);
    setVideoId(id);
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
      {/* background VAS and Thanh */}
      <div className="row bg-content">
        <img src={findPurposes} alt={findPurposes} className="img-fluid" />
      </div>

      {/* Video MR.vas */}
      <div className="problem-block">
        <Iframe
          url="https://www.youtube.com/embed/op_f1QsI9Qs"
          height="315px"
          width="50%"
          className="row problem-block_iframe"
          frameBorder="0"
        />
      </div>

      {/* Clip giới thiệu */}

      <Carousel
        responsive={classResponsive}
        className="intro-clip"
        showDots={false}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
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

                {item.videoId ? (
                  <div className="intro-clip_play">
                    <i
                      className="far fa-play-circle"
                      onClick={() => {
                        handleOpenModal(true, item.videoId);
                      }}
                    ></i>
                  </div>
                ) : (
                  <div className="intro-clip_play">
                    <a href={item.newLink} target="_blank" rel="noreferrer">
                      <i className="far fa-play-circle"></i>
                    </a>
                  </div>
                )}
              </div>
            </>
          );
        })}
      </Carousel>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        autoplay
        videoId={videoId}
        onClose={() => {
          setIsOpen(false);
        }}
      />

      {/* Các vấn đề */}
      <div className="row p-md-5 p-0 change-block">
        <img
          src="https://lpe.vn/storage/vip-lpe/s3-vande/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s3-01.png"
          className="img-title"
          alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s3-01.png"
        />

        <div className="row">
          {DATA.itemChange.map((item, index) => {
            return (
              <div className="col-xl-4 col-lg-6 col-md-6 px-4 py-2" key={index}>
                <img
                  src={item.src}
                  alt={item.src}
                  className="img-fluid text-center itemChange-img"
                />
                <p className="item-change_text">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Thay đổi tích cực */}
      <div className="row bg-gradient-1 text-center">
        <h2 className="item-change_title2">
          NHỮNG THAY ĐỔI TÍCH CỰC CỦA HỌC VIÊN QUA CHƯƠNG TRÌNH TÌM LẠI LẼ SỐNG
          VÀ KHÁT VỌNG THÀNH CÔNG
        </h2>

        <div className="row mt-5">
          <div className="col-xl-6 col-lg-6 col-md-12 text-center">
            <div
              className="col-sm-10 col-md-8 col-lg-12 col-xl-12"
              style={{ margin: "0 auto" }}
            >
              {DATA.imgArray.map((img, index) => {
                return (
                  <img
                    src={img.src}
                    alt={img.src}
                    key={index}
                    className=" col-12"
                  />
                );
              })}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="col-12" style={{ height: "90%" }}>
              <Iframe
                url="https://www.youtube.com/embed/Mk6O59KH7TU"
                height="100%"
                width="100%"
                className="problem-block_iframe"
                frameBorder="0"
              
              />
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <img
            src="https://lpe.vn/storage/vip-lpe/thaydoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-10.png"
            alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-10.png"
            className="col-12"
          />
        </div>
      </div>

      {/* Người đồng hành */}
      <div className="row bg-gradient-2">
        <h2 className="item-change_title-2">
          NGƯỜI ĐỒNG HÀNH GIÚP BẠN TÌM LẠI LẼ SỐNG VÀ KHÁT VỌNG THÀNH CÔNG
        </h2>

        <div className="row">
          <div className="col-xl-6 col-lg-12 img-vas">
            <img
              src="https://lpe.vn/storage/vip-lpe/vas-582x500.png"
              alt="vas-582x500.png"
              className="img-fluid"
            />
          </div>

          <div
            className="col-xl-6 col-lg-12 text-vas"
            style={{ color: "#fff" }}
          >
            <div className="col-xl-12 col-lg-10">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "35px",
                  lineHeight: "1.6em",
                }}
              >
                Vasanth Gopalan
              </p>
              <p style={{ textAlign: "center", fontSize: "20px" }}>
                Creator + Founder of LPE & Life Uni
              </p>
              <p style={{ fontSize: "20px" }}>
                Chairman của Leading Performance Group tại Singapore, Malaysia,
                Vietnam, Thailand, Mandiver, Srilanka
              </p>
              <p style={{ fontSize: "20px" }}>
                30 năm kinh nghiệm đào tạo khi phục vụ cho Lực lượng vũ trang
                Singapore ở vai trò Sĩ Quan Tham Mưu
              </p>
              <p style={{ fontSize: "20px" }}>
                18 năm là Master Trainer, huấn luyện NLP và các ngành Khoa học
                Tâm trí tại nhiều quốc gia trên thế giới với các chứng nhận uy
                tín từ Mỹ, Châu Âu
              </p>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div
            className="col-xl-6 col-lg-12 img-giangThanh-md"
            style={{ textAlign: "center" }}
          >
            <img
              src="https://lpe.vn/storage/vip-lpe/la-ha-giang-thanh.png"
              alt="la-ha-giang-thanh.png"
              className="img-fluid"
            />
          </div>

          <div
            className="col-xl-6 col-lg-12 text-giangThanh"
            style={{ color: "#fff" }}
          >
            <div className="col-xl-12 col-lg-10">
              <p
                style={{
                  textAlign: "center",
                  fontSize: "32px",
                  lineHeight: "1.6em",
                }}
              >
                Mrs. La Hạ Giang Thanh
              </p>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "20px" }}>Managing Director</p>
                <p style={{ fontSize: "20px" }}>NLP Master Trainer</p>
                <p style={{ fontSize: "20px" }}>
                  Advanced Generative Trance Coach
                </p>
                <p style={{ fontSize: "20px" }}>Time Line Therapist</p>
                <p style={{ fontSize: "20px" }}>Hypnotherapist</p>
              </div>
              <p style={{ fontSize: "20px" }}>
                Người tiên phong trong việc tạo nền tảng ngôn ngữ, thuật ngữ cho
                ngành NLP bằng tiếng Việt.
              </p>
              <p style={{ fontSize: "20px" }}>
                Nhà Tư Vấn Trị Liệu đã chữa lành và chuyển hoá thành công hàng
                trăm khách hàng đủ mọi lứa tuổi và ngành nghề.
              </p>
              <p style={{ fontSize: "20px" }}>
                Giám đốc Điều hành 9x trẻ tuổi và tài năng, dẫn dắt đội ngũ nhân
                viên trở thành con người tuyệt vời nhất của chính họ và từng
                bước khẳng định vị thế của ngành khoa học tư duy NLP tại Việt
                Nam.
              </p>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 img-giangThanh-lg"
            style={{ textAlign: "center" }}
          >
            <img
              src="https://lpe.vn/storage/vip-lpe/la-ha-giang-thanh.png"
              alt="la-ha-giang-thanh.png"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* Quyền lợi */}
      <div className="row benefits-block">
        <div className="col-md-8">
          <img
            src="https://lpe.vn/storage/vip-lpe/quyenloi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s7-02.png"
            alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s7-02.png"
            className="img-fluid"
          />

          <div className="row content-benefit">
            {DATA.benefitArray.map((item, index) => {
              return (
                <div
                  className="col-xl-4 col-lg-4 col-md-12 benefit-item"
                  key={index}
                >
                  <img
                    src={item.bigImg}
                    alt={item.bigImg}
                    className="img-fluid"
                  />

                  <a
                    href={item.btnLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.btnImg}
                      alt={item.btnImg}
                      className="img-fluid my-3 btn-link"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* khu vực ghế ngồi */}
      <div className="row areaMap-block">
        <div className="col-10 bg-white" style={{ margin: "0 auto" }}>
          <img
            src="https://lpe.vn/storage/vip-lpe/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-uu-dai-pp-ve-pre.png"
            alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-uu-dai-pp-ve-pre.png"
            className="img-fluid"
          />
          <img
            src="https://lpe.vn/storage/vip-lpe/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-uu-dai-pp-ve-vip.jpg"
            alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-uu-dai-pp-ve-vip.jpg"
            className="img-fluid"
          />
        </div>
      </div>

     
      {/* ưu đãi học viên */}
      <div className="row endow-block">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <img
            src="https://lpe.vn/storage/vip-lpe/uudaipremium/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-01.png"
            alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-01.png"
            className="img-fluid col-lg-6 col-md-10 col-12"
            style={{
              height: "200px",
            }}
          />
        </div>

        <div className="col-lg-6 col-md-10">
          <div className="row item-gift">
            {DATA.itemArrayPremium.map((item, index) => {
              return (
                <div
                  className="col-lg-6 offset-lg-0 col-md-6 offset-md-3 col-6"
                  key={index}
                >
                  <img src={item.src} alt={item.src} className="img-fluid" />
                  <h2 style={{ color: "#fff", textAlign: "center" }}>
                    {item.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="row mt-5"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "50px",
          }}
        >
          <img
            src="https://lpe.vn/storage/vip-lpe/uudaivip/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-02.png"
            alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-02"
            className="img-fluid col-lg-6 col-md-10 col-12"
            style={{
              height: "200px",
            }}
          />
        </div>

        <div className="col-lg-6 col-md-10">
          <div className="row item-gift">
            {DATA.itemArrayVip.map((item, index) => {
              return (
                <div
                  className="col-lg-6 offset-lg-0 col-md-6 offset-md-3 col-6"
                  key={index}
                >
                  <img src={item.src} alt={item.src} className="img-fluid" />
                  <h2 style={{ color: "#fff", textAlign: "center" }}>
                    {item.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-10 col-md-8 col-8"
            style={{
              textAlign: "center",
              margin: "50px auto",
            }}
          >
            <a
              href="https://lpe.vn/register.php?type=general"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://lpe.vn/storage/vip-lpe/dang-ky.gif"
                alt="https://lpe.vn/storage/vip-lpe/dang-ky.gif"
                className="img-fluid"
              />
            </a>
          </div>
        </div>

        <RegisterButton
          src="https://lpe.vn/storage/vip-lpe/dang-ky.gif"
          href="https://lpe.vn/register.php?type=general"
          buttonClass="register-btn"
          title="Đăng ký tìm lại lẽ sống và khát vọng thành công"
        />

        <ScrollButton
          classIcon="far fa-angle-up"
          classButton="scrollToTop"
          href="#root"
        />
      </div>
    </>
  );
}

export default CourseOne;
