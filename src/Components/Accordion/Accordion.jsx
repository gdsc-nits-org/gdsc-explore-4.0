import React, { useState } from "react";
import FAQData from "./FAQData.json";
import style from "./Accordion.module.scss";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  function toggle(i) {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
    return null;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.accordion}>
        {FAQData.map((item, i) => (
          <div className={`${style.item} ${selected === i ? style.active : ""}`} key={i}>
            <div className={style.question} onClick={() => toggle(i)}>
              <p>{item.question}</p>
              <span>{selected === i ? "-" : "+"}</span>
            </div>

            <div className={selected === i ? style.answerShow : style.answer}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
