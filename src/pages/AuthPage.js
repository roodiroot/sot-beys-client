import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/card-page-components/InputComponent";

import "react-toastify/dist/ReactToastify.css";

function AuthPage() {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  let isLogin = "/login" === pathname;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = () => {
    if (isLogin) {
      toast.error("Не верный логин или пароль.");
    } else {
      toast.error("Регистрация временно не доступна.");
    }
  };

  return (
    <div className='login -pageBody'>
      <div className='login__contanier'>
        <div className='boxLoginPanel'>
          <div className='boxLoginPanel__title'>
            {isLogin ? "Авторизация" : "Регистрация"}
          </div>
          <InputComponent
            value={email}
            setValue={setEmail}
            style={{ marginBottom: "1.5rem" }}
            placeholder='логин'
          >
            email*
          </InputComponent>
          <InputComponent
            value={password}
            setValue={setPassword}
            style={{ marginBottom: "1.5rem" }}
            placeholder='пароль'
          >
            password*
          </InputComponent>
          <div className='boxLoginPanel__bottomRow'>
            {isLogin ? (
              <div className='boxLoginPanel__text'>
                У вас еще нет аккауната?{" "}
                <span onClick={(e) => navigate("/registration")}>
                  Зарегестрируйтесь
                </span>{" "}
              </div>
            ) : (
              <div className='boxLoginPanel__text'>
                У вас уже есть аккаунт? Попробуйте{" "}
                <span onClick={(e) => navigate("/login")}>Войти</span>{" "}
              </div>
            )}
            <ButtonComponent
              onClick={logIn}
              style={{ flex: "1 1 30%" }}
              variant='cvadro'
            >
              {isLogin ? "Войти" : "Зарегестрироваться "}
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
