import React from "react";
import "./item.css";

function Item(props) {
  const { precio, producto, genero, img } = props;
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="foto producto"></img>
      </div>
      <div className="card-detail">
        <h3>{producto}</h3>
        <h3>{genero}</h3>
        <h4>{precio}</h4>
        <button className="btn-agregar">Agregar al carrito</button>
      </div>
    </div>
  );
}
export default Item;
