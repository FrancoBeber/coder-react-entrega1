import React from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CartWidget() {
  const contexto = useContext(cartContext);
  const cantidad = contexto.getQuantityInCart();
  return (
    <div>
      <i className="bi bi-cart3"></i>
      <span>{cantidad}</span>
    </div>
  );
}
export default CartWidget;
