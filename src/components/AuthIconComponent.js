import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setIsAuth, setUser } from '../features/user/userSlice';

function AuthIconComponent() {
  const isAuth = useSelector(({ user }) => user.isAuth);

  const dispatch = useDispatch();
  const navigateAuth = () => {
    if (!isAuth) return '/login';
    return '/personal-area';
  };
  const exitAccount = () => {
    localStorage.clear();
    dispatch(setIsAuth(false));
    dispatch(setUser({}));
  };
  return (
    <NavLink to={navigateAuth()} className="buttonsBlock__auth">
      <div className="buttonsBlock__authSvg icon-login"></div>
      <span>{isAuth ? <span onClick={exitAccount}>Выход</span> : 'Авторизация'}</span>
    </NavLink>
  );
}

export default AuthIconComponent;
