//import { Button } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import Button from "../../Button/Button";
import "./ItemCount.css";

function ItemCount({ onAddToCart }) {
  //return <div>ItemCount</div>;
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < 3) {
      setCount(count + 1);
    }
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <Button onClick={handleSubstract}>-</Button>
        <span>{count}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <div className="itemcount_btns">
        <Button onButtonTouch={() => onAddToCart(count)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
