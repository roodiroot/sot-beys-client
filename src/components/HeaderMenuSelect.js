import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategoryAPI } from "../features/category/categorySlice";
import { useDocumentBodyClick } from "../function/documentBodyClick";

function HeaderMenuSelect() {
  const { categories } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [listCat, setListCat] = useState(false);
  const selectList = useRef();

  useDocumentBodyClick((e) => {
    const path = e.composedPath();
    if (!path.includes(selectList.current)) {
      setListCat(false);
    }
  });

  const showCategory = () => {
    dispatch(getCategoryAPI()).then(() => setListCat(!listCat));
  };
  const click = (c) => {
    navigate(`/catalog-category/${c.id}`);
    setListCat(false);
  };
  return (
    <div className='nav-menu__item select'>
      <span onClick={showCategory}>Категории</span>

      {listCat && (
        <ul ref={selectList} className='listSelect_category'>
          {categories?.map((c) => (
            <li
              key={c.id}
              onClick={() => click(c)}
              className='istSelect_category-item'
            >
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HeaderMenuSelect;
