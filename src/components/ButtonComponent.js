import classNames from 'classnames';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonComponent({ children, to, variant, style, onClick }) {
  variant = variant || 'circle';
  children = children || 'Введите текст кнопки';
  const navigate = useNavigate();

  const onclick = () => {
    if (to) {
      return navigate(to);
    } else if (onClick) {
      onClick();
    } else {
      console.log('hello world');
    }
  };

  return (
    <button
      style={style}
      onClick={onclick}
      className={classNames(
        { buttonCircle: variant === 'circle' },
        { buttonCvadro: variant === 'cvadro' },
        { buttonLike: variant === 'like' },
        { buttonDeg: variant === 'buttonDeg' },
      )}>
      {variant === 'like' ? <span className="icon-like"></span> : children}
      {variant === 'buttonDeg' && <span className="icon-arroy buttonDegArr"></span>}
    </button>
  );
}

export default ButtonComponent;
