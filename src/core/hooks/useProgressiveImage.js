import { useState, useEffect } from "react";

function useProgressiveImage(src) {
  const [sourceLoaded, setSourceLoaded] = useState(null);

  useEffect(() => {
    const img = new Image(); // tạo đối tượg images
    img.src = src;
    img.onload = () => setSourceLoaded(src);
  }, [src]);

  return sourceLoaded;
}

export default useProgressiveImage;
