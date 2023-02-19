import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
  basket: [],
  totalSumm: 0,
  minBasketActive: false,
  promocodeValue: '',
  commentValue: '',
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addInBasket: (state, action) => {
      let chechedItem = (state.basket.find((obj) => obj.id === action.payload.id) && true) || false;
      if (chechedItem) {
        return;
      }
      state.basket.push(action.payload);
      state.totalSumm = state.basket.reduce((sum, i) => i.total + sum, 0);
      state.minBasketActive = true;
    },
    clearBasket: (state) => {
      state.basket = [];
      state.totalSumm = 0;
      state.promocodeValue = '';
      state.commentValue = '';
    },
    deleteItemBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
      state.totalSumm = state.basket.reduce((sum, i) => i.total + sum, 0);
    },
    slipMinCart: (state) => {
      state.minBasketActive = false;
    },
    incrimentItem: (state, action) => {
      state.basket.forEach((item) => {
        if (item.id === action.payload) {
          item.count++;
          item.total = item.price * item.count;
        }
        state.totalSumm = state.basket.reduce((sum, i) => i.total + sum, 0);
      });
    },
    dicrimentItem: (state, action) => {
      state.basket.forEach((item) => {
        if (item.id === action.payload) {
          if (item.count === 1) return;
          item.count--;
          item.total = item.price * item.count;
        }
        state.totalSumm = state.basket.reduce((sum, i) => i.total + sum, 0);
      });
    },
    setPromocodeValue: (state, action) => {
      if (action.payload === 'max20') {
        state.totalSumm = state.totalSumm * 0.8;
      }
      state.promocodeValue = action.payload;
    },
    setCommentValue: (state, action) => {
      state.commentValue = action.payload;
    },
  },
});

export const {
  addInBasket,
  deleteItemBasket,
  slipMinCart,
  incrimentItem,
  dicrimentItem,
  setPromocodeValue,
  setCommentValue,
  clearBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
