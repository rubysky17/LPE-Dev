import React from "react";

import "./styles/styles.scss";

function Coach({ picture, name }) {
  return (
    <div className="content-coach">
      <img
        src={picture}
        alt={picture}
        className="img-fluid content-coach_img"
      />

      <p className="content-coach_name">{name}</p>
    </div>
  );
}

export default Coach;
