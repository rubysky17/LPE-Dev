import React from "react";

function Title({ text, desc }) {
  return (
    <div className="wrapper title mt-5">
      <h2>{text}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Title;
