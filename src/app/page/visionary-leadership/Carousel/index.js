import React, { useState } from "react";
import "./styles/styles.scss";
import slider01 from "assets/images/slider/slider-01.jpeg";
import Loading from "../Loading";

function Carousel() {
  const [onLoad, setOnLoad] = useState(false);

  return (
    <div className="slider">
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {!onLoad && (
          <>
              <div className="loading">
                <Loading />
            </div>
          </>
        )}
        <div className="carousel-inner">
          <div className="item active">
            <img
              src={slider01}
              alt={slider01}
              onLoad={() => {
                setOnLoad(true);
              }}
              style={{
                display: !onLoad && "none",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
