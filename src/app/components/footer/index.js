import React from "react";

import "./styles/styles.scss";

function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="row">
          <div className="col-12 col-md-4">
            <h4 className="footer-title">Về chúng tôi</h4>

            <p className="text">LPE live là công cụ giúp học viên học trực tuyến</p>

            <p className="text">
              Các khoá học được đầu tư kỹ lưỡng từ nội dung tới chất lượng hình
              ảnh và âm thanh.
            </p>

            <p className="text">
              Học viên có thể học từ con số 0 tới khi trở thành Coaching chuyên
              nghiệp tại đây.
            </p>
          </div>
          <div className="col-12 col-md-2"></div>
          
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <h4 className="footer-title">Địa chỉ</h4>
            <p className="text">Công ty TNHH Giáo dục Leading Performance</p>

            <p className="text">
            <i className="fal fa-map-marker mr-1"></i>
              Địa chỉ: 490 Phạm Thái Bường, Khu Mỹ Toàn 1, P. Tân Phong, Quận 7,
              TP.HCM
            </p>

            <p className="text">
            <i className="fal fa-phone-alt mr-1"></i>
                SĐT: 028 7303 9996 - 1900 636 034</p>

            <p className="text">
            <i className="fal fa-envelope mr-1"></i>
                Email: studentcare@lpe.vn - info@lpe.vn</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
