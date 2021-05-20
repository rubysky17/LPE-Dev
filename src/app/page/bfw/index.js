import React, { useState } from "react";
import "./styles/styles.scss";

import hinhThu from "assets/images/hinhGiangThanh.jpg";
import video from "assets/images/video.jpg";
import bio from "assets/images/bio.jpg";
import anh1 from "assets/images/anh1.jpg";
import anh2 from "assets/images/anh2.jpg";
import anh3 from "assets/images/anh3.jpg";
import anh4 from "assets/images/anh4.jpg";
import thuNgo from "assets/images/thuNgo.gif";
import FormDangKy from "./component/formDangKy";

function BeautyFromWomen() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-dp-big">
        <ul className="listNavbar">
          <li className="itemNavbar">
            <a href="#gioiThieu">Khóa học</a>
          </li>

          <li className="itemNavbar">
            <a href="#bio">Bio</a>
          </li>

          <li className="itemNavbar itemLogo">
            <a href="#root">LOGO</a>
          </li>

          <li className="itemNavbar">
            <a href="#hocPhi">Học phí</a>
          </li>

          <li className="itemNavbar">
            <a href="#dangKy">Đăng ký</a>
          </li>
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
            <a href="#root">LOGO</a>
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
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit ?</h1>
        </div>
      </div>

      {/* Thư ngỏ */}
      <div className="container letter my-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <img src={thuNgo} alt={thuNgo} className="img-fluid" />
          </div>
          <div className="col-md-6 col-12 letter-text">
            <h1 className="text-center">title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              provident, amet, voluptatem explicabo nostrum cupiditate nam culpa
              facere voluptates perferendis possimus minus sed repellendus et
              officiis quia quisquam voluptas. Nihil! Quis magnam necessitatibus
              eius debitis doloribus, inventore quia exercitationem quas.
              Maxime, cum? Animi officia ducimus, asperiores sed accusantium ut,
              dolor voluptas, vel nobis quas omnis distinctio natus laboriosam
              debitis repudiandae. Quis magnam necessitatibus eius debitis
              doloribus, inventore quia exercitationem quas. Maxime, cum? Animi
              officia ducimus, asperiores sed accusantium ut, dolor voluptas,
              vel nobis quas omnis distinctio natus laboriosam debitis
              repudiandae.
            </p>
            <button
              type="button"
              className="btn btn-outline-primary btn-scroll"
            >
              <a href="/"> Tìm hiểm thêm </a>
            </button>
          </div>
        </div>
      </div>

      {/* Giới thiệu chương trình */}
      <div className="container route my-5" id="gioiThieu">
        <h1 className="text-center my-5">Giới thiệu chương trình</h1>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Level 1</h2>
          </div>
          <div className="col-12 col-md-6 my-3 route-text">
            <h3 className="text-center">Mô tả</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cum, dolores vero fuga eius ut nam? Quibusdam, in nisi! Blanditiis
              molestias illo, accusamus minima quo recusandae magni omnis autem
              vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cum, dolores vero fuga eius ut nam? Quibusdam, in nisi! Blanditiis
              molestias illo, accusamus minima quo recusandae magni omnis autem
              vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cum, dolores vero fuga eius ut nam? Quibusdam, in nisi! Blanditiis
              molestias illo, accusamus minima quo recusandae magni omnis autem
              vel.
            </p>
          </div>
          <div className="col-12 col-md-6 my-3">
            <div className="route-video">
              <img src={video} alt={video} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center">Level 2</h2>
          </div>
          <div className="col-12 col-md-6 route-text">
            <h3 className="text-center">Mô tả</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cum, dolores vero fuga eius ut nam? Quibusdam, in nisi! Blanditiis
              molestias illo, accusamus minima quo recusandae magni omnis autem
              vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cum, dolores vero fuga eius ut nam? Quibusdam, in nisi! Blanditiis
              molestias illo, accusamus minima quo recusandae magni omnis autem
              vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              cum, dolores vero fuga eius ut nam? Quibusdam, in nisi! Blanditiis
              molestias illo, accusamus minima quo recusandae magni omnis autem
              vel.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="route-video">
              <img src={video} alt={video} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Background description */}
      <div class="bg-description my-5">
        <div class="container">
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
      </div>

      {/* Card lật */}
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-12 col-md-4 wrapper-card">
            <div className="center">
              <div className="front-face">
                <div className="contents front">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quae!
                  </p>
                  <span>LOREM</span>
                </div>
              </div>
              <div className="back-face">
                <div className="contents back">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 wrapper-card ">
            <div className="center">
              <div className="front-face">
                <div className="contents front">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quae!
                  </p>
                  <span>LOREM</span>
                </div>
              </div>
              <div className="back-face">
                <div className="contents back">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 wrapper-card">
            <div className="center">
              <div className="front-face">
                <div className="contents front">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quae!
                  </p>
                  <span>LOREM</span>
                </div>
              </div>
              <div className="back-face">
                <div className="contents back">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 col-md-4 wrapper-card ">
            <div className="center">
              <div className="front-face">
                <div className="contents front">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quae!
                  </p>
                  <span>LOREM</span>
                </div>
              </div>
              <div className="back-face">
                <div className="contents back">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 wrapper-card ">
            <div className="center">
              <div className="front-face">
                <div className="contents front">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quae!
                  </p>
                  <span>LOREM</span>
                </div>
              </div>
              <div className="back-face">
                <div className="contents back">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 wrapper-card">
            <div className="center">
              <div className="front-face">
                <div className="contents front">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quae!
                  </p>
                  <span>LOREM</span>
                </div>
              </div>
              <div className="back-face">
                <div className="contents back">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Harum vitae repellat aut, ratione quidem ipsum quos nam
                    assumenda possimus voluptates.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
          <div className="col-6 col-md-3">
            <img src={anh1} alt={anh1} className="img-fluid" />
          </div>
          <div className="col-6 col-md-3">
            <img src={anh2} alt={anh2} className="img-fluid" />
          </div>
          <div className="col-6 col-md-3">
            <img src={anh3} alt={anh3} className="img-fluid" />
          </div>
          <div className="col-6 col-md-3">
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
            490 Phạm Thái Bường, Khu Mỹ Toàn I, P. Tân Phong, Quận 7, TP. HCM.
          </span>
        </div>

        <div className="f-line">
          Sáng: 7h30 - 12h00 <i className="far fa-clock"></i>
          Chiều: 13h00 - 16h30
        </div>
        <div className="f-line mr-0">
          <span className="f-line_phone">
            <i className="fas fa-phone-alt"></i> 028 7303 9996 - 1900 636 034
          </span>
        </div>
      </footer>
    </>
  );
}

export default BeautyFromWomen;
