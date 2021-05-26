import React from 'react';
import Slider from "app/components/slider";


import JC01 from "assets/images/journeyCourse/journeyCourse01.jpeg";
import JC02 from "assets/images/journeyCourse/journeyCourse02.jpeg";


import "./styles/styles.scss";

const slideData = [
  {
    index: 0,
    headline: "Ngày 1",
    button: "Xem thêm",
    src: JC01,
  },
  {
    index: 1,
    headline: "Ngày 2",
    button: "Xem thêm",
    src: JC02,
  },
];

function JourneyCourse() {
    return (
      <div className="journeyCourse  area-pd">
        <div className="container area-pt">
          <h2>HÀNH TRÌNH XÂY DỰNG TẦM NHÌN LÃNH ĐẠO</h2>
          <section>
            <div className="area-pd">
              
              <Slider heading="Heading Slider" slides={slideData} />

            </div>
          </section>
        </div>
      </div>
    );
}

export default JourneyCourse
