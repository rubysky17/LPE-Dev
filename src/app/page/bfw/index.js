import React, { useEffect, useState } from "react";
import "./styles/styles.scss";

import video from "assets/images/video.jpg";
import bio from "assets/images/bio.jpg";
import anh1 from "assets/images/anh1.jpg";
import anh2 from "assets/images/anh2.jpg";
import anh3 from "assets/images/anh3.jpg";
import anh4 from "assets/images/anh4.jpg";
import logo from "assets/images/lahagiangthanh.png";
import thuNgo from "assets/images/thuNgo.gif";
import FormDangKy from "./component/formDangKy";
import Loading from "./component/loading";

function BeautyFromWomen() {
  const [toggle, setToggle] = useState(false);
  const [onLoading, setOnLoading] = useState(true);
  const menu = [
    {
      link: "#khoaHoc",
      content: "Khóa học",
    },
    {
      link: "#bio",
      content: "Bio",
    },
    {
      link: "#root",
      img: logo,
    },
    {
      link: "#hocPhi",
      content: "Học phí",
    },
    {
      link: "#dangKy",
      content: "Đăng ký",
    },
  ];
  const program = [
    {
      id: 1,
      level: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Harum vitae repellat aut, ratione quidem ipsum quos nam assumenda possimus voluptates.",
      img: video,
      video: "",
    },
    {
      id: 2,
      level: 2,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Harum vitae repellat aut, ratione quidem ipsum quos nam assumenda possimus voluptates.",
      img: video,
      video: "",
    },
  ];

  const flipCardCourse1 = [
    {
      id: 1,
      front: "",
      back: "",
    },
    {
      id: 1,
      front: "",
      back: "",
    },
    {
      id: 1,
      front: "",
      back: "",
    },
  ];

  const flipCardCourse2 = [
    {
      id: 1,
      front: "",
      back: "",
    },
    {
      id: 1,
      front: "",
      back: "",
    },
    {
      id: 1,
      front: "",
      back: "",
    },
  ];

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setOnLoading(false);
    }, 3000);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  return (
    <>
      {onLoading ? (
        <Loading />
      ) : (
        <>
          {/* navbar */}
          <nav className="navbar navbar-dp-big">
            <ul className="listNavbar">
              {menu.map((item, index) => {
                return (
                  <li className="itemNavbar" key={index}>
                    <a href={item.link}>
                      {!item.img ? (
                        item.content
                      ) : (
                        <img src={logo} alt={logo} className="img-logo" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav
            className={`navbar navbarSmall navbar-dp-small ${
              !!toggle && "nav-open"
            }`}
            style={{
              opacity: toggle && "1",
            }}
          >
            <ul className="listNavbar">
              <li className="itemNavbar itemLogo">
                <a href="#root">
                  <img src={logo} alt={logo} className="img-logo" />
                </a>
              </li>

              <li
                className="itemNavbar icon"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {!toggle ? (
                  <i className="far fa-bars"></i>
                ) : (
                  <i className="far fa-times"></i>
                )}
              </li>
            </ul>

            {
              <>
                <ul className="navMobile">
                  <li className="itemNavbar">
                    <a href="#khoaHoc">Khóa học</a>
                  </li>
                  <li className="itemNavbar">
                    <a href="#bio">Bio</a>
                  </li>
                  <li className="itemNavbar">
                    <a href="#hocPhi">Học phí</a>
                  </li>
                  <li className="itemNavbar">
                    <a href="#dangKy">Đăng ký</a>
                  </li>
                </ul>
              </>
            }
          </nav>

          {/* Content */}
          {/* background  */}
          <div className="bg-course">
            <div className="course">
              {/* <h1>Khóa học dành riêng cho phụ nữ</h1> */}
            </div>
          </div>

          {/* Thư ngỏ */}
          <div className="container letter my-5">
            <div className="row">
              <div className="col-md-6 col-12">
                <img src={thuNgo} alt={thuNgo} className="img-fluid" />
              </div>
              <div className="col-md-6 col-12 letter-text">
                <div className="bg-xinChao mb-5 mt-md-3">
                  <p className="letter-title">Xin chào người đẹp</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  provident, amet, voluptatem explicabo nostrum cupiditate nam
                  culpa facere voluptates perferendis possimus minus sed
                  repellendus et officiis quia quisquam voluptas. Nihil! Quis
                  magnam necessitatibus eius debitis doloribus, inventore quia
                  exercitationem quas.
                </p>
                <button type="button" className="btn-scroll">
                  <a href="#bio">Về tôi</a>
                </button>
              </div>
            </div>
          </div>

          {/* Giới thiệu chương trình */}
          <div className="container route my-5" id="gioiThieu">
            <h1 className="text-center my-5">Giới thiệu chương trình</h1>
            {program.map((ele, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-12">
                    <h2 className="text-center">Level {ele.level}</h2>
                  </div>
                  <div className="col-12 col-md-6 my-3 route-text">
                    <h3 className="text-center">Mô tả</h3>
                    <p>{ele.description}</p>
                    <p>{ele.description}</p>
                    <p>{ele.description}</p>
                  </div>
                  <div className="col-12 col-md-6 my-3">
                    <div className="route-video">
                      <img src={ele.img} alt={ele.img} className="img-fluid" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background descrip`tion */}
          <div className="bg-description my-5">
            <div className="container">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                veniam ab quaerat pariatur nihil modi? Ipsam odit velit ab
                consectetur facilis qui, officiis, excepturi esse saepe culpa a!
                Deserunt, voluptatibus!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                veniam ab quaerat pariatur nihil modi? Ipsam odit velit ab
                consectetur facilis qui, officiis, excepturi esse saepe culpa a!
                Deserunt, voluptatibus!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                veniam ab quaerat pariatur nihil modi? Ipsam odit velit ab
                consectetur facilis qui, officiis, excepturi esse saepe culpa a!
                Deserunt, voluptatibus!
              </p>
            </div>
            <div>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={0}
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={3}
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={5}
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                </g>
              </svg>
            </div>
          </div>

          {/* Card lật */}
          <div className="container">
            <div className="row text-center">
              <h2 className="text-center col-12">Khóa 1</h2>
              {
                flipCardCourse1.map((card, index) => {
                  return (
                    <div className="col-12 col-lg-4 wrapper-card" key={index}>
                      <div className="center">
                        <div className="front-face">
                          <div className="contents front">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nemo, quae!
                            </p>
                            <span>LOREM</span>
                          </div>
                        </div>
                        <div className="back-face">
                          <div className="contents back">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Harum vitae repellat aut,
                              ratione quidem ipsum quos nam assumenda possimus
                              voluptates.
                            </p>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Harum vitae repellat aut,
                              ratione quidem ipsum quos nam assumenda possimus
                              voluptates.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
              <h2 className="text-center col-12">Khóa 2</h2>;

              {
                flipCardCourse2.map((card, index) => {
                  return (
                    <div className="col-12 col-lg-4 wrapper-card" key={index}>
                      <div className="center">
                        <div className="front-face">
                          <div className="contents front">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nemo, quae!
                            </p>
                            <span>LOREM</span>
                          </div>
                        </div>
                        <div className="back-face">
                          <div className="contents back">
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Harum vitae repellat aut,
                              ratione quidem ipsum quos nam assumenda possimus
                              voluptates.
                            </p>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Harum vitae repellat aut,
                              ratione quidem ipsum quos nam assumenda possimus
                              voluptates.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>

          {/* Bio */}
          <div className="container my-5" id="bio">
            <h1 className="text-center mb-5">Bio</h1>
            <div className="row wrapper-bio">
              <div className="col-12 col-md-6">
                <img src={bio} alt={bio} className="img-fluid" />
              </div>
              <div className="col-12 col-md-6">
                <h2 className="text-center mb-3">Ms. La Hạ Giang Thanh</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  possimus, sapiente inventore odio rerum, sunt qui perferendis
                  ducimus cum expedita illo debitis quia quas! Architecto
                  repudiandae expedita reiciendis modi pariatur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  possimus, sapiente inventore odio rerum, sunt qui perferendis
                  ducimus cum expedita illo debitis quia quas! Architecto
                  repudiandae expedita reiciendis modi pariatur.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  possimus, sapiente inventore odio rerum, sunt qui perferendis
                  ducimus cum expedita illo debitis quia quas! Architecto
                  repudiandae expedita reiciendis modi pariatur.
                </p>
              </div>
            </div>
          </div>

          {/* Form đăng ký */}
          <div className="bg-dangKy">
            <div className="container-fluid py-5" id="dangKy">
              <h1 className="text-center">Đăng ký khóa học</h1>
              <div className="row">
                <div className="col-12 wrapper-form">
                  <FormDangKy />
                </div>
              </div>
            </div>
          </div>

          {/* Ảnh */}
          <div className="container-fluid mb-5">
            <h1 className="text-center my-5">Ảnh</h1>
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3">
                <img src={anh1} alt={anh1} className="img-fluid" />
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <img src={anh2} alt={anh2} className="img-fluid" />
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <img src={anh3} alt={anh3} className="img-fluid" />
              </div>
              <div className="col-12 col-sm-6 col-md-3">
                <img src={anh4} alt={anh4} className="img-fluid" />
              </div>
            </div>
          </div>

          {/* Footer */}
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
        </>
      )}
    </>
  );
}

export default BeautyFromWomen;
