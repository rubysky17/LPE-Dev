import React, { useEffect, useState } from "react";

import "./styles/styles.scss";

function BenefitTab({ benefit }) {
  const [benefitContent, setBenefitContent] = useState(null);

  useEffect(() => {
    benefit && setBenefitContent(benefit);
  }, [benefit]);

  return (
    <div className="benefit">
      <ul>
        {!!benefitContent &&
          benefitContent?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default BenefitTab;
