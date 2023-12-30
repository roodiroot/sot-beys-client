import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { setSelectedCategory } from "../features/category/categorySlice";
import ButtonComponent from "./ButtonComponent";
import ImgLazy from "./new-components/img-lazy/img-lazy";

function CategoryType({ variant, name, img, id, resource }) {
  // console.log({ variant, name, path, img, id });
  const navigate = useNavigate();
  variant = variant || "small";
  const selectCategory = () => {
    navigate(`/${resource}/${id}`);
    // dispatch(setSelectedCategory({ id, name }));
  };

  return (
    <div
      className={classNames(
        { narrowRowCatalog__item: variant === "small" },
        { wideRowCatalg__item: variant === "big" }
      )}
    >
      <ImgLazy src={img} alt='product item' />
      <div className='narrowRowCatalog__button'>
        <ButtonComponent onClick={selectCategory} variant='cvadro'>
          {name}
        </ButtonComponent>
      </div>
    </div>
  );
}

export default CategoryType;
