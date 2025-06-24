import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import footerTeveg from "../../../../public/icons/icon footer/footerTeveg.svg";
import footerVats from "../../../../public/icons/icon footer/footerVats.svg";
import footerVk from "../../../../public/icons/icon footer/footerVk.svg";
import american from "../../../../public/icons/icon footer/american.svg";
import discover from "../../../../public/icons/icon footer/discover.svg";
import maestro from "../../../../public/icons/icon footer/maestro.svg";
import visa from "../../../../public/icons/icon footer/visa.svg";

export const Footer = (): React.JSX.Element => {
  return (
    <div className={style.wrapperMain}>
      <div className={style.wrapperFooter}>
        <div className={style.wrapperNavigate}>
          <span className={style.titleNavigate}>Навигация</span>
          <Link className={style.link} to="/">
            Главная
          </Link>

          <Link className={style.link} to="/AboutUs">
            О нас
          </Link>

          <Link className={style.link} to="/Contacts">
            Контакты
          </Link>

          <Link className={style.link} to="/polytheca">
            Политика сайта
          </Link>

          <Link className={style.link} to="/cart">
            Корзина
          </Link>
        </div>

        <div className={style.wrapperSocial}>
          <span className={style.titleNavigate}>Контакты</span>
          <a className={style.linkContact} href="shop@email.com">
            shop@email.com
          </a>
          <a className={style.linkContactTelephone} href="tel:+74950000000">
            +7 (495) 000-00-00
          </a>
          <span className={style.titleNavigate}>Месенджеры</span>

          <div className={style.wrapperSocialIcons}>
            <a href="#">
              <img src={footerTeveg} alt="footerTeveg" />
            </a>
            <a href="#">
              <img src={footerVats} alt="footerVats" />
            </a>
            <a href="#">
              <img src={footerVk} alt="footerVk" />
            </a>
          </div>
        </div>
      </div>

      <div className={style.wrapperFooterBottom}>
        <div className={style.wrapperFooterdiscont}>
          <img src="" alt="" />
          <img src={american} alt="american" />
          <img src={discover} alt="discover" />
          <img src={maestro} alt="maestro" />
          <img src={visa} alt="visa" />
        </div>
        <span className={style.textFooterBottom}>
          Copyright © 2020 Shop Pty. Ltd.
        </span>
      </div>
    </div>
  );
};
