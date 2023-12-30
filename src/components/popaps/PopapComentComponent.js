import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCommentValue,
  setContactsValue,
  setPromocodeValue,
} from "../../features/basket/basketSlice";
import { setVariant, showPopap } from "../../features/popaps/popapSlice";
import ComentBody from "./ComentBody";
import PromoCodeBody from "./PromoCodeBody";
import ContactsForOrderBody from "./ContactsForOrderBody";

function PopapComentComponent({ variant }) {
  const { fold } = useSelector((state) => state.popap);
  const dispatch = useDispatch();
  const variantPopap = () => {
    if (variant === "promo")
      return <PromoCodeBody add={addPromo} close={closeButton} />;
    if (variant === "coment")
      return <ComentBody add={addComent} close={closeButton} />;
    if (variant === "order")
      return <ContactsForOrderBody add={addContacts} close={closeButton} />;
  };
  const popap = useRef();

  useEffect(() => {
    const closeClick = (e) => {
      console.log(e);
      if (popap.current === e.target) {
        dispatch(showPopap(true));
        dispatch(setVariant(""));
      }
    };
    if (!fold) {
      window.addEventListener("click", closeClick);
    }
    return () => window.removeEventListener("click", closeClick);
  }, []);

  const closeButton = () => {
    dispatch(showPopap(true));
  };
  const addComent = (text) => {
    dispatch(setCommentValue(text));
  };
  const addPromo = (text) => {
    dispatch(setPromocodeValue(text));
  };
  const addContacts = (info) => {
    dispatch(setContactsValue(info));
  };

  return (
    <div ref={popap} className={classNames("popap", { active: !fold })}>
      <div className='popap__content'>{variantPopap()}</div>
    </div>
  );
}

export default PopapComentComponent;
