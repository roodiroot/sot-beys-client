import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteItemBasket,
  dicrimentItem,
  incrimentItem,
} from "../features/basket/basketSlice";
import { thousandPrice } from "../function/thousandPrice";
import CounterComponent from "./CounterComponent";
import ImgLazy from "./new-components/img-lazy/img-lazy";

function CartMomentumItem({ img, name, price, id, count }) {
  const dispatch = useDispatch();
  return (
    <div className='cartMomentum__Item'>
      <div className='cartMomentum__photoBlock'>
        <ImgLazy src={img} alt='cart-momentum-scrin' />
      </div>
      <div className='cartMomentum__description'>
        <div className='cartMomentum__nameItem'>{name}</div>
        <div className='cartMomentum__priceItem'>{thousandPrice(price)}</div>
        {/* <div className="cartMomentum__counterSumProduct counterSumProduct"> */}
        <CounterComponent
          id={id}
          incrimentItem={incrimentItem}
          dicrimentItem={dicrimentItem}
          count={count}
        />
      </div>
      <div
        onClick={(e) => dispatch(deleteItemBasket(id))}
        className='cartMomentum__delete'
      >
        <span>x</span>
      </div>
    </div>
  );
}

export default CartMomentumItem;
