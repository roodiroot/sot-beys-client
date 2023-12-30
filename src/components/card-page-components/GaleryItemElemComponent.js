import classNames from "classnames";
import React, { useState } from "react";
import ImgLazy from "../new-components/img-lazy/img-lazy";

function GaleryItemElemComponent({ selectItem }) {
  const [activeImg, setActiveImg] = useState(selectItem[0]);

  const mainImg = (index) => {
    setActiveImg(selectItem[index]);
  };

  return (
    <div className='cardItem__photoBlock photoBlock'>
      <div className='photoBlock__galery'>
        {selectItem?.map((img, index) => (
          <div
            key={index}
            onClick={(e) => mainImg(index)}
            className={classNames("photoBlock__galeryItem", {
              active: img === activeImg,
            })}
          >
            <ImgLazy src={img} alt='slider component' />
          </div>
        ))}
      </div>
      <div className='photoBlock__mainPhoto'>
        <ImgLazy src={activeImg} alt='main component' />
      </div>
    </div>
  );
}

export default GaleryItemElemComponent;
