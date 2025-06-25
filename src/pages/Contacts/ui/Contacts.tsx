import { YMaps } from "@pbe/react-yandex-maps";
import IframeParser from "../../../components/IframeParser/ui/IframeParser";
import address from "../../../../public/icons/contacts/address.svg";
import phone from "../../../../public/icons/contacts/phone.svg";
import time from "../../../../public/icons/contacts/time.svg";
import email from "../../../../public/icons/contacts/email.svg";
import style from "./style.module.scss";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import React from "react";

const htmlIframe = `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A62c0a15f17f40b035ea74cafbf0c2c91644024b5475006b14ea66a3c34264cf0&amp;source=constructor" width="600" height="500" frameborder="0"></iframe>`;

export const Contacts = (): React.JSX.Element => {
  return (
    <div className={style.wrapperMain}>
      <Breadcrumbs currentPage="Контакты" />
      <h1 className={style.title}>Свяжитесь с нами.</h1>
      <p className={style.textGreetings}>
        Мы рады видеть вас, клиентов нашего магазина. Свяжитесь с нами, и мы
        обязательно свяжемся с вами как можно скорее.
      </p>
      <div className={style.wrapperMap}>
        <YMaps>
          <IframeParser html={htmlIframe} />
        </YMaps>

        <div className={style.wrapperContent}>
          <div className={style.wrapperContact}>
            <img className={style.svg} src={address} alt="address" />
            <div className={style.wrapperText}>
              <span className={style.textTitle}>Адрес:</span>
              <br />
              <span className={style.text}>
                город: Москва, Новослободская ул., 4, Москва • этаж 2
              </span>
            </div>
          </div>

          <div className={style.wrapperContact}>
            <img className={style.svg} src={phone} alt="phone" />
            <div className={style.wrapperText}>
              <span className={style.textTitle}>Телефон:</span>
              <br />
              <span className={style.text}>
                Горячая линия: <a href="tel:+74950000000">+7 (495) 000-00-00</a>
              </span>
            </div>
          </div>

          <div className={style.wrapperContact}>
            <img className={style.svg} src={time} alt="time" />
            <div className={style.wrapperText}>
              <span className={style.textTitle}>Мы открыты:</span>
              <br />
              <span className={style.text}>
                Понедельник - четверг: 9:00 - 17:30 Пятница: 9:00 - 18:00
                Суббота: 11:00 - 17:00
              </span>
            </div>
          </div>

          <div className={style.wrapperContact}>
            <img className={style.svg} src={email} alt="email" />
            <div className={style.wrapperText}>
              <span className={style.textTitle}>E-mail:</span>
              <br />
              <span className={style.text}>
                <a href="shop@email.com">shop@email.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
