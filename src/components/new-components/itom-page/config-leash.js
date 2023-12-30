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

const selectedPrint = [
  { name: "Озеро" },
  { name: "Лес" },
  { name: "Таксы" },
  { name: "Летний вечер" },
];

const ConfigLeash = ({ selectItem }) => {
  const dispatch = useDispatch();
  const { width } = useResize();
  const [price, setPrice] = useState();
  const [print, setPrint] = useState({ name: "Озеро" });
  const [carbine, setCarbine] = useState(false);
  const [interception, setInterception] = useState(false);
  const [comentArea, setComentArea] = useState("");
  const [size, setSize] = useState(selectItem?.size_2[0]);

  useEffect(() => {
    setPrice(size?.price);
    if (carbine) {
      setPrice((price) => price + 600);
    }
    if (interception) {
      setPrice((price) => price + 300);
    }
  }, [selectItem.size_2, size, carbine, interception]);

  const addBasket = () => {
    const cartItem = {
      id: selectItem?.id,
      name: selectItem?.name,
      price: price,
      img: selectItem?.img[0],
      description: selectItem?.description,
      comment: comentArea,
      carbine: carbine ? "Да" : "Нет",
      interception: interception ? "Да" : "Нет",
      print: print?.name,
      size: size?.length,
      count: 1,
      total: price,
    };
    // console.log(cartItem);
    if (width <= 1000) {
      toast.success("Товар добавлен в карзину");
    }
    dispatch(addInBasket(cartItem));
  };
  //   console.log(selectItem);
  return (
    <>
      <SelectInputComponent
        keyName='length'
        value={size?.length}
        arrey={selectItem.size_2}
        selected={setSize}
        style={{ marginBottom: "3.5rem" }}
      >
        Выбирите размер*
      </SelectInputComponent>
      {/* =================================================== */}
      <SelectInputComponent
        value={print.name}
        arrey={selectedPrint}
        selected={setPrint}
        style={{ marginBottom: "3.5rem" }}
      >
        Выбирите принт*
      </SelectInputComponent>
      {/* =================================================== */}
      <div className='bodyItem__price'>{thousandPrice(price)}</div>
      {/* =================================================== */}
      <CheckBoxOk
        label='Высокопрочный алюминиевый карабин +600 руб.'
        selected={setCarbine}
        value={carbine}
        style={{ marginBottom: "2rem" }}
      />
      {/* =================================================== */}
      <CheckBoxOk
        label='Ручка-перехват у карабина +300 руб.'
        selected={setInterception}
        value={interception}
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

export default ConfigLeash;
