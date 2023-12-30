import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import { setVariant, showPopap } from "../features/popaps/popapSlice";

function PopapComponent({ children, iconClass, variantPopap }) {
  children = children || "Введите текст";
  const dispatch = useDispatch();
  const showPopapButton = () => {
    dispatch(setVariant(variantPopap));
    dispatch(showPopap(false));
  };

  return (
    <div
      onClick={showPopapButton}
      className={classNames("comentPromo__row", iconClass)}
    >
      <span className='comentPromo__text'>{children}</span>
    </div>
  );
}

export default PopapComponent;
