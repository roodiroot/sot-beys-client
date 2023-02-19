import React from 'react';
import { useDispatch } from 'react-redux';

function CounterComponent({ style, count, incrimentItem, dicrimentItem, id }) {
  const dispatch = useDispatch();
  // console.log(id);
  return (
    <div style={style} className="counterSumProduct">
      <div onClick={(e) => dispatch(dicrimentItem(id))} className="counterSumProduct__dicrement">
        <span>-</span>
      </div>
      <div className="counterSumProduct__number">
        <span>{count}</span>
      </div>
      <div onClick={(e) => dispatch(incrimentItem(id))} className="counterSumProduct__increment">
        <span>+</span>
      </div>
    </div>
  );
}

export default CounterComponent;
