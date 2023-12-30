import React from "react";
import { useNavigate } from "react-router-dom";
import { thousandPrice } from "../function/thousandPrice";
import ImgLazy from "./new-components/img-lazy/img-lazy";

function CardItem({ name, category, img, id, size, size_2, size_3 }) {
  const pathName = `/catalog-category/${category}/${id}`;
  const navigate = useNavigate();

  const selectedProduct = () => {
    navigate(pathName);
  };

  return (
    <div
      onClick={selectedProduct}
      className='typePresent__cardBody cardBodyType'
    >
      <div className='cardBodyType__imgBlock'>
        <ImgLazy src={img[0]} alt='element' />
      </div>
      <div className='cardBodyType__contentBlock'>
        <div className='cardBodyType__title'>{name}</div>
        <div className='cardBodyType__price'>
          {size?.length === 3 &&
            `от ${thousandPrice(size[0]?.fastex_standard_price)}`}
          {size_2?.length > 2 && `от ${thousandPrice(size_2[0]?.price)}`}
          {size_3?.length === 4 && `от ${thousandPrice(size_3[0]?.price)}`}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
