import React from 'react';
import { thousandPrice } from '../../function/thousandPrice';

function TotalSumRowComponent({ style, total }) {
  return (
    <div style={style} className="cart__totalBlock totalBlock">
      <div className="totalBlock__text">
        <span className="totalBlock__t">Итого</span>
        <span className="totalBlock__n">С учетом налогов</span>
      </div>
      <div className="totalBlock__number">{thousandPrice(total)}, 00</div>
    </div>
  );
}

export default TotalSumRowComponent;
