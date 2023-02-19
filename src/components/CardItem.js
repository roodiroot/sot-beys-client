import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedProduct } from '../features/products/productsSlice';
import { thousandPrice } from '../function/thousandPrice';

function CardItem({ price, path, name, category, img, id }) {
  const dispatch = useDispatch();
  const pathName = `/catalog-category/${category}/${path}`;
  const navigate = useNavigate();

  const selectedProduct = () => {
    navigate(pathName);
  };

  return (
    <div onClick={selectedProduct} className="typePresent__cardBody cardBodyType">
      <div className="cardBodyType__imgBlock">
        <picture>
          <source
            srcSet={process.env.REACT_APP_API_URL + '/' + img[0] + '.max.webp'}
            type="image/webp"
          />
          <img src={process.env.REACT_APP_API_URL + '/' + img[0] + '.max.jpeg'} alt="imgCardItem" />
        </picture>
      </div>
      <div className="cardBodyType__contentBlock">
        <div className="cardBodyType__title">{name}</div>
        <div className="cardBodyType__price">Цена от {thousandPrice(price)}</div>
      </div>
    </div>
  );
}

export default CardItem;
