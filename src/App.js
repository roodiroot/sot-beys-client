import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartMomentum from './components/CartMomentum';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import PopapComentComponent from './components/popaps/PopapComentComponent';
import RouterApp from './components/RouterApp';
import { checkUserAPI } from './features/user/userSlice';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { variant } = useSelector((state) => state.popap);
  useEffect(() => {
    dispatch(checkUserAPI()).then((i) => setLoading(false));
  }, [dispatch]);

  return (
    <div className="App">
      <div className={classNames('loadingSpinner', { active: loading })}></div>
      <HeaderComponent />
      <RouterApp />
      <FooterComponent />
      <CartMomentum />
      <PopapComentComponent variant={variant} />
    </div>
  );
}

export default App;
