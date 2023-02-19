import classNames from 'classnames';
import React, { useState } from 'react';

function DescriptionSelectComponent() {
  const description = [
    {
      title: 'Описание',
      description:
        ' Шапка для овчарки - это одно из произведений искуства которое придаст шарм и красоту вашему питомцу вне зависимости от времени года! Прекрасная клетка, которая воникла благодаря вдохновению авторов клеткой Barberry',
    },
    {
      title: 'Материалы изготовления',
      description:
        'JSX создаёт «элементы» React. Мы рассмотрим их отрисовку в DOM в следующем разделе. ... React не требует использование JSX, но большинство',
    },
  ];
  const [activeBlock, setActiveBlock] = useState(0);
  return (
    <div className="bodyItem__descriptionSelect descriptionSelect">
      <div className="descriptionSelect__headers">
        {description.map((i, index) => (
          <div
            key={i.title}
            onClick={(e) => setActiveBlock(index)}
            className={classNames('descriptionSelect__itemName', {
              active: index === activeBlock,
            })}>
            {i.title}
          </div>
        ))}
      </div>
      <div className="descriptionSelect__contents">
        {description.map((i, index) => (
          <div
            key={i.title}
            className={classNames('descriptionSelect__contentItem', {
              active: index === activeBlock,
            })}>
            {i.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DescriptionSelectComponent;
