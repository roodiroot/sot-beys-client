import React from 'react';
import { NavLink } from 'react-router-dom';
import { menuHeaderPathes } from '../utils/path';
import CartMomentum from './CartMomentum';

function FooterComponent() {
  return (
    <>
      <CartMomentum />
      <footer className="footer">
        <div className="footer__contanier">
          <div className="footer__menu">
            {menuHeaderPathes.map((i) => (
              <div key={i.path} className="footer__item">
                <NavLink to={i.path} className="footer__link">
                  {i.name}
                </NavLink>
              </div>
            ))}
          </div>
          <div className="footer__reight">
            <span>© ОШЕЙНЫЕ системы 2022</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;
