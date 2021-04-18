import React from "react";
import "./styles/styles.scss";

import logo3 from "assets/images/logo3.png";

function Footer() {
  const iconMedia = [
    {
      href: "https://www.facebook.com/lpe.vn.lifeuni/",
      component: <i className="fab fa-facebook-f"></i>,
    },
    {
      href: "https://www.youtube.com/channel/UCY5TknGSpHSak7FOjJ5Mrng",
      component: <i className="fab fa-youtube"></i>,
    },
  ];
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
            <span className="connect-left_text">Kết nối với chúng tôi:</span>

            {iconMedia.map((item, index) => {
              return (
                <div className="button-circle mr-2" key={index}>
                  <a href={item.href} title>
                    {item.component}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-md-6 col-xs-12 footer-connect_right">
          <ul className="connect-right_list">
            <li className="mr-1">
              <a href="/pages?id=13">Hỏi đáp</a>
            </li>
            {" - "}
            <li className="ml-1">
              <a href="/pages?id=2">Điều Khoản & Chính Sách</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="foot">
        <div className="row footer-text">
          <div className="col-sm-8">
            Copyright © 2018 LPE. All rights reserved.
          </div>

          <div className="col-sm-4 footer-text_right">
            <span>Thiết kế website: </span>
            <a className="mr-2" href="https://cnv.vn/" title="">
              CNV.vn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
