import React, { useEffect, useState } from "react";
import { WOW } from "wowjs";
// import assets
import { menu, program, flipCardCourse1, flipCardCourse2, picture  } from "./data";
import bio from "assets/images/bio.png";
import logo from "assets/images/lahagiangthanh.png";
import thuNgo from "assets/images/thuNgo.gif";
import hocPhi from "assets/images/hocPhi.png";
import bg from "assets/images/bg.jpg";
import khoa1 from "assets/images/khoa1.png";
import khoa2 from "assets/images/khoa2.png";
// component
import FormDangKy from "./component/formDangKy";
import Loading from "./component/loading";

import "./styles/styles.scss";

function BeautyFromWomen() {
  const [toggle, setToggle] = useState(false);
  const [onLoading, setOnLoading] = useState(true);

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setOnLoading(false);
    }, 3000);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      live: true,
    });

    wow.init();
  }, [onLoading]);

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
                    <a href="#gioiThieu">BFW</a>
                  </li>
                  <li className="itemNavbar">
                    <a href="#bio">Bio</a>
                  </li>
                  <li className="itemNavbar">
                    <a href="#hocPhi">Khóa học</a>
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
            <img src={bg} alt={bg} className="img-fluil" />
          </div>

          {/* Thư ngỏ */}
          <div className="container letter my-5">
            <div className="row">
              <div
                className="col-12 col-lg-6 img-gif_big wow fadeInLeft"
                data-wow-delay=".25s"
              >
                <img src={thuNgo} alt={thuNgo} className="img-fluid" />
              </div>
              <div
                className="col-12 col-lg-6  letter-text wow fadeInRight"
                data-wow-delay=".25s"
              >
                <div className="mb-2">
                  <p className="letter-title">Chào quý cô</p>
                </div>
                <p className="text-bolder">
                  Là Giang Thanh đây & thật tuyệt vời khi bạn đang đọc những
                  dòng này.
                </p>
                <p className="mb-2">
                  Giang Thanh là Nhà tư vấn trị liệu, Chuyên gia đào tạo & là
                  Diễn giả trong các lĩnh vực khác nhau như khoa học NLP, Time
                  Line Therapist, Hypnotherapist, Thiền định & Yoga.
                </p>
                <p className="mb-2">
                  Trong hơn 10 năm qua, Thanh đã có cơ hội được làm việc cùng
                  hàng ngàn chị em phụ nữ. Và Thanh nhận ra một điều đáng buồn
                  là, hầu hết phụ nữ chúng ta thường thiếu tự tin bởi chính bản
                  thân mình. Nhan sắc thường là điểm lớn nhất cản trở chị em phụ
                  nữ, khiến họ dần trở nên tự ti, sống khép mình hoặc suy nghĩ
                  tiêu cực.
                </p>
                <p className="mb-2">
                  Biểu hiện thường gặp nhất của phụ nữ chính là chúng ta không
                  hài lòng với cơ thể của mình & đôi khi hay ganh tị, tủi thân
                  vì không được hoàn mỹ như người khác.
                </p>
              </div>
              <div
                className="col-12 col-lg-6 img-gif_small wow fadeInLeft"
                data-wow-delay=".25s"
              >
                <img src={thuNgo} alt={thuNgo} className="img-fluid" />
              </div>
              <div
                className="col-12 mt-3 text-center wow fadeInLeft"
                data-wow-delay=".25s"
              >
                <p className="mb-2">
                  Nếu bạn đang nhìn thấy hình ảnh đó ở mình, có lẽ bạn đã không
                  thật sự yêu thương & nhìn thấy được giá trị ở chính mình trong
                  một thời gian dài.
                </p>
                <p className="mb-2">
                  Và bạn chính là lý do để Giang Thanh tiếp tục hành trình của
                  mình, giúp cho tất cả những người phụ nữ trở nên tự tin đẹp từ
                  bên trong ra ngoài & yêu thương chính mình thật đúng cách.
                </p>
              </div>
            </div>
          </div>

          {/* Giới thiệu chương trình */}
          <div className="container route my-5" id="gioiThieu">
            <h1
              className="text-center heading-writer margin-text wow fadeInUp"
              data-wow-delay=".25s"
            >
              Món quà giá trị Giang Thanh dành cho bạn!
            </h1>
            {program.map((ele, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-12">
                    <h3
                      className="text-level text-center wow fadeInUp"
                      style={{
                        color:
                          ele.level ===
                          "Level 1: BEAUTY FROM WITHIN - ĐẸP TỪ BÊN TRONG"
                            ? "#efbbcf"
                            : "#8675a9",
                      }}
                    >
                      {ele.level}
                    </h3>
                  </div>
                  <div className="col-12 col-md-6 my-3 route-text  wow fadeInLeft">
                    <p>{ele.description}</p>
                  </div>
                  <div className="col-12 col-md-6 my-3  wow fadeInRight">
                    <iframe
                      width="100%"
                      height="315"
                      src={ele.video}
                      title="YouTube video player"
                    ></iframe>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background description */}
          <div className="bg-description my-5 ">
            <div className="container-fluid wow fadeInUp">
              <p>
                <span className="quote mr-1">
                  <i className="fal fa-quote-left "></i>
                </span>
                Con người không sai khi khao khát hạnh phúc. Chúng ta chỉ sai
                khi cất công đi tìm hạnh phúc ở bên ngoài mà thật sự nó lại ở
                bên trong chính mình.
                <span className="quote ml-1">
                  <i className="fal fa-quote-right"></i>
                </span>
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
            <h1
              className="text-center my-5 heading-title wow fadeInUp"
              data-wow-delay=".25s"
            >
              Giá trị chương trình
            </h1>
            <div className="row text-center">
              <div className="col-12">
                <p className="text-level wow fadeInUp ">Level 1</p>
                <img
                  src={khoa1}
                  alt={khoa1}
                  className="img-fluid img-khoa_1 wow fadeInUp "
                />
              </div>

              {flipCardCourse1.map((card, index) => {
                return (
                  <div
                    className="col-12 col-lg-4 wrapper-card wow fadeInLeft"
                    key={index}
                  >
                    <div className="center">
                      <div
                        className="front-face"
                        style={{
                          backgroundImage: `url(${card.hinhAnh})`,
                        }}
                      >
                        <div className="contents front">
                          <p>{card.front}</p>
                        </div>
                      </div>
                      <div className="back-face purple">
                        <div className="contents back">
                          <p>{card.back}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="col-12">
                  <p  className="text-level wow fadeInUp ">Level 2</p>

                <img
                  src={khoa2}
                  alt={khoa2}
                  className="img-fluid img-khoa_1 wow fadeInUp "
                />
              </div>

              {flipCardCourse2.map((card, index) => {
                return (
                  <div
                    className="col-12 col-lg-4 wrapper-card wow fadeInLeft"
                    key={index}
                  >
                    <div className="center">
                      <div
                        className="front-face "
                        style={{
                          backgroundImage: `url(${card.hinhAnh})`,
                        }}
                      >
                        <div className="contents front">
                          <p>{card.front}</p>
                        </div>
                      </div>
                      <div className="back-face">
                        <div className="contents back">
                          <p>{card.back}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bio */}
          <div className="container my-5" id="bio">
            <div className="row wrapper-bio">
              <div className="col-12 col-md-6 wow fadeInLeft">
                <img src={bio} alt={bio} className="img-fluid" />
              </div>
              <div className="col-12 col-md-6 wow fadeInRight">
                <h2 className="text-center mb-3">Ms. La Hạ Giang Thanh</h2>
                <p className="mb-2">
                  Hơn 10 năm làm việc trong lĩnh vực đào tạo, cô Giang Thanh
                  luôn nhìn thấy được vấn đề tồn đọng níu chân những chị em phụ
                  nữ xung quanh mình, khiến họ khó lòng hạnh phúc trọn vẹn. Đó
                  là lý do cô quyết tâm xây dựng nên chương trình này.
                </p>
                <p className="mb-2">
                  Đối với cô Giang Thanh, mọi nỗ lực và cống hiến của cô là để
                  thực hiện sứ mệnh "Mỗi người trên thế giới này đều được sống
                  với giá trị chân thật của bản thân mình". Khi đó, bất kỳ ai
                  cũng có thể làm chủ cuộc đời mình & thật sự sống trong bình
                  an, hạnh phúc.
                </p>
                <p className="mb-2">
                  Các chương trình đào tạo của cô Giang Thanh mang một màu sắc
                  rất riêng, là liều thuốc cho tâm hồn của mỗi người. Không hẳn
                  là những thứ "đao to búa lớn" xa tầm với, các giá trị mà cô
                  Giang Thanh mang lại chính là sự khai sáng, giúp các khách
                  hàng giải quyết triệt để vấn đề của mình, mở ra con đường mới
                  đầy niềm tin và giàu động lực.
                </p>
              </div>
            </div>
          </div>

          {/* Học phí */}
          <div className="container-fluid my-5" id="hocPhi">
            <h1 className="text-center heading-title wow fadeInUp mb-4">
              Khóa học
            </h1>
            <div className="row wow fadeInLeft">
              <img src={hocPhi} alt={hocPhi} className="img-fluid img-fee" />
            </div>
          </div>

          {/* Form đăng ký */}
          <div className="bg-dangKy">
            <div className="container-fluid py-5" id="dangKy">
              <h1 className="text-center heading-title wow fadeInUp">
                Đăng ký tư vấn khóa học
              </h1>
              <div className="row">
                <div className="col-12 wrapper-form wow zoomInLeft">
                  <FormDangKy />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <p className="text-center text-thank wow fadeInUp">
              “Cảm ơn tất cả những quý cô suốt thời gian qua đã tin tưởng để
              đồng hành với Thanh. Nếu không có những quý cô thì sẽ không thể
              nào có Giang Thanh ngày hôm nay!”
            </p>
            <p className="text-center letter-title thank-you wow fadeInUp thank-text">
              THANK YOU
            </p>
          </div>

          {/* Ảnh */}
          <div className="container-fluid mb-5">
            <div className="row">
              {picture.map((pic, index) => {
                return (
                  <div className="col-12 col-md-3 mt-3" key={index}>
                    <img src={pic} alt={pic} className="img-fluid" />
                  </div>
                );
              })}
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
