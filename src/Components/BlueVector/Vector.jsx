import React from "react";
import style from "../Footer/Footer.module.scss";

const Vector = ({ vectorSrc }) => {
  return (
    <div className={style.VectorContainer}>
      <img className={style.displayImg} src={vectorSrc} alt="vector" />
    </div>
  );
};

export default Vector;
