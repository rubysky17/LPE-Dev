import React from "react";
import "./styles/styles.scss";

import logo3 from "../../../assets/images/logo3.png";

function Footer() {
  return (
    <footer>
      <div className="text-center">
        <a className="logo" href="/" title>
          <img src={logo3} alt="logo3" title />
        </a>
      </div>
      <h3 className="name">Công Ty TNHH Giáo Dục Leading Performance</h3>

      <div className="f-line">
        <i className="fas fa-map-marker-alt"></i>
        <span>
          490 Phạm Thái Bường, Khu Mỹ Toàn I, P. Tân Phong, Quận 7, TP. HCM.
        </span>
      </div>

      <div className="f-line">
        Sáng: 7h00 - 11h30 <i className="far fa-clock"></i>
        Chiều: 12h45 - 16h15
      </div>
      <div className="f-line">
        <span className="f-line_phone">
          <i className="fas fa-phone-alt"></i> 028 7303 9996 - 1900 636 034
        </span>
        <span className="f-line_envelope">
          <i className="fal fa-envelope"></i> studentcare@lpe.vn - info@lpe.vn
        </span>
      </div>

      <div className="row footer-connect">
        <div className="col-md-6 col-xs-12 social">
          <div className="footer-connect_left">
            <span>Kết nối với chúng tôi:</span>
            
            <a
              className="smooth f"
              href="https://www.facebook.com/lpe.vn.lifeuni/"
              title
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="smooth y"
              href="https://www.youtube.com/channel/UCY5TknGSpHSak7FOjJ5Mrng"
              title
            >
             <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="col-md-6 col-xs-12 text-right">
          <ul>
            <li>
              <a className="smooth" href="/pages?id=13">
                Hỏi đáp
              </a>
            </li>
            -
            <li>
              <a className="smooth" href="/pages?id=2">
                Điều Khoản &amp; Chính Sách
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 sm-center">
              Copyright © 2018 LPE. All rights reserved.
            </div>

            <div class="col-sm-4 text-right sm-center">
              Thiết kế website:
              <a class="smooth" href="https://cnv.vn/" title="">
                CNV.vn
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
