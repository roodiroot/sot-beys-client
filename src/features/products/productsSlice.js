import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductItems } from '../../http/productApi';

const initialState = {
  productList: [],
  selectedProduct: {},
  loadingProducts: true,
};

export const getProductsAPI = createAsyncThunk(
  'productsWorking/getProductsAPI',
  async (params, { rejectWithValue, dispatch }) => {
    try {
      const data = await getProductItems(params.categoryId, params.brandLineId);
      dispatch(setProducts(data.rows));
    } catch (error) {}
  },
);

const productSlice = createSlice({
  name: 'productsWorking',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productList = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: {
    [getProductsAPI.fulfilled]: (state) => {
      state.loadingProducts = false;
    },
    [getProductsAPI.pending]: (state) => {
      state.loadingProducts = true;
    },
    [getProductsAPI.rejected]: (state) => {
      state.loadingProducts = false;
      alert({ message: 'ошибка загрузки каталога' });
    },
  },
});

export const { setSelectedProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
