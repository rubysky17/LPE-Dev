import React from "react";

import "./styles/styles.scss";

function InfoTab({ content }) {
  return (
    <div className="info">
      <p>{content}</p>
    </div>
  );
}

export default InfoTab;
