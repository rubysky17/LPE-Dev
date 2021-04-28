import React from "react";
import "./styles/styles.scss";


function Footer() {
 

  return (
    <footer>
      <div className="text-center">
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
      <div className="f-line mr-0">
        <span className="f-line_phone">
          <i className="fas fa-phone-alt"></i> 028 7303 9996 - 1900 636 034
        </span>
       
      </div>
    </footer>
  );
}

export default Footer;