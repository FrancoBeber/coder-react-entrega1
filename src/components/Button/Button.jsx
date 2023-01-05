import React from "react";
import { useState } from "react";
import styles from "./button.module.css";

function Button(props) {
  const [colorButton, setColorButton] = useState(props.color);
  const styleBtn = { backgroundColor: colorButton };

  function changeColor() {
    setColorButton("tomato");
  }

  return (
    <button onClick={props.onClick} style={styleBtn} className={styles.btn}>
      {props.children || props.text}
    </button>
  );
}

export default Button;
