import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/card-page-components/InputComponent';
import { loginUserAPI, registerUserAPI } from '../features/user/userSlice';

function AuthPage() {
  const dispatch = useDispatch();
  let { pathname } = useLocation();
  const navigate = useNavigate();
  let isLogin = '/login' === pathname;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {
    if (isLogin) {
      dispatch(loginUserAPI({ email, password })).then((d) => navigate('/personal-area'));
    } else {
      dispatch(registerUserAPI({ email, password }));
    }
  };

  return (
    <div className="login -pageBody">
      <div className="login__contanier">
        <div className="boxLoginPanel">
          <div className="boxLoginPanel__title">{isLogin ? 'Авторизация' : 'Регистрация'}</div>
          <InputComponent value={email} setValue={setEmail} style={{ marginBottom: '1.5rem' }}>
            email*
          </InputComponent>
          <InputComponent
            value={password}
            setValue={setPassword}
            style={{ marginBottom: '1.5rem' }}>
            password*
          </InputComponent>
          <div className="boxLoginPanel__bottomRow">
            {isLogin ? (
              <div className="boxLoginPanel__text">
                У вас еще нет аккауната?{' '}
                <span onClick={(e) => navigate('/registration')}>Зарегестрируйтесь</span>{' '}
              </div>
            ) : (
              <div className="boxLoginPanel__text">
                У вас уже есть аккаунт? Попробуйте{' '}
                <span onClick={(e) => navigate('/login')}>Войти</span>{' '}
              </div>
            )}
            <ButtonComponent onClick={logIn} style={{ flex: '1 1 30%' }} variant="cvadro">
              {isLogin ? 'Войти' : 'Зарегестрироваться '}
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
