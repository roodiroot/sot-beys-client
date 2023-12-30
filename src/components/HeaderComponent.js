import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { menuHeaderPathes } from "../utils/path";
import AuthIconComponent from "./AuthIconComponent";
import CartIconComponent from "./CartIconComponent";
import HeaderMenuSelect from "./HeaderMenuSelect";

function HeaderComponent({ white }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobilMenu, setMobilMenu] = useState(false);
  if (pathname === "/cart") {
    white = true;
  }
  const blurUrl = useRef();
  useEffect(() => {
    const f = (e) => {
      console.log("mmenu");
      if (e.target === blurUrl.current) {
        setMobilMenu(false);
      }
    };
    if (mobilMenu) {
      window.addEventListener("click", f);
    }
    return () => window.removeEventListener("click", f);
  }, [mobilMenu]);

  return (
    <header className={!white ? "header" : "header white"}>
      <div className='header__contanier'>
        <NavLink to='/' className='header__logo logo'>
          <div className='icon-SotBeys'></div>
        </NavLink>
        <div
          className={classNames("header__nav-menu", "nav-menu", {
            activeNavMenu: mobilMenu,
          })}
        >
          <div
            onClick={(e) => setMobilMenu(!mobilMenu)}
            className='nav-menu__burger'
          >
            <span className='spanBurger'></span>
          </div>
          <div ref={blurUrl} className='nav-menu__blur'></div>
          <ul className='nav-menu__list'>
            {menuHeaderPathes?.map((i) => (
              <li
                onClick={(e) => {
                  setMobilMenu(false);
                  navigate(i.path);
                }}
                key={i.path}
                className={classNames("nav-menu__item", {
                  active: i.path === pathname,
                })}
              >
                <div to={i.path} className='nav-menu__link'>
                  {i.name}
                </div>
              </li>
            ))}
            <HeaderMenuSelect />
          </ul>
        </div>
        <div className='header__buttonsBlock buttonsBlock'>
          <AuthIconComponent />
          <CartIconComponent />
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
