import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddBlockComponent from "../components/admin-panel/AddBlockComponent";
import AddCategory from "../components/admin-panel/AddCategory";
import AddProductComponent from "../components/admin-panel/AddProductComponent";
import { getBrandLineAPI } from "../features/brand-line/brandLineSlice";
import { getCategoryAPI } from "../features/category/categorySlice";

function AdminPanelPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAPI());
    dispatch(getBrandLineAPI());
  }, [dispatch]);
  return (
    <div className='adminPanel -pageBody'>
      <div className='adminPanel__contanier'>
        <AddCategory />
        <AddBlockComponent>Добавление брендовой линейки</AddBlockComponent>
        <AddProductComponent>Добавление товара</AddProductComponent>
      </div>
    </div>
  );
}

export default AdminPanelPage;
