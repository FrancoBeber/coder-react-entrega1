import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

function Item(props) {
  let urlDetail = `/item/${props.id}`;
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="foto producto"></img>
      </div>
      <div className="card-detail">
        <h3>{props.producto}</h3>
        <h3>{props.genero}</h3>
        <h4>${props.precio}</h4>
        <button className="btn-agregar">Agregar al carrito</button>
        <br />
        <br />
        <Link to={urlDetail}>Ver detalle</Link>
      </div>
    </div>
  );
}
export default Item;
