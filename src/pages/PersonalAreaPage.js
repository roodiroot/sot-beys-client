import React from 'react';
import ButtonComponent from '../components/ButtonComponent';

function PersonalAreaPage() {
  return (
    <div className="personalArea -pageBody">
      <div className="personalArea__contanier">
        <ButtonComponent to="/admin" variant="cvadro">
          Перейти в админ панель
        </ButtonComponent>
      </div>
    </div>
  );
}

export default PersonalAreaPage;
