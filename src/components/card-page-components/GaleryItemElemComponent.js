import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { deleteItemBasket } from '../../features/basket/basketSlice';
import { getOneProductItems } from '../../http/productApi';

function GaleryItemElemComponent({ selectItem }) {
  const [activeImg, setActiveImg] = useState(selectItem[0]);

  const mainImg = (index) => {
    setActiveImg(selectItem[index]);
  };

  return (
    <div className="cardItem__photoBlock photoBlock">
      <div className="photoBlock__galery">
        {selectItem?.map((img, index) => (
          <div
            key={index}
            onClick={(e) => mainImg(index)}
            className={classNames('photoBlock__galeryItem', {
              active: img === activeImg,
            })}>
            <picture>
              <source
                srcSet={process.env.REACT_APP_API_URL + '/' + img + '.min.webp'}
                type="image/webp"
              />
              <img src={process.env.REACT_APP_API_URL + '/' + img + '.min.jpeg'} alt="minImg" />
            </picture>
          </div>
        ))}
      </div>
      <div className="photoBlock__mainPhoto">
        <picture>
          <source
            srcSet={process.env.REACT_APP_API_URL + '/' + activeImg + '.max.webp'}
            type="image/webp"
          />
          <img
            src={process.env.REACT_APP_API_URL + '/' + activeImg + '.max.jpeg'}
            alt="mainPotoItem"
          />
        </picture>
      </div>
    </div>
  );
}

export default GaleryItemElemComponent;
