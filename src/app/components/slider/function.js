import React, { useState } from "react";

function Slider({ heading, slides }) {
  const [current, setCurrent] = useState(0);
  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        {slides.map((slide) => {
          return (
            <li
              ref={this.slide}
              className={classNames}
              onClick={this.handleSlideClick}
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="slide__image-wrapper">
                <img
                  className="slide__image"
                  alt={headline}
                  src={src}
                  onLoad={this.imageLoaded}
                />
              </div>

              <article className="slide__content">
                <h2 className="slide__headline">{headline}</h2>
                <button
                  className="slide__action btn-detail"
                  onClick={() => {
                    this.handleDetail(index);
                  }}
                >
                  {button}
                </button>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Slider;
