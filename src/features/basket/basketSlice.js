import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [],
  basket: [],
  totalSumm: 0,
  minBasketActive: false,
  promocodeValue: "",
  commentValue: "",
  contacts: {},
  order: {},
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addInBasketRefresh: (state, action) => {
      let basketRefresh = localStorage.getItem("basketIcons");
      let ts = localStorage.getItem("basketSumm");
      basketRefresh = JSON.parse(basketRefresh);
      ts = JSON.parse(ts);
      if (basketRefresh && basketRefresh.length > 0) {
        state.basket = basketRefresh;
        state.totalSumm = Number(ts);
      }
    },
    addInBasket: (state, action) => {
      let chechedItem =
        (state.basket.find((obj) => obj.id === action.payload.id) && true) ||
        false;
      if (chechedItem) {
        return;
      }
      state.basket.push(action.payload);
      state.totalSumm = state.basket.reduce((sum, i) => i.total + sum, 0);
      state.minBasketActive = true;
      localStorage.setItem("basketIcons", JSON.stringify(state.basket));
      localStorage.setItem("basketSumm", JSON.stringify(state.totalSumm));
    },
    clearBasket: (state) => {
      state.basket = [];
      state.totalSumm = 0;
      state.promocodeValue = "";
      state.commentValue = "";
      localStorage.clear("basketIcons");
      localStorage.clear("basketSumm");
    },
    deleteItemBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
      state.totalSumm = state.basket.reduce((sum, i) => i.total + sum, 0);
      localStorage.setItem("basketIcons", JSON.stringify(state.basket));
      localStorage.setItem("basketSumm", JSON.stringify(state.totalSumm));
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
      if (action.payload === "max20") {
        state.totalSumm = state.totalSumm * 0.8;
      }
      state.promocodeValue = action.payload;
    },
    setCommentValue: (state, action) => {
      state.commentValue = action.payload;
    },
    setContactsValue: (state, action) => {
      state.contacts = action.payload;
    },
    setOrderValue: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const {
  addInBasketRefresh,
  addInBasket,
  deleteItemBasket,
  slipMinCart,
  incrimentItem,
  dicrimentItem,
  setPromocodeValue,
  setCommentValue,
  clearBasket,
  setContactsValue,
  setOrderValue,
} = basketSlice.actions;
export default basketSlice.reducer;
