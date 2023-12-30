import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CardItem from "../components/CardItem";
import { getProductsAPI } from "../features/products/productsSlice";
import { getOneCategory } from "../http/categoryApi";
import { getOneBrandLIne } from "../http/brandLineApi";

function ModelItems() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const { model } = useParams();

  useEffect(() => {
    getOneBrandLIne(model).then((data) => {
      // console.log(data);
      dispatch(
        getProductsAPI({
          modelId: data?.id,
          pagination: { page: 1, perPage: 25 },
          sort: { field: "id", order: "DESC" },
        })
      ).catch((error) => console.log(error));
      setTitle(data.name);
    });
  }, [model, dispatch]);

  const { productList, loadingProducts } = useSelector(
    (store) => store.products
  );
  const { pathname } = useLocation();
  const category = pathname.split("/").reverse()[0];

  return (
    <div className='typePresent -pageBody'>
      <div className='typePresent__contanier'>
        <div className='typePresent__title'>{title}</div>
        <div className='typePresent__area'>
          {loadingProducts
            ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className='productItemPreloader'>
                    <div className='productItemPreloader__imgBlock'>
                      <div className='actionBlock'></div>
                    </div>
                  </div>
                ))
            : productList?.map((i) => (
                <CardItem key={i.id} {...i} category={category} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default ModelItems;
