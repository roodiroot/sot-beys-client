import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { check, login, registration } from '../../http/userApi';

const initialState = {
  isAuth: false,
  user: [],
};

export const registerUserAPI = createAsyncThunk(
  'user/registerUser',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await registration(body.email, body.password);
      dispatch(setUser(data));
      dispatch(setIsAuth(true));
    } catch (error) {
      alert(error.response.data.message);
    }
  },
);
export const loginUserAPI = createAsyncThunk(
  'user/loginUserAPI',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(body.email, body.password);
      dispatch(setUser(data));
      dispatch(setIsAuth(true));
    } catch (error) {
      alert(error.response.data.message);
    }
  },
);
export const checkUserAPI = createAsyncThunk(
  'user/loginUserAPI',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const data = await check();
      if (data) {
        dispatch(setUser(data));
        dispatch(setIsAuth(true));
      }
    } catch (error) {
      // alert(error.response.data.message);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    // [registerUserAPI.fulfilled]: () => console.log('Запрос положительно законичиллся'),
    // [registerUserAPI.pending]: () => console.log('Запрос начался'),
    // [registerUserAPI.rejected]: () => console.log('Запрос законичиллся с ошибкой'),
    // [loginUserAPI.fulfilled]: () => console.log('Запрос положительно законичиллся'),
    // [loginUserAPI.pending]: () => console.log('Запрос начался'),
    // [loginUserAPI.rejected]: () => console.log('Запрос законичиллся с ошибкой'),
    // [checkUserAPI.fulfilled]: () => console.log('Запрос положительно законичиллся'),
    // [checkUserAPI.pending]: () => console.log('Запрос начался'),
    // [checkUserAPI.rejected]: () => console.log('Запрос законичиллся с ошибкой'),
  },
});

export const { setIsAuth, setUser } = userSlice.actions;
export default userSlice.reducer;
