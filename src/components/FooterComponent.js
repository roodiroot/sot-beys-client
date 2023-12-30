import React from "react";
import { NavLink } from "react-router-dom";
import { menuHeaderPathes } from "../utils/path";
import CartMomentum from "./CartMomentum";

function FooterComponent() {
  return (
    <>
      <footer className='footer'>
        <div className='footer__contanier'>
          <div className='footer__menu'>
            {menuHeaderPathes.map((i) => (
              <div key={i.path} className='footer__item'>
                <NavLink to={i.path} className='footer__link'>
                  {i.name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className='footer__dev'>
            <span>
              Этот сайт придумала{" "}
              <a href='https://matryoshka-studio.ru/'>
                студия веб разработки &laquo;Матрёшка&raquo;
              </a>
            </span>
          </div>
          <div className='footer__reight'>
            <span>© Sot Beys товары для собак 2022</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
