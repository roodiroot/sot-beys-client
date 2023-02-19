import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import InputComponent from '../card-page-components/InputComponent';

function PromoCodeBody({ close, add }) {
  const [value, setValue] = useState('');
  const addPromoCode = () => {
    add(value);
    close();
  };
  return (
    <div className="boxLoginPanel">
      <div className="boxLoginPanel__title">Введите промокод</div>
      <InputComponent value={value} setValue={setValue} style={{ marginBottom: '1.5rem' }}>
        промокод*
      </InputComponent>
      <div className="popap__buttons">
        <ButtonComponent onClick={addPromoCode} style={{ flex: '1 1 30%' }} variant="cvadro">
          Отправить
        </ButtonComponent>
        <ButtonComponent
          onClick={close}
          style={{ flex: '1 1 30%', marginLeft: '1.5rem' }}
          variant="cvadro">
          Закрыть
        </ButtonComponent>
      </div>
    </div>
  );
}

export default PromoCodeBody;
