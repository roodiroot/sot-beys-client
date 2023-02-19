import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function CartIconComponent() {
  const length = useSelector((state) => state.basket.basket.length);
  return (
    <NavLink to="/cart" className="buttonsBlock__card icon-cart">
      <span>{length}</span>
    </NavLink>
  );
}

export default CartIconComponent;
