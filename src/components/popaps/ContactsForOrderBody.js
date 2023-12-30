import React, { useState } from "react";
import { toast } from "react-toastify";
import ButtonComponent from "../ButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../http/orderApi";

import { clearBasket } from "../../features/basket/basketSlice";
import InputComponent from "../card-page-components/InputComponent";

import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

function ContactsForOrderBody({ close }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7");
  const [email, setEmail] = useState("");
  const { basket, totalSumm, promocodeValue, commentValue } = useSelector(
    (state) => state.basket
  );
  const addOrder = () => {
    if (!name || !phone || !email) {
      return toast.error("Заполните контактные данные");
    }
    if (basket?.length < 1 || !totalSumm) {
      return toast.error("Корзина пуста");
    }
    const param = {
      name: name,
      email: email,
      phone: phone,
      totalSumm: totalSumm,
      commentValue: commentValue,
      promocodeValue: promocodeValue,
      order: basket,
    };
    createOrder(param)
      .then((d) => {
        toast.success("Спасибо! Ожидайте звонка специалиста");
        setName("");
        setPhone("+7");
        setEmail("");
        dispatch(clearBasket());
        close();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className='boxLoginPanel'>
      <div className='boxLoginPanel__title'>Заполните данные</div>

      <InputComponent
        value={name}
        setValue={setName}
        placeholder='Введите имя'
        style={{ marginBottom: "1.5rem" }}
      >
        Имя (не менее 3х символов)*
      </InputComponent>

      <InputComponent
        value={email}
        setValue={setEmail}
        placeholder='Введите email'
        type='email'
        style={{ marginBottom: "1.5rem" }}
      >
        Электронная почта*
      </InputComponent>

      <InputComponent
        value={phone}
        setValue={setPhone}
        style={{ marginBottom: "3.5rem" }}
      >
        Номер телефона*
      </InputComponent>
      <div className='popap__buttons'>
        <ButtonComponent
          onClick={addOrder}
          style={{ flex: "1 1 30%" }}
          variant='cvadro'
        >
          Отправить
        </ButtonComponent>
        <ButtonComponent
          onClick={close}
          style={{ flex: "1 1 30%", marginLeft: "1.5rem" }}
          variant='cvadro'
        >
          Закрыть
        </ButtonComponent>
      </div>
      <div style={{ marginTop: "1rem" }}>
        Нажимая отправить вы соглашаетесь с политикой{" "}
        <NavLink
          onClick={() => {
            close();
          }}
          to='personal-policy'
        >
          о персональных данных данных
        </NavLink>
      </div>
    </div>
  );
}

export default ContactsForOrderBody;
