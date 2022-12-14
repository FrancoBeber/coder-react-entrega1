import React, { useState, useEffect, useContext } from "react";
import { getSingleItem } from "../services/mockService";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "./ItemCount/ItemCount";
import { cartContext } from "../../storage/cartContext";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [countInCart, setCountInCart] = useState(0);
  const { addToCart } = useContext(cartContext);

  let { id } = useParams();
  useEffect(() => {
    getSingleItem(id)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert("Producto no encontrado"));
  }, []);

  function handleAddToCart(count) {
    setCountInCart(count);
    addToCart(product, count);
    console.log("compraste items:", count);
  }

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
      <ItemCount onAddToCart={handleAddToCart} />
      <Link to="/cart">Ir al carrito</Link>
    </div>
  );
}
export default ItemDetailContainer;
