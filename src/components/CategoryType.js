import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedCategory } from '../features/category/categorySlice';
import ButtonComponent from './ButtonComponent';

function CategoryType({ variant, name, path, img, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  variant = variant || 'small';
  const selectCategory = () => {
    navigate(`/catalog-category/${path}`);
    dispatch(setSelectedCategory({ id, name }));
  };
  return (
    <div
      className={classNames(
        { narrowRowCatalog__item: variant === 'small' },
        { wideRowCatalg__item: variant === 'big' },
      )}>
      <picture>
        <source srcSet={process.env.REACT_APP_API_URL + '/' + img + '.webp'} type="image/webp" />
        <img src={process.env.REACT_APP_API_URL + '/' + img + '.jpeg'} alt="imgMini" />
      </picture>
      <div className="narrowRowCatalog__button">
        <ButtonComponent onClick={selectCategory} variant="cvadro">
          {name}
        </ButtonComponent>
      </div>
    </div>
  );
}

export default CategoryType;
