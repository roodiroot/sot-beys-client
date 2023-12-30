import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import CartMomentum from "./components/CartMomentum";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import PopapComentComponent from "./components/popaps/PopapComentComponent";
import RouterApp from "./components/RouterApp";
import { checkUserAPI } from "./features/user/userSlice";
import { addInBasketRefresh } from "./features/basket/basketSlice";
import { useResize } from "./function/use-resize";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { variant } = useSelector((state) => state.popap);
  const { minBasketActive } = useSelector((state) => state.basket);
  const { width } = useResize();
  useEffect(() => {
    dispatch(checkUserAPI()).then((i) => setLoading(false));
    dispatch(addInBasketRefresh());
  }, [dispatch]);

  return (
    <div className='App'>
      <div className={classNames("loadingSpinner", { active: loading })}></div>
      <HeaderComponent />
      <RouterApp />
      <FooterComponent />
      {minBasketActive & (width > 1000) ? <CartMomentum /> : null}
      <PopapComentComponent variant={variant} />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default App;
