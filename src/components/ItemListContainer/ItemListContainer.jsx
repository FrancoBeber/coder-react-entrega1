import React, { useState, useEffect } from "react";
import getItems, { getItemsCategory } from "../services/mockService";
import Flex from "../flex/flex";
import Item from "./Item";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./item.css";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const categoryID = useParams().genero;

  useEffect(() => {
    if (categoryID === undefined) {
      getItems()
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => console.error(error));
    } else {
      getItemsCategory(categoryID)
        .then((respuesta) => setProducts(respuesta))
        .catch((error) => console.error(error));
    }
  }, [categoryID]);

  return <ItemList products={products} />;
}
export default ItemListContainer;
