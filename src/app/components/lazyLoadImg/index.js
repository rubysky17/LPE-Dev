import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadImg = ({ height, src, alt, width, className, style }) => (
  <>
    <LazyLoadImage
      alt={alt}
      src={src} // use normal <img> attributes as props
      height={height}
      width={width}
      effect="blur"
      className={className}
      style={style}
    />
  </>
);

export default LazyLoadImg;
