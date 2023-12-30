import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GaleryItemElemComponent from "../components/card-page-components/GaleryItemElemComponent";
import NextAndPreviousComponent from "../components/navigate-components/NextAndPreviousComponent";
import PathComponent from "../components/navigate-components/PathComponent";
import { getOneProductItems } from "../http/productApi";
import ConfigCollar from "../components/new-components/itom-page/config-collar";
import SocialBlockItemPage from "../components/new-components/social-block-item-page";
import ConfigLeash from "../components/new-components/itom-page/config-leash";
import ConfigHarness from "../components/new-components/itom-page/config-harness";
import Chip from "../components/new-components/chip";

function CardItemPage() {
  const [selectItem, setSelectItem] = useState({});

  const { itemName } = useParams("");

  const dispatch = useDispatch();
  useEffect(() => {
    getOneProductItems(itemName).then((i) => {
      setSelectItem(i);
    });
    return () => setSelectItem({});
  }, [dispatch, itemName]);

  return (
    <div className='cardItem -pageBody'>
      <div className='cardItem__contanier'>
        <div className='cardItem__navigation-path navigation-path'>
          <PathComponent />
          <NextAndPreviousComponent />
        </div>
        <div className='cardItem__content'>
          {selectItem.img !== undefined && (
            <GaleryItemElemComponent selectItem={selectItem.img} />
          )}
          <div className='cardItem__bodyItem bodyItem'>
            <div className='bodyItem__title'>{selectItem.name}</div>
            <div className='bodyItem__chips-block'>
              <Chip title={selectItem?.model?.category?.name} />
              <Chip title={selectItem?.model?.name} />
            </div>
            {/* // Для ОШЕЙНИКА */}
            {selectItem?.size?.length === 3 && (
              <ConfigCollar selectItem={selectItem} />
            )}
            {/* // Для ПОВОДКА */}
            {selectItem?.size_2?.length > 2 && (
              <ConfigLeash selectItem={selectItem} />
            )}
            {/* // Для ШЛЕЙКИ */}
            {selectItem?.size_3?.length === 4 && (
              <ConfigHarness selectItem={selectItem} />
            )}
            <div className='bodyItem__socialColor socialColor'>
              <SocialBlockItemPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItemPage;

/* <CheckBoxCastomComponent
              selected={setColor}
              style={{ marginBottom: "3.5rem" }}
            /> */
