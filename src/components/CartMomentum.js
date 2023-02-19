import classNames from 'classnames';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { slipMinCart } from '../features/basket/basketSlice';
import { useDocumentBodyClick } from '../function/documentBodyClick';
import { thousandPrice } from '../function/thousandPrice';
import CartMomentumItem from './CartMomentumItem';

function CartMomentum() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blur = useRef();
  const { minBasketActive, totalSumm, basket } = useSelector((state) => state.basket);

  const goToCart = () => {
    dispatch(slipMinCart());
    navigate('/cart');
  };
  const hendelOutsideClick = (e) => {
    let path = e.composedPath();
    if (path.includes(blur.current)) {
      dispatch(slipMinCart());
    }
  };

  useDocumentBodyClick(hendelOutsideClick);

  return (
    <div
      className={classNames('cartMomentum', {
        active: minBasketActive,
      })}>
      <div ref={blur} className="cartMomentum__blur"></div>
      <div className="cartMomentum__content">
        <div onClick={(e) => dispatch(slipMinCart())} className="cartMomentum__header">
          <span className="cartMomentum__arroy icon-arroy"></span>
          <span className="cartMomentum__title ">Корзина</span>
        </div>
        <div className="cartMomentum__body">
          <div className="cartMomentum__itemsblock">
            {basket?.map((i) => (
              <CartMomentumItem key={i.name} {...i} />
            ))}
          </div>
          <div className="cartMomentum__sumBlock">
            <div className="cartMomentum__total">Итого</div>
            <div className="cartMomentum__totalCount">{thousandPrice(totalSumm)}</div>
          </div>
        </div>
        <div className="cartMomentum__footer">
          <button onClick={goToCart} className="cartMomentum__buttonCvadro buttonCvadro">
            Перейти в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartMomentum;
