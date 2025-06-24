import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../features/store";
import style from "./style.module.scss";
import { BurgerMenu } from "../../BurgerMenu";
import facebook from "../../../../public/icons/header/facebook.svg";
import instagram from "../../../../public/icons/header/instagram.svg";
import logo from "../../../../public/icons/header/logo.svg";
import { FiShoppingCart } from "react-icons/fi";
import { GoPersonAdd } from "react-icons/go";

export const Header = (): React.JSX.Element => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className={style.headerMain}>
      <div className={style.contactsHeader}>
        <span className={style.contactsHeaderSpan}>Позвоните нам</span>
        <div className={style.contactsHeaderSpan}>
          <a href="tel:+74951234567">+7 (495) 123-45-67</a>
        </div>
        <div className={style.socialWrapper}>
          <a href="#">
            <img className={style.socialIcon} src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img className={style.socialIcon} src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <header className={style.header}>
        <Link to="/" className={style.myStor}>
          <img src={logo} alt="logo" />
          MegaMart
        </Link>
        <BurgerMenu />
        <div className={style.wrapperCart}>
          <Link className={style.linkCartImg} to="/cart">
            <FiShoppingCart className={style.cartImg} />
            <span className={style.cartCount}>{cartCount}</span>
          </Link>
          <Link to="/registrationForm">
            <GoPersonAdd className={style.cartImgLogin} />
          </Link>
        </div>
      </header>
    </div>
  );
};
