import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryType from '../components/CategoryType';
import CatalogLoaderItem from '../components/loader-items/CatalogLoaderItem';
import { getCategoryAPI } from '../features/category/categorySlice';

function CatalogPage() {
  const { categories, loadingCategory } = useSelector((state) => state.category);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getCategoryAPI());
  }, [dispath]);

  console.log(categories);

  return (
    <div className="catalogBody -pageBody">
      <div className="catalogBody__title">Категории магазина</div>
      <div className="catalogBody__narrowRowCatalog narrowRowCatalog">
        {loadingCategory
          ? Array(4)
              .fill('')
              .map((_, i) => <CatalogLoaderItem key={i} />)
          : categories.slice(0, 4).map((i) => <CategoryType key={i.name} {...i} />)}
      </div>
      <div className="catalogBody__wide wideRowCatalg">
        {loadingCategory
          ? Array(4)
              .fill('')
              .map((_, i) => <CatalogLoaderItem key={i} />)
          : categories.slice(4).map((i) => <CategoryType key={i.name} {...i} />)}
      </div>
    </div>
  );
}

export default CatalogPage;
