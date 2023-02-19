import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentValue, setPromocodeValue } from '../../features/basket/basketSlice';
import { setVariant, showPopap } from '../../features/popaps/popapSlice';
import ComentBody from './ComentBody';
import PromoCodeBody from './PromoCodeBody';

function PopapComentComponent({ variant }) {
  const { fold } = useSelector((state) => state.popap);
  const dispatch = useDispatch();
  const variantPopap = () => {
    if (variant === 'promo') return <PromoCodeBody add={addPromo} close={closeButton} />;
    if (variant === 'coment') return <ComentBody add={addComent} close={closeButton} />;
  };
  const popap = useRef();

  useEffect(() => {
    if (!fold) {
      document.body.addEventListener('click', (e) => {
        if (popap.current === e.target) {
          dispatch(showPopap(true));
          dispatch(setVariant(''));
        }
      });
    }
  });
  const closeButton = () => {
    dispatch(showPopap(true));
  };
  const addComent = (text) => {
    dispatch(setCommentValue(text));
  };
  const addPromo = (text) => {
    dispatch(setPromocodeValue(text));
  };

  return (
    <div ref={popap} className={classNames('popap', { active: !fold })}>
      <div className="popap__content">{variantPopap()}</div>
    </div>
  );
}

export default PopapComentComponent;
