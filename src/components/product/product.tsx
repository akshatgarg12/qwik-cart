import {
  $,
  component$,
  useContext,
  useSignal,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./product.css?inline";
import { CartContext } from "~/root";
import type { CartCardProps } from "../cart-card/cart-card";

export interface Item {
  id: number;
  title: string;
  img: string;
  price: number;
}

export interface ProductProps {
  item: Item;
}

export const Product = component$(({ item }: ProductProps) => {
  useStylesScoped$(styles);
  const cart = useContext(CartContext);
  const { id, title, img, price } = item;
  const ifProductAlreadyInCart = cart.value.filter(
    ({ item }) => item.id === id
  ).length;
  const initialProductCount = ifProductAlreadyInCart
    ? cart.value.filter(({ item }) => item.id === id)[0].count
    : 0;
  const productCountInCart = useSignal(initialProductCount);
  const increaseItemCountInCart = $(async (item: Item) => {
    const updatedCart = cart.value;
    updatedCart.forEach((cartObj) => {
      const cartItem = cartObj.item;
      if (cartItem.id === item.id) {
        cartObj.count += 1;
      }
    });
    cart.value = [...updatedCart];
  });
  const addToCart = $(async (item: Item) => {
    if (ifProductAlreadyInCart) {
      await increaseItemCountInCart(item);
    } else {
      const newItem: CartCardProps = { item, count: 1 };
      cart.value = [...cart.value, newItem];
    }
    productCountInCart.value += 1;
  });

  const decreaseItemCountInCart = $(async (item: Item) => {
    if (ifProductAlreadyInCart) {
      let removeProduct = false;
      const updatedCart = cart.value;
      updatedCart.forEach((cartObj) => {
        const cartItem = cartObj.item;
        if (cartItem.id === item.id) {
          cartObj.count -= 1;
          productCountInCart.value -= 1;
          if (cartObj.count === 0) {
            removeProduct = true;
          }
        }
      });
      if (removeProduct) {
        cart.value = updatedCart.filter(
          (cartObj) => cartObj.item.id !== item.id
        );
      } else {
        cart.value = [...updatedCart];
      }
    }
  });
  return (
    <div class="product">
      <div>
        <img src={img} alt={`image of item ${id}`} />
      </div>
      <h3>{title}</h3>
      <h5>$ {price}</h5>
      {!ifProductAlreadyInCart ? (
        <button
          onClick$={async () => {
            console.log(addToCart);
            await addToCart(item);
          }}
        >
          Add to cart
        </button>
      ) : (
        <div class="actions">
          <button
            onClick$={async () => {
              await decreaseItemCountInCart(item);
            }}
          >
            -
          </button>
            <span>{productCountInCart.value}</span>
          <button
            onClick$={async () => {
              await addToCart(item);
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
});
