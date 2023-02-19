import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategory } from '../../http/categoryApi';

const initialState = {
  categories: [],
  selectedCategory: {},
  loadingCategory: true,
};

export const getCategoryAPI = createAsyncThunk(
  'category/getCategoryAPI',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await getCategory();
      dispatch(setCategoryes(data));
    } catch (error) {}
  },
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryes: (state, action) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    loadingAction: (state, action) => {
      state.loadingCategory = action.payload;
    },
  },
  extraReducers: {
    [getCategoryAPI.fulfilled]: (state) => {
      state.loadingCategory = false;
    },
    [getCategoryAPI.pending]: (state) => {
      state.loadingCategory = true;
    },
    [getCategoryAPI.rejected]: (state) => {
      state.loadingCategory = true;
      alert({ message: 'ошибка загрузки каталога' });
    },
  },
});

export const { setCategoryes, setSelectedCategory, loadingAction } = categorySlice.actions;
export default categorySlice.reducer;
