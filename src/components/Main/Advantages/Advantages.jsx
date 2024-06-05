import React from "react";
import style from "./Advantages.module.scss";
import FocusOnSelect from "./Slider/Slider";

function Advantages() {
  return (
    <div className={style.advantages}>
      <h2 className={style.advantages__title}>Почему именно мы</h2>
      <h2 className={style.advantages__title_mobile}>Почему <br></br>именно мы</h2>
      <FocusOnSelect />
    </div>
  );
}

export { Advantages };
