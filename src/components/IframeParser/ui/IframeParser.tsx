import React from "react";
import style from "./style.module.scss";

interface IframeProps {
  html: string;
}

const IframeParser = ({ html }: IframeProps): React.JSX.Element => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const iframe = doc.querySelector("iframe");

  if (!iframe) return <div>⛔ iframe не найден</div>;

  return (
    <iframe
      className={style.iframe}
      src={iframe.getAttribute("src") || ""}
      width={iframe.getAttribute("width") || "200"}
      height={iframe.getAttribute("height") || "200"}
      frameBorder={iframe.getAttribute("frameborder") || "0"}
      allowFullScreen
      title="Parsed Iframe"
    />
  );
};

export default IframeParser;
