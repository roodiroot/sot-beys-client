import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import style from "./img-lazy.module.scss";

const ImgLazy = ({ src, alt, onLoad = () => {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);
  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.onload = () => setIsLoaded(true);
    }
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <picture
      className={classNames(style.container, {
        [style.containerLoaded]: isLoaded,
      })}
    >
      <img
        loading='lazy'
        ref={imageRef}
        className={classNames(style.image, {
          [style.imageLoaded]: isLoaded,
        })}
        src={process.env.REACT_APP_IMG + "/" + src}
        alt={alt}
      />
    </picture>
  );
};

export default ImgLazy;
