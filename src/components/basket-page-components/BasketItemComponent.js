import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemBasket, dicrimentItem, incrimentItem } from '../../features/basket/basketSlice';
import { thousandPrice } from '../../function/thousandPrice';
import CounterComponent from '../CounterComponent';

function BasketItemComponent({ img, name, price, description, id, count, total }) {
  const dispatch = useDispatch();

  return (
    <div className="bodyOrders__content">
      <div className="bodyOrders__photo">
        <picture>
          <source
            srcSet={process.env.REACT_APP_API_URL + '/' + img + '.min.webp'}
            type="image/webp"
          />
          <img src={process.env.REACT_APP_API_URL + '/' + img + '.min.jpeg'} alt="miniMGG" />
        </picture>
      </div>
      <div className="bodyOrders__descriptionBlock">
        <div className="bodyOrders__name">{name}</div>
        <div className="bodyOrders__price">{thousandPrice(price)}</div>
        <div className="bodyOrders__descript">{description}</div>
      </div>
      <CounterComponent
        id={id}
        incrimentItem={incrimentItem}
        dicrimentItem={dicrimentItem}
        count={count}
        style={{ marginLeft: 'auto' }}
      />
      <div className="bodyOrders__totalSum">{thousandPrice(total)}</div>
      <div onClick={(e) => dispatch(deleteItemBasket(id))} className="bodyOrders__deleteItem">
        х
      </div>
    </div>
  );
}

export default BasketItemComponent;
