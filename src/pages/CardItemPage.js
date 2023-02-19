import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import CheckBoxCastomComponent from '../components/card-page-components/CheckBoxCastomComponent';
import DescriptionSelectComponent from '../components/card-page-components/DescriptionSelect';
import GaleryItemElemComponent from '../components/card-page-components/GaleryItemElemComponent';
import SelectInputComponent from '../components/card-page-components/SelectInputComponent';
import SocialPngComponent from '../components/card-page-components/SocialPngComponent';
import TextAreaComponent from '../components/card-page-components/TextAreaComponent';
import NextAndPreviousComponent from '../components/navigate-components/NextAndPreviousComponent';
import PathComponent from '../components/navigate-components/PathComponent';
import { addInBasket } from '../features/basket/basketSlice';
import { thousandPrice } from '../function/thousandPrice';
import { getOneProductItems } from '../http/productApi';

function CardItemPage() {
  const { itemName } = useParams('');

  const dispatch = useDispatch();
  useEffect(() => {
    getOneProductItems(itemName).then((i) => {
      setSelectItem(i);
    });
  }, [dispatch, itemName]);
  const [selectItem, setSelectItem] = useState({});

  const [sizeSelect, setSizeSelect] = useState('');
  const [color, setColor] = useState('');
  const [comentArea, setComentArea] = useState('');

  const selectSizes = [{ name: 'S' }, { name: 'L' }, { name: 'XXL' }];

  const addBasket = () => {
    const cartItem = {
      id: selectItem.id,
      name: selectItem.name,
      price: selectItem.price,
      img: selectItem.img[0],
      description: `Нужный размер ${sizeSelect.name}, аксесуары вы выбрали ${color}, остальные необходимые размеры - ${comentArea}  `,
      count: 1,
      total: selectItem.price,
    };
    dispatch(addInBasket(cartItem));
  };

  return (
    <div className="cardItem -pageBody">
      <div className="cardItem__contanier">
        <div className="cardItem__navigation-path navigation-path">
          <PathComponent />
          <NextAndPreviousComponent />
        </div>
        <div className="cardItem__content">
          {selectItem.img !== undefined && <GaleryItemElemComponent selectItem={selectItem.img} />}
          <div className="cardItem__bodyItem bodyItem">
            <div className="bodyItem__title">{selectItem.name}</div>
            <div className="bodyItem__price">{thousandPrice(selectItem.price)}</div>
            <SelectInputComponent
              value={sizeSelect.name}
              arrey={selectSizes}
              selected={setSizeSelect}
              style={{ marginBottom: '3.5rem' }}>
              Выбирите размер*
            </SelectInputComponent>
            <CheckBoxCastomComponent selected={setColor} style={{ marginBottom: '3.5rem' }} />
            <TextAreaComponent selected={setComentArea} style={{ marginBottom: '3.5rem' }}>
              Напишите размер который вам нужен*
            </TextAreaComponent>
            <div className="bodyItem__buttonsBlock">
              <ButtonComponent onClick={addBasket} style={{ width: '100%' }} variant="cvadro">
                Добавить в карзину
              </ButtonComponent>
              <ButtonComponent style={{ flex: '0 0 2.98rem' }} variant="like" />
            </div>
            <DescriptionSelectComponent />
            <div className="bodyItem__socialColor socialColor">
              <SocialPngComponent href="https://whatsapp.com" variant="whatsapp" />
              <SocialPngComponent href="https://whatsapp.com" variant="telegram" />
              <SocialPngComponent href="https://whatsapp.com" variant="instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItemPage;
