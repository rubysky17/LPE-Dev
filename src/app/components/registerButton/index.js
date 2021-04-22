import React from "react";
import "./styles/styles.scss";

function RegisterButton({ title, src, href, buttonClass }) {
  return (
    <div className={buttonClass}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={src} title={title} />
      </a>
    </div>
  );
}
export default RegisterButton;
