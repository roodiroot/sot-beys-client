import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CardItem from '../components/CardItem';
import { getProductsAPI } from '../features/products/productsSlice';
import { getOneCategory } from '../http/categoryApi';

function CatalogItems() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const { type } = useParams();

  useEffect(() => {
    getOneCategory(type).then((data) => {
      dispatch(getProductsAPI({ categoryId: data.id })).then((i) => console.log('успех'));
      setTitle(data.name);
    });
  }, [type, dispatch]);

  const { productList, loadingProducts } = useSelector((store) => store.products);
  const { pathname } = useLocation();
  const category = pathname.split('/').reverse()[0];
  console.log(loadingProducts);
  return (
    <div className="typePresent -pageBody">
      <div className="typePresent__contanier">
        <div className="typePresent__title">{title}</div>
        <div className="typePresent__area">
          {loadingProducts
            ? Array(8)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="productItemPreloader">
                    <div className="productItemPreloader__imgBlock">
                      <div className="actionBlock"></div>
                    </div>
                  </div>
                ))
            : productList?.map((i) => <CardItem key={i.id} {...i} category={category} />)}
        </div>
      </div>
    </div>
  );
}

export default CatalogItems;
