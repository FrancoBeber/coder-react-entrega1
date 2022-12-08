import React, { useState, useEffect } from "react";
import getItems from "../services/mockService";
import Flex from "../flex/flex";
import Item from "./Item";
import ItemList from "./ItemList";
import "./item.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems().then((respuesta) => setProducts(respuesta));
  }, []);

  return <ItemList products={products} />;
}
export default ItemListContainer;
