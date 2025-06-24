import React from "react";
import style from "./style.module.scss";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { privacyPolicy } from "../../../types/content/policyTexts";

export const PolythecaPage = (): React.JSX.Element => {


  return (
    <div className={style.wrapperMain}>
      <div className={style.wrapperNavigate}>
        <Breadcrumbs currentPage={privacyPolicy.breadcrumb} />
      </div>
      
      <h1 className={style.mainTitle}>{privacyPolicy.title}</h1>
      
      {privacyPolicy.sections.map((section, index) => (
        <div key={`section-${index}`}>
          {section.title && <h3 className={style.textTitle}>{section.title}</h3>}
          
          {section.content.map((content, i) => {
            if (typeof content === 'string') {
              return <p key={`p-${index}-${i}`} className={style.text}>{content}</p>
            }
            if (content.type === 'span') {
              return <span key={`span-${index}-${i}`} className={style.text}>{content.text}</span>
            }
            return null
          })}
        </div>
      ))}
    </div>
  );
};
