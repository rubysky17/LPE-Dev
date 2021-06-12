import React from "react";

import "./styles/styles.scss";

function BenefitTab({ benefit }) {
  return (
    <div className="benefit">
      <p className="benefit-title">Lợi ích từ khóa học</p>

      <ul>
        {benefit?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default BenefitTab;
