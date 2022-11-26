import React from "react";
import "./item.css";

function ItemListContainer(props) {
  const { saludo } = props;
  return (
    <div className="saludoInicial">
      <h1>{saludo}</h1>
    </div>
  );
}
export default ItemListContainer;
