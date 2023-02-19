import React from 'react';
import mastercardImg from '../assets/img/pyments/mastercard.jpg';
import mastercardImgW from '../assets/img/pyments/mastercard.webp';
import paypalImg from '../assets/img/pyments/paypal.jpg';
import paypalImgW from '../assets/img/pyments/paypal.webp';
import visaImg from '../assets/img/pyments/visa.jpg';
import visaImgW from '../assets/img/pyments/visa.webp';
import ButtonComponent from '../components/ButtonComponent';

function Main() {
  return (
    <main className="main">
      <div className="main__lents lents">
        <div className="lents__block">
          <span className="lents__header">Ошейники из натуральных тканей</span>
          <span className="lents__description">Всегда защитят вашего питомца от блох и мошек</span>
        </div>
        <div className="lents__block">
          <span className="lents__header">Ошейники из натуральных тканей</span>
          <span className="lents__description">Всегда защитят вашего питомца от блох и мошек</span>
        </div>
        <div className="lents__block">
          <span className="lents__header">Ошейники из натуральных тканей</span>
          <span className="lents__description">Всегда защитят вашего питомца от блох и мошек</span>
        </div>
      </div>
      <section className="main__mainPage mainPage">
        <div className="mainPage__contanier">
          <div className="mainPage__content">
            <div className="mainPage__logo icon-SotBeys"></div>
            <div className="mainPage__title">Аксесуары для Собак</div>
            <div className="mainPage__description">Всякое разное, что нужно вашим питомцам </div>
            <ButtonComponent style={{ marginTop: '1rem' }} to="/shop">
              Магазин
            </ButtonComponent>
          </div>
        </div>
      </section>
      <section className="main__newItems newItems">
        <div className="newItems__block"></div>
        <div className="newItems__block">
          <div className="newItems__body">
            <div className="newItems__title">новинка</div>
            <div className="newItems__description">Бирюзовая волна</div>
            <div className="newItems__italic">зеленый шершень</div>
            <div className="newItems__italicDescription">
              новая линейка качественных товаров для собак
            </div>
            <ButtonComponent style={{ background: '#3D95B6' }} to="/shop">
              Магазин
            </ButtonComponent>
          </div>
        </div>
        <div className="newItems__block"></div>
      </section>
      <section className="main__collection collection">
        <div className="collection__title">Коллекции нашего Магазина</div>
        <ul className="collection__list">
          <li className="collection__itemCard">
            <button className="collection__buttonDeg buttonDeg">
              вязанка<span className="icon-arroy buttonDegArr"></span>
            </button>
          </li>
          <li className="collection__itemCard">
            <button className="collection__buttonDeg buttonDeg">
              бляшка вязанка<span className="icon-arroy buttonDegArr"></span>
            </button>
          </li>
          <li className="collection__itemCard">
            <button className="collection__buttonDeg buttonDeg">
              ошейник<span className="icon-arroy buttonDegArr"></span>
            </button>
          </li>
          <li className="collection__itemCard">
            <button className="collection__buttonDeg buttonDeg">
              бляшка вязанка<span className="icon-arroy buttonDegArr"></span>
            </button>
          </li>
          <li className="collection__itemCard">
            <button className="collection__buttonDeg buttonDeg">
              одежда для псов<span className="icon-arroy buttonDegArr"></span>
            </button>
          </li>
          <li className="collection__itemCard">
            <button className="collection__buttonDeg buttonDeg">
              вязанка<span className="icon-arroy buttonDegArr"></span>
            </button>
          </li>
          <li className="collection__itemCard">
            <button className="collection__buttonDeg buttonDeg">
              Варешки<span className="icon-arroy buttonDegArr"></span>
            </button>
          </li>
          <li className="collection__itemCard">
            <button className="collection__buttonDeg buttonDeg">
              Ждем новинки<span className="icon-arroy buttonDegArr"></span>
            </button>
          </li>
        </ul>
      </section>
      <section className="main__presentCollection presentCollection">
        <div className="presentCollection__left"></div>
        <div className="presentCollection__body">
          <div className="presentCollection__title">Биоматериал</div>
          <div className="presentCollection__description">колекция</div>
          <div className="presentCollection__button buttonCircle">колекция</div>
        </div>
        <div className="presentCollection__right"></div>
      </section>
      <section className="main__benifitsBlock benifitsBlock">
        <div className="benifitsBlock__item">
          <div className="benifitsBlock__body">
            <div className="benifitsBlock__logo icon-dog"></div>
            <div className="benifitsBlock__title">Для чего нужен ошейник ?</div>
            <div className="benifitsBlock__text">
              Ошейник необходим для того что бы все было в порядке у домашних животных которые были
              рядом с человеком в ошейнике{' '}
            </div>
            <div className="benifitsBlock__buttonMore">Читать еще</div>
          </div>
        </div>
        <div className="benifitsBlock__item">
          <div className="benifitsBlock__body">
            <div className="benifitsBlock__logo icon-home"></div>
            <div className="benifitsBlock__title">Для чего нужен ошейник ?</div>
            <div className="benifitsBlock__text">
              Ошейник необходим для того что бы все было в порядке у домашних животных которые были
              рядом с человеком в ошейнике{' '}
            </div>
            <div className="benifitsBlock__buttonMore">Читать еще</div>
          </div>
        </div>
        <div className="benifitsBlock__item">
          <div className="benifitsBlock__body">
            <div className="benifitsBlock__logo icon-loveandhand"></div>
            <div className="benifitsBlock__title">Для чего нужен ошейник ?</div>
            <div className="benifitsBlock__text">Ошейник необходим для того что бы е </div>
            <div className="benifitsBlock__buttonMore">Читать еще</div>
          </div>
        </div>
      </section>
      <section className="main__lentPresent lentPresent">
        <div className="lentPresent__contanier">
          <div className="lentPresent__body">
            <div className="lentPresent__title">Ошейники яблоко</div>
            <div className="lentPresent__description">
              Наши ошейники самые лучшие из всех что есть
            </div>
            <button className="lentPresent_button buttonCvadro">
              Оформи заказ сейчас и получи скидку
            </button>
          </div>
        </div>
      </section>
      <section className="main__fedbackForm fedbackForm">
        <div className="fedbackForm__contanier">
          <div className="fedbackForm__text">
            <div className="fedbackForm__title">Если у вас остались вопросы</div>
            <div className="fedbackForm__subTitle">
              Или вы хотите получить cкидку - 10% Зaполните форму обратной связи
            </div>
          </div>
          <div className="fedbackForm__form">
            <div className="fedbackForm__input inputFormCvadro">
              <legend className="inputFormCvadro__legend">Введите данные для связи*</legend>
              <input
                placeholder="Номер телефона или email"
                type="text"
                className="inputFormCvadro__input"
              />
            </div>
            <button className="fedbackForm__button buttonCvadro">обратный звонок</button>
          </div>
        </div>
      </section>
      <section className="main__socialAndPyment socialAndPyment">
        <div className="socialAndPyment__social">
          <div className="socialAndPyment__link">#ОШЕЙНИКПОКУПАЙ</div>
          <div className="socialAndPyment__link icon-telegtam"></div>
          <div className="socialAndPyment__link icon-instagram"></div>
        </div>
        <div className="socialAndPyment__pyments">
          <picture>
            <source srcSet={mastercardImgW} type="image/webp" />
            <img src={mastercardImg} alt="" />
          </picture>
          <picture>
            <source srcSet={paypalImgW} type="image/webp" />
            <img src={paypalImg} alt="" />
          </picture>
          <picture>
            <source srcSet={visaImgW} type="image/webp" />
            <img src={visaImg} alt="" />
          </picture>
        </div>
      </section>
    </main>
  );
}

export default Main;
