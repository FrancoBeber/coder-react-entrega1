import React from "react";
import Flex from "../flex/flex";
import Item from "./Item";
import products from "../../data/products";
import "./item.css";

function ItemList() {
  return (
    <Flex>
      {products.map((item) => {
        return (
          <Item
            key={item.id}
            precio={item.precio}
            producto={item.producto}
            genero={item.genero}
            img={item.img}
          />
        );
      })}
    </Flex>
  );
}

export default ItemList;
