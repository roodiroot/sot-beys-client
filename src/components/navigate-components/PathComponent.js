import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PathComponent() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const main = pathname.split('/')[1];
  const еее = pathname.split('/')[1] + '/' + pathname.split('/')[2];

  return (
    <div className="navigation-path__path">
      <span onClick={(e) => navigate('/')}>Главная</span> /{' '}
      <span onClick={(e) => navigate(`/${main}`)}>Категории товаров</span> /{' '}
      <span onClick={(e) => navigate(`/${еее}`)}>Товары в категории</span>
    </div>
  );
}

export default PathComponent;
