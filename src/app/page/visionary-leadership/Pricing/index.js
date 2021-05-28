import React from "react";
import {Zoom} from "react-reveal/"
// media import
import price01 from "assets/images/price01.png";
import price02 from "assets/images/price02.png";

import "./styles/styles.scss";

function Princing() {
  const imgPrice = [price01, price02];

  return (
    <div className="pricing py-5">
      <div className="container">
      <div className="row wrapper-card">
        {imgPrice.map((img, index) => {
          return (
            <Zoom key={index}>
              <div className="col-12 col-md-6 card-item">
                <div className="card-shadow">
                <img src={img} className="img-fluid img" alt={img} />

                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
      </div>
     
    </div>
  );
}

export default Princing;
