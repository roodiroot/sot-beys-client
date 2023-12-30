import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteItemBasket,
  dicrimentItem,
  incrimentItem,
} from "../../features/basket/basketSlice";
import { thousandPrice } from "../../function/thousandPrice";
import CounterComponent from "../CounterComponent";
import ImgLazy from "../new-components/img-lazy/img-lazy";
import { useNavigate } from "react-router-dom";

function BasketItemComponent({
  img,
  name,
  price,
  description,
  id,
  count,
  total,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='bodyOrders__content'>
      <div className='bodyOrders__photo'>
        <ImgLazy src={img} alt='basket-item' />
      </div>
      <div className='bodyOrders__descriptionBlock'>
        <div
          onClick={() => navigate(`/catalog-category/bascet/${id}`)}
          className='bodyOrders__name'
        >
          {name}
        </div>
        <div className='bodyOrders__price'>{thousandPrice(price)}</div>
        <div className='bodyOrders__descript'>{description}</div>
      </div>
      <CounterComponent
        id={id}
        incrimentItem={incrimentItem}
        dicrimentItem={dicrimentItem}
        count={count}
        style={{ marginLeft: "auto" }}
      />
      <div className='bodyOrders__totalSum'>{thousandPrice(total)}</div>
      <div
        onClick={(e) => dispatch(deleteItemBasket(id))}
        className='bodyOrders__deleteItem'
      >
        х
      </div>
    </div>
  );
}

export default BasketItemComponent;
