import classNames from "classnames";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function SelectInputComponent({
  style,
  selected,
  children,
  arrey,
  value,
  selectedStore,
  keyName,
}) {
  value = value || "Выберете один из пунктов";
  const [activeList, setActiveList] = useState(false);
  const dispatch = useDispatch();
  const selectedSize = (s) => {
    if (selected) selected(s);
    if (selectedStore) dispatch(selectedStore(s));
  };

  return (
    <div
      style={style}
      onClick={(e) => setActiveList(!activeList)}
      className='selectCastom'
    >
      <legend className='selectCastom__legend'>{children}</legend>
      <div className='selectCastom__body'>
        <div className='selectCastom__main'>{value}</div>
        <div
          className={classNames("selectCastom__select", { active: activeList })}
        >
          {arrey?.map((s) => (
            <div
              key={s[keyName] ? s[keyName] : s?.name}
              onClick={(e) => selectedSize(s)}
              className='selectCastom__variatn'
            >
              {s[keyName] ? s[keyName] : s?.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectInputComponent;
