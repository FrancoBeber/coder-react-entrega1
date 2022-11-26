import React from "react";
import "./item.css";

function ItemListContainer(props) {
  const { precio, producto, genero, img } = props;
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="aire acondicionado"></img>
      </div>
      <div className="card-detail">
        <h3>{producto}</h3>
        <h3>{genero}</h3>
        <h4>{precio}</h4>
      </div>
    </div>
  );
}
export default ItemListContainer;
