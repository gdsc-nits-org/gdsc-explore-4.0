import React from "react";
import Accordion from "../Accordion/Accordion";
import style from "./FAQ.module.scss";
import animationImg from "./animation.png";

const FAQ = () => {
  return (
    <div className={style.FAQ}>
      <p className={style.header}>Your Questions, We Answered</p>
      <img src={animationImg} alt="" width={300} />
      <Accordion />
    </div>
  );
};

export default FAQ;
