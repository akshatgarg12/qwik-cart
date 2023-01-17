import {
  component$,
  useContext,
  useStylesScoped$,
} from "@builder.io/qwik";
import { CartContext } from "~/root";
import CartCard from "../cart-card/cart-card";
import styles from "./cart.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  const cartContext = useContext(CartContext);
  const cart = cartContext.value;
  const totalPrice = cart
    .map(({ item, count }) => item.price * count)
    .reduce((partialSum: number, a: number) => partialSum + a, 0);

  return (
    <div class="cart">
      <h5>Cart :</h5>
      <hr />
      {cart.map(({ item, count }: any) => {
        return <CartCard key={item.id} item={item} count={count} />;
      })}
      <h4>Total Price : $ {totalPrice}</h4>
    </div>
  );
});
