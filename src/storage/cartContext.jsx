import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);
  let saludo = "Hola desde context";

  function getQuantityInCart() {
    return cart.length;
  }

  function addToCart(item, count) {
    let indexItemInCart = cart.findIndex(
      (itemInContext) => itemInContext.id === item.id
    );
    let isItemInCart = indexItemInCart !== -1;
    const newCart = [...cart];

    if (isItemInCart) {
      newCart[indexItemInCart].count += count;
      setCart(newCart);
    } else {
      /*const newItem = item;
    newItem.count = count;*/
      newCart.push(...item, count);
      setCart(newCart);
    }
  }

  function totalItemsInCart() {}

  return (
    <Provider
      value={{ cart, saludo, getQuantityInCart, addToCart, totalItemsInCart }}
    >
      {props.children}
    </Provider>
  );
}
export { cartContext, CartContextProvider };
