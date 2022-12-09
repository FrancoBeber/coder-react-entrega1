import React, { useState, useEffect } from "react";
import { getSingleItem } from "../services/mockService";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getSingleItem(id)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert("Producto no encontrado"));
  }, []);

  return (
    <div className="card-itemDetail">
      <div className="card-itemDetail-img">
        <img src={product.img} alt="" />
      </div>
      <div className="card-detail-detail">
        <h2>{product.producto}</h2>
        <h3>{product.genero}</h3>
        <h3 className="price-detail">${product.precio}</h3>
      </div>
    </div>
  );
}
export default ItemDetailContainer;
