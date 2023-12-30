import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import SelectInputComponent from "../../card-page-components/SelectInputComponent";
import { thousandPrice } from "../../../function/thousandPrice";
import CheckBoxOk from "../../card-page-components/CheckBoxOk";
import TextAreaComponent from "../../card-page-components/TextAreaComponent";
import DescriptionSelectComponent from "../../card-page-components/DescriptionSelect";
import ButtonComponent from "../../ButtonComponent";
import { useDispatch } from "react-redux";
import { addInBasket } from "../../../features/basket/basketSlice";
import { useResize } from "../../../function/use-resize";

import "react-toastify/dist/ReactToastify.css";

const selectModel = [
  { name: "Фастекс стандартный", value: "fastex_standard_price" },
  { name: "Фастекс усиленный", value: "fastex_reinforced_price" },
  { name: "Слип", value: "slip_price" },
  { name: "Мартигейл", value: "martingale_price" },
];

const selectWhidth = [
  { name: "25мм", value: 0 },
  { name: "30мм", value: 1 },
  { name: "40мм", value: 2 },
];

const selectedSizes = [
  { name: "XS 22-28см" },
  { name: "S 26-35см" },
  { name: "SM 30-43см" },
  { name: "M 45-60см" },
  { name: "L 45-60см" },
];

const ConfigCollar = ({ selectItem }) => {
  const { width } = useResize();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [whidth, setWhidth] = useState({ name: "40mm", value: 0 });
  const [model, setModel] = useState({
    name: "Фастекс стандартный",
    value: "fastex_standard_price",
  });
  const [size, setSize] = useState({ name: "XS 22-28см" });
  const [carbine, setCarbine] = useState(false);
  const [interception, setInterception] = useState(false);
  const [comentArea, setComentArea] = useState("");

  useEffect(() => {
    if (selectItem.size?.length === 3) {
      setPrice(selectItem.size[whidth?.value]?.[model.value]);
    }
    if (carbine) {
      setPrice((price) => price + 600);
    }
    if (interception) {
      setPrice((price) => price + 300);
    }
  }, [selectItem.size, whidth, model, carbine, interception]);

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
      size: size?.name,
      count: 1,
      total: price,
    };
    // console.log(cartItem);
    if (width <= 1000) {
      toast.success("Товар добавлен в карзину");
    }
    dispatch(addInBasket(cartItem));
  };

  return (
    <>
      {/* =================================================== */}
      <SelectInputComponent
        value={whidth.name}
        arrey={selectWhidth}
        selected={setWhidth}
        style={{ marginBottom: "3.5rem" }}
      >
        Выбирите ширину*
      </SelectInputComponent>
      {/* =================================================== */}
      <SelectInputComponent
        value={model.name}
        arrey={selectModel}
        selected={setModel}
        style={{ marginBottom: "3.5rem" }}
      >
        Выбирите модель*
      </SelectInputComponent>
      {/* =================================================== */}
      <div className='bodyItem__price'>{thousandPrice(price)}</div>
      {/* =================================================== */}
      <SelectInputComponent
        value={size.name}
        arrey={selectedSizes}
        selected={setSize}
        style={{ marginBottom: "3.5rem" }}
      >
        Размер*
      </SelectInputComponent>
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

export default ConfigCollar;
