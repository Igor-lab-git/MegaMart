import style from "./style.module.scss";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { aboutUsContent } from "../../../types/content/aboutUsContent";
import React from "react";

export const AboutUs = (): React.JSX.Element => {
  return (
    <div className={style.wrapperMain}>
      <Breadcrumbs currentPage={aboutUsContent.breadcrumb} />

      <div>
        <h2 className={style.mainTitle}>{aboutUsContent.title}</h2>
        <h3 className={style.title_H3}>{aboutUsContent.subtitle}</h3>

        {aboutUsContent.paragraphs.map((text, index) => (
          <p key={index} className={style.text}>
            {text}
          </p>
        ))}
      </div>

      <div>
        <h4>{aboutUsContent.advantages.title}</h4>
        <ul className={style.wrapperList}>
          {aboutUsContent.advantages.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <p
        className={style.text}
        dangerouslySetInnerHTML={{ __html: aboutUsContent.contactText }}
      />
    </div>
  );
};
