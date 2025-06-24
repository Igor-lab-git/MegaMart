import React from 'react';
import style from './style.module.scss';
import homeBanner_2 from '../../../../public/img/homePage/homeBanner_2.png';
import homeBanner_3 from '../../../../public/img/homePage/homeBanner_3.png';
import homeBanner_4 from '../../../../public/img/homePage/homeBanner_4.png';
import homeBanner_5 from '../../../../public/img/homePage/homeBanner_5.png';

export const PromoBanners: React.FC = () => (
  <div className={style.wrapperImg}>
    <img className={style.homeBanner_2} src={homeBanner_2} alt="homeBanner_2" />
    <img className={style.homeBanner_2} src={homeBanner_3} alt="homeBanner_3" />
    <img className={style.homeBanner_2} src={homeBanner_4} alt="homeBanner_4" />
    <img className={style.homeBanner_2} src={homeBanner_5} alt="homeBanner_5" />
  </div>
);