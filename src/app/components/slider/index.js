import React, { Component } from "react";

import "./styles/styles.scss";

// =========================
// Slide
// =========================

class Slide extends Component {
  constructor(props) {
    super(props);

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
    this.imageLoaded = this.imageLoaded.bind(this);
    this.slide = React.createRef();
  }

  handleMouseMove(event) {
    const el = this.slide.current;
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

  handleMouseLeave(event) {
    this.slide.current.style.setProperty("--x", 0);
    this.slide.current.style.setProperty("--y", 0);
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index);
  }

  imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  handleDetail(index) {
    console.log("ham chay", index);
  }

  render() {
    const { src, button, headline, index } = this.props.slide;
    const current = this.props.current;
    let classNames = "slide";

    if (current === index) classNames += " slide--current";
    else if (current - 1 === index) classNames += " slide--previous";
    else if (current + 1 === index) classNames += " slide--next";

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
  }
}

// =========================
// Slider
// =========================

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { current: 0, onOpen: false };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSlideClick = this.handleSlideClick.bind(this);
  }

  handlePreviousClick() {
    const previous = this.state.current - 1;

    this.setState({
      current: previous < 0 ? this.props.slides.length - 1 : previous,
    });
  }

  handleNextClick() {
    const next = this.state.current + 1;

    this.setState({
      current: next === this.props.slides.length ? 0 : next,
    });
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      });
    }
  }

  handleClick() {
    this.setState({
      onOpen: !this.state.onOpen,
    });
  }

  render() {
    const { current, onOpen } = this.state;
    const { slides, heading } = this.props;

    const headingId = `slider-heading__${heading
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    const wrapperTransform = {
      transform: `translateX(-${current * (100 / slides.length)}%)`,
    };

    return (
      <>
        <div className="slider" aria-labelledby={headingId}>
          <ul className="slider__wrapper" style={wrapperTransform}>
            {slides.map((slide) => {
              return (
                <Slide
                  key={slide.index}
                  slide={slide}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                  openDetail={onOpen}
                />
              );
            })}
          </ul>
        </div>

        {onOpen && (
          <>
            <p>Open</p>
          </>
        )}
      </>
    );
  }
}
