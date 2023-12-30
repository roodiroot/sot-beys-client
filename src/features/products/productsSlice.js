import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductItems } from "../../http/productApi";

const initialState = {
  productList: [],
  selectedProduct: {},
  loadingProducts: true,
};

export const getProductsAPI = createAsyncThunk(
  "productsWorking/getProductsAPI",
  async (params, { rejectWithValue, dispatch }) => {
    // console.log(params);
    try {
      const data = await getProductItems({
        categoryId: params?.categoryId,
        brandLineId: params?.brandLineId,
        modelId: params?.modelId,
        pagination: params?.pagination,
        sort: params?.sort,
      });
      // console.log(data);
      dispatch(setProducts(data.data));
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "productsWorking",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productList = action?.payload;
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
      alert({ message: "ошибка загрузки каталога" });
    },
  },
});

export const { setSelectedProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
