import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBrandLIne } from '../../http/brandLineApi';

const initialState = {
  brandLines: [],
  selectedBrendLine: {},
};

export const getBrandLineAPI = createAsyncThunk(
  'brandLine/getBrandLineAPI',
  async (_, { dispatch }) => {
    const data = await getBrandLIne();
    dispatch(setBrandLine(data));
  },
);

const brandLineSlice = createSlice({
  name: 'brandLine',
  initialState,
  reducers: {
    setBrandLine: (state, action) => {
      state.brandLines = action.payload;
    },
    setSelectedBrandLine: (state, action) => {
      state.selectedBrendLine = action.payload;
    },
  },
});

export const { setBrandLine, setSelectedBrandLine } = brandLineSlice.actions;
export default brandLineSlice.reducer;
