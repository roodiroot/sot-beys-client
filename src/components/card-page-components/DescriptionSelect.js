import classNames from "classnames";
import React, { useState } from "react";

function DescriptionSelectComponent({ descriptionCurent = "" }) {
  const description = [
    {
      title: "Описание",
      description: descriptionCurent,
    },
    {
      title: "NFC-паспорт",
      description:
        "NFC-паспорт для ошейников - это специальный документ, содержащий информацию о вашем питомце и использующий технологию ближней бесконтактной связи для обеспечения безопасности и удобства при идентификации и доступе к важным данным.",
    },
  ];
  const [activeBlock, setActiveBlock] = useState(0);
  return (
    <div className='bodyItem__descriptionSelect descriptionSelect'>
      <div className='descriptionSelect__headers'>
        {description.map((i, index) => (
          <div
            key={i.title}
            onClick={(e) => setActiveBlock(index)}
            className={classNames("descriptionSelect__itemName", {
              active: index === activeBlock,
            })}
          >
            {i.title}
          </div>
        ))}
      </div>
      <div className='descriptionSelect__contents'>
        {description.map((i, index) => (
          <div
            key={i.title}
            className={classNames("descriptionSelect__contentItem", {
              active: index === activeBlock,
            })}
          >
            {i.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DescriptionSelectComponent;
