import React from "react";
import "./styles/styles.scss";

import logo3 from "../../../assets/images/logo3.png";

function Footer() {
  return (
    <footer>
      <div className="text-center">
        <a className="logo" href="/" title>
          <img src={logo3} alt title />
        </a>
      </div>
      <h3 className="name">Công Ty TNHH Giáo Dục Leading Performance</h3>

      <div className="f-line">
        <i className="fa fa-map-marker" />
        <span>
          490 Phạm Thái Bường, Khu Mỹ&nbsp;Toàn&nbsp;I, P. Tân&nbsp;Phong,
          Quận&nbsp;7, TP. HCM.
        </span>
      </div>

      <div className="f-line">
        Sáng: 7h00 - 11h30 <i className="fa fa-clock-o" />
        Chiều: 12h45 - 16h15
      </div>
      <div className="f-line">
        <i className="fa fa-phone" /> 028 7303 9996 - 1900 636 034 &nbsp;-&nbsp;{" "}
        <i className="fa fa-envelope-o" /> studentcare@lpe.vn - info@lpe.vn
      </div>
      <div className="footer">
        <div className="row row-ibl mid">
          <div className="col-md-6 col-xs-12 sm-center">
            <div className="social">
              <span>Kết nối với chúng tôi:</span>
              <a
                className="smooth f"
                href="https://www.facebook.com/lpe.vn.lifeuni/"
                title
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                className="smooth y"
                href="https://www.youtube.com/channel/UCY5TknGSpHSak7FOjJ5Mrng"
                title
              >
                <i className="fa fa-youtube-play" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 text-right sm-center">
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
