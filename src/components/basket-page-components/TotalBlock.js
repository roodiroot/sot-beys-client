import React from "react";
import { thousandPrice } from "../../function/thousandPrice";
import ButtonComponent from "../ButtonComponent";
import TotalSumRowComponent from "./TotalSumRowComponent";

function TotalBlock({ total, confirmOrder }) {
  return (
    <div className='cart__summOrder'>
      <div className='cart__title'>Итог заказа</div>
      <div className='cart__totalSumCart totalSumCart'>
        <div className='totalSumCart__row'>
          <span>Промежуточный итог</span>
          <span>{thousandPrice(total * 0.8)}</span>
        </div>
        <div className='totalSumCart__row'>
          <span>Налог НДС 20%</span>
          <span>{thousandPrice(total * 0.2)}</span>
        </div>
      </div>
      <TotalSumRowComponent total={total} style={{ marginBottom: "2.4rem" }} />
      <ButtonComponent
        onClick={confirmOrder}
        style={{ background: "rgb(135, 135, 135)", width: "100%" }}
        variant='cvadro'
      >
        Отправить
      </ButtonComponent>
    </div>
  );
}

export default TotalBlock;
