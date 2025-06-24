import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import React from "react";

interface BreadcrumbsProps {
  currentPage: string;
  showBackButton?: boolean;
  backButtonText?: string;
  homeButtonText?: string;
}

export const Breadcrumbs = ({
  currentPage,
  showBackButton = true,
  backButtonText = "Назад",
  homeButtonText = "Главная"
}: BreadcrumbsProps): React.JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className={style.navigate}>
      <Link className={style.navigateBtn} to="/">
        {homeButtonText}
      </Link>
      <span>/</span>
      {showBackButton && (
        <>
          <button 
            className={style.navigateBtn} 
            onClick={() => navigate(-1)}
          >
            {backButtonText}
          </button>
          <span>/</span>
        </>
      )}
      <span>{currentPage}</span>
    </div>
  );
};