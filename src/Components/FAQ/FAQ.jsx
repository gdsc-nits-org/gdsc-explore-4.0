import React from "react";
import Accordion from "../Accordion/Accordion";
import style from "./FAQ.module.scss";
import FAQgif from "./FAQgif.gif";

const FAQ = () => {
  return (
    <div className={style.FAQ}>
      <p className={style.header}>Your Questions, We Answered</p>
      <img src={FAQgif} alt="faq" width={300} />
      <Accordion />
    </div>
  );
};

export default FAQ;
