import React from "react";

function ScrollButton({ classButton, classIcon, href }) {
  return (
    <a className={classButton} href={href}>
      <i className={classIcon}></i>
    </a>
  );
}

export default ScrollButton;
