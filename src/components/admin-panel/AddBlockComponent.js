import React from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import InputComponent from '../../components/card-page-components/InputComponent';
import InputFileComponent from '../card-page-components/InputFileComponent';

function AddBlockComponent({
  children,
  valueFile,
  valueInput,
  setValueFile,
  setValueInput,
  addCategoryItem,
}) {
  return (
    <div className="adminPanel__addBlock">
      <div className="adminPanel__title">{children}</div>
      <InputComponent value={valueInput} setValue={setValueInput} style={{ marginBottom: '2rem' }}>
        Category
      </InputComponent>
      <InputFileComponent
        value={valueFile}
        setValue={setValueFile}
        style={{ marginBottom: '2rem' }}>
        Загрузите одно изображение
      </InputFileComponent>
      <ButtonComponent onClick={addCategoryItem} variant="cvadro">
        Добавить
      </ButtonComponent>
    </div>
  );
}

export default AddBlockComponent;
