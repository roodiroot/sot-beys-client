import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ActionLentComponent from "../components/ActionLentComponent";
import BasketItemComponent from "../components/basket-page-components/BasketItemComponent";
import TotalBlock from "../components/basket-page-components/TotalBlock";
import TotalSumRowComponent from "../components/basket-page-components/TotalSumRowComponent";
import ButtonComponent from "../components/ButtonComponent";
import PopapComponent from "../components/PopapComponent";
import IconComponent from "../components/new-components/iscons/icon-component";
import { setVariant, showPopap } from "../features/popaps/popapSlice";

function CartPage() {
  const { basket, totalSumm } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const confirmOrder = () => {
    dispatch(setVariant("order"));
    dispatch(showPopap(false));
  };

  return (
    <>
      <ActionLentComponent />
      <div className='cart -pageBody'>
        {basket.length > 0 ? (
          <div className='cart__contanier'>
            <div className='cart__mobilVid'>
              <TotalSumRowComponent
                style={{ marginBottom: "1.4rem" }}
                total={totalSumm}
              />
              <ButtonComponent
                style={{ background: "rgb(135, 135, 135)", width: "100%" }}
                variant='cvadro'
              >
                Отправить
              </ButtonComponent>
            </div>
            <div className='cart__itemOrders'>
              <div className='cart__title'>Моя кoрзина</div>
              <div className='cart__bodyOrders bodyOrders'>
                {basket.map((i) => (
                  <BasketItemComponent key={i.img} {...i} />
                ))}
              </div>
              <div className='comentPromo'>
                <PopapComponent variantPopap='promo' iconClass='icon-coment'>
                  Ввести промокод
                </PopapComponent>
                <PopapComponent variantPopap='coment' iconClass='icon-code'>
                  Коментарий к заказу
                </PopapComponent>
              </div>
            </div>
            <TotalBlock confirmOrder={confirmOrder} total={totalSumm} />
          </div>
        ) : (
          <div className='cartNull'>
            <span>
              <IconComponent variant='paw' />
              Корзина пуста :(((
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
