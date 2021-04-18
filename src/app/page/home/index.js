import React from "react";
import { usePageTitle } from "core/hooks/usePageTitle";
import findPurposes from "assets/images/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-banner.jpeg";
import bg1 from "assets/images/background1.png"
import bg2 from "assets/images/background2.png"

import "./styles/styles.scss";

function HomePage() {
  const title = "Trang chủ";

  usePageTitle(title);

  return (
    <>
      <div className="container">
        <img src={findPurposes} alt={findPurposes} className="img-fluid"/>

        <img src={bg1} alt={bg1} className="img-fluid"/>
        <img src={bg2} alt={bg2} className="img-fluid"/>

        <div className="row" style={{backgroundImage: 'linear-gradient(to top, #E21B81  , #49005D)'}}>

        </div>

      </div>
    </>
  );
}

export default HomePage;
