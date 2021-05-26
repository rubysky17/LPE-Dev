import React, { useState,useRef } from "react";

import "./styles/styles.scss";


const Slide = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef()
  const { src, button, headline, index } = slide;

  let classNames = "slide";
  
  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  }
  
  const handleMouseLeave = (event) => {
    slideRef.current.style.setProperty("--x", 0);
    slideRef.current.style.setProperty("--y", 0);
  }

  const onHandleSlideClick = (event) => {
    handleSlideClick(slide.index);
  }

  function imageLoaded(event) {
    event.target.style.opacity = 1;
  }
  
  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={onHandleSlideClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={src}
          src={src}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button
          className="slide__action btn-detail"
        >
          {button}
        </button>
      </article>
    </li>
  );
};

function Slider({ heading, slides }) {
  const [current, setCurrent] = useState(0);

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        {slides.map((slide) => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Slider;
