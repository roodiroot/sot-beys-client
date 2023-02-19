import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionLentComponent from '../components/ActionLentComponent';
import BasketItemComponent from '../components/basket-page-components/BasketItemComponent';
import TotalBlock from '../components/basket-page-components/TotalBlock';
import TotalSumRowComponent from '../components/basket-page-components/TotalSumRowComponent';
import ButtonComponent from '../components/ButtonComponent';
import PopapComponent from '../components/PopapComponent';
import { clearBasket } from '../features/basket/basketSlice';
import { sendMessage } from '../http/telegram';

function CartPage() {
  const { basket, totalSumm, promocodeValue, commentValue } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const confirmOrder = () => {
    const formData = new FormData();
    for (let i = 0; i < basket.length; i++) {
      formData.append('name', basket[i].name);
      formData.append('count', basket[i].count);
      formData.append('price', basket[i].price);
      formData.append('total', basket[i].total);
      formData.append('description', basket[i].description);
    }
    formData.append('totalSumm', totalSumm);
    formData.append('promocodeValue', promocodeValue);
    formData.append('commentValue', commentValue);
    sendMessage(formData).then((e) => {
      dispatch(clearBasket());
    });
  };
  return (
    <>
      <ActionLentComponent />
      <div className="cart -pageBody">
        {basket.length > 0 ? (
          <div className="cart__contanier">
            <div className="cart__mobilVid">
              <TotalSumRowComponent style={{ marginBottom: '1.4rem' }} />
              <ButtonComponent
                style={{ background: 'rgb(135, 135, 135)', width: '100%' }}
                variant="cvadro">
                Отправить
              </ButtonComponent>
            </div>
            <div className="cart__itemOrders">
              <div className="cart__title">Моя кoрзина</div>
              <div className="cart__bodyOrders bodyOrders">
                {basket.map((i) => (
                  <BasketItemComponent key={i.img} {...i} />
                ))}
              </div>
              <div className="comentPromo">
                <PopapComponent variantPopap="promo" iconClass="icon-coment">
                  Ввести промокод
                </PopapComponent>
                <PopapComponent variantPopap="coment" iconClass="icon-code">
                  Коментарий к заказу
                </PopapComponent>
              </div>
            </div>
            <TotalBlock confirmOrder={confirmOrder} total={totalSumm} />
          </div>
        ) : (
          <div className="cartNull">
            <span>Корзина пуста :(((</span>
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
