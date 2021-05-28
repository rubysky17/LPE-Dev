import React, { useState } from "react";
import slider01 from "assets/images/slider/slider-01.jpeg";

import "./styles/styles.scss";

function Carousel() {

  function imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  return (
    <div className="wrapper-slider">
        <div className="carousel-inner">
          <div className="item active">
            <img
              src={slider01}
              alt={slider01}
              onLoad={imageLoaded}
            />
          </div>
        </div>
      </div>
  );
}

export default Carousel;
