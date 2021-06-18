import React from "react";

import "./styles/styles.scss"

function Title({ text, desc }) {
  return (
    <div className="wrapper title mt-5">
      <h2>{text}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Title;
