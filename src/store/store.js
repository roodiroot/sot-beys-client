import { configureStore } from '@reduxjs/toolkit';
import basketSlice from '../features/basket/basketSlice';
import brandLineSlice from '../features/brand-line/brandLineSlice';
import categorySlice from '../features/category/categorySlice';
import popapSlice from '../features/popaps/popapSlice';
import productsSlice from '../features/products/productsSlice';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    brandLine: brandLineSlice,
    products: productsSlice,
    basket: basketSlice,
    popap: popapSlice,
  },
});
