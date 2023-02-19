import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fold: true,
  variant: '',
};
const popapSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    showPopap: (state, action) => {
      state.fold = action.payload;
    },
    setVariant: (state, action) => {
      state.variant = action.payload;
    },
  },
});
export const { showPopap, setVariant } = popapSlice.actions;
export default popapSlice.reducer;
