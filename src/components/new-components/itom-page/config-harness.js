import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import CheckBoxOk from "../../card-page-components/CheckBoxOk";
import TextAreaComponent from "../../card-page-components/TextAreaComponent";
import ButtonComponent from "../../ButtonComponent";
import DescriptionSelectComponent from "../../card-page-components/DescriptionSelect";
import { addInBasket } from "../../../features/basket/basketSlice";
import SelectInputComponent from "../../card-page-components/SelectInputComponent";
import { thousandPrice } from "../../../function/thousandPrice";

import "react-toastify/dist/ReactToastify.css";
import { useResize } from "../../../function/use-resize";

const ConfigHarness = ({ selectItem }) => {
  const { width } = useResize();
  const dispatch = useDispatch();
  const [price, setPrice] = useState();
  const [ring, setRing] = useState(false);
  const [comentArea, setComentArea] = useState("");
  const [size, setSize] = useState(selectItem?.size_3[0] || undefined);

  useEffect(() => {
    setPrice(size?.price);
    if (ring) {
      setPrice((price) => price + 300);
    }
  }, [selectItem.size_2, size, ring]);

  const addBasket = () => {
    const cartItem = {
      id: selectItem?.id,
      name: selectItem?.name,
      price: price,
      img: selectItem?.img[0],
      description: selectItem?.description,
      comment: comentArea,
      ring: ring ? "Да" : "Нет",

      size: size?.size,
      count: 1,
      total: price,
    };
    // console.log(cartItem);
    if (width <= 1000) {
      toast.success("Товар добавлен в карзину");
    }
    dispatch(addInBasket(cartItem));
  };
  // console.log(selectItem);
  return (
    <>
      <SelectInputComponent
        keyName='size'
        value={size?.size}
        arrey={selectItem.size_3}
        selected={setSize}
        style={{ marginBottom: "3.5rem" }}
      >
        Выбирите размер*
      </SelectInputComponent>
      {/* =================================================== */}
      <div className='bodyItem__price'>{thousandPrice(price)}</div>
      {/* =================================================== */}
      <CheckBoxOk
        label='Добавить кольцо на груди +300 руб.'
        selected={setRing}
        value={ring}
        style={{ marginBottom: "3.5rem" }}
      />
      {/* =================================================== */}
      <TextAreaComponent
        selected={setComentArea}
        style={{ marginBottom: "3.5rem" }}
      >
        Напишите коментарий к товару*
      </TextAreaComponent>
      {/* =================================================== */}
      <div className='bodyItem__buttonsBlock'>
        <ButtonComponent
          onClick={addBasket}
          style={{ width: "100%" }}
          variant='cvadro'
        >
          Добавить в корзину
        </ButtonComponent>
      </div>
      {/* =================================================== */}
      <DescriptionSelectComponent descriptionCurent={selectItem.description} />
    </>
  );
};

export default ConfigHarness;
