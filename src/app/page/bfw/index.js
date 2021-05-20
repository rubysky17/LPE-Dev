import React from "react";
import "./styles/styles.scss";

function BeautyFromWomen() {
  return (
    <>
      {/* navbar */}
      <nav className="navbar navbar-dp-big">
        <ul className='listNavbar'>
          <li className="itemNavbar">
            <a href="/">Khóa học</a>
          </li>

          <li className="itemNavbar">
            <a href="/">Bio</a>
          </li>

          <li className="itemNavbar">
            <a href="/">Khóa học</a>
          </li>

          <li className="itemNavbar">
            <a href="/">Khóa học</a>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="mt-5">
        <h1>THIS IS ENGLISH</h1>
        <h1>ĐANG VIẾT TIẾNG VIỆT</h1>
        <p>
          Bản tin sáng 20/5 của Bộ Y tế cho biết có thêm 30 ca mắc COVD-19 trong
          nước đều ghi nhận tại khu vực cách ly, phong toả, trong đó Bắc Ninh và
          Bắc Giang vẫn chiếm nhiều nhất với 21 ca. Việt Nam hiện có 4.720 bệnh
          nhân.
        </p>
      </div>

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
