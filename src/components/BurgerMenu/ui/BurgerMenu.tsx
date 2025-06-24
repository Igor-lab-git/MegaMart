import { useState, useEffect } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.burgerMenu}>
      <button
        className={`${style.burgerButton} ${isOpen ? style.open : ""}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span className={style.burgerLine}></span>
        <span className={style.burgerLine}></span>
        <span className={style.burgerLine}></span>
      </button>

      <nav className={`${style.menuItems} ${isOpen ? style.open : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">О нас</Link>
        <Link to="/Contacts">Контакты</Link>
        <Link to="/polytheca">Политика сайта</Link>
      </nav>
    </div>
  );
};
