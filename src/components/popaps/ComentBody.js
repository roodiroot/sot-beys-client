import React, { useState } from 'react';
import ButtonComponent from '../ButtonComponent';
import TextAreaComponent from '../card-page-components/TextAreaComponent';

function ComentBody({ close, add }) {
  const [value, setValue] = useState();
  const addComentOrder = () => {
    add(value);
    close();
  };

  return (
    <div className="boxLoginPanel">
      <div className="boxLoginPanel__title">Введите коментарий к заказу</div>
      <TextAreaComponent value={value} selected={setValue} style={{ marginBottom: '3.5rem' }} />
      <div className="popap__buttons">
        <ButtonComponent onClick={addComentOrder} style={{ flex: '1 1 30%' }} variant="cvadro">
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

export default ComentBody;
