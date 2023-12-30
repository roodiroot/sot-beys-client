import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrandLineAPI } from "../features/brand-line/brandLineSlice";
import CatalogLoaderItem from "../components/loader-items/CatalogLoaderItem";
import CategoryType from "../components/CategoryType";

function BrandLine() {
  const { brandLines, loadingCategory } = useSelector(
    (state) => state.brandLine
  );
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getBrandLineAPI());
  }, [dispath]);

  // console.log(brandLines);

  return (
    <div className='catalogBody -pageBody'>
      <div className='catalogBody__title'>Модели магазина</div>
      <div className='catalogBody__narrowRowCatalog narrowRowCatalog'>
        {loadingCategory
          ? Array(4)
              .fill("")
              .map((_, i) => <CatalogLoaderItem key={i} />)
          : brandLines
              .slice(0, 4)
              .map((i) => (
                <CategoryType key={i.name} {...i} resource='brand-line' />
              ))}
      </div>
      <div className='catalogBody__wide wideRowCatalg'>
        {loadingCategory
          ? ""
          : brandLines
              .slice(4)
              .map((i) => (
                <CategoryType key={i.name} {...i} resource='brand-line' />
              ))}
      </div>
    </div>
  );
}

export default BrandLine;
