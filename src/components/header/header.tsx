import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { CartContext } from "~/root";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";
// import { Link } from "@builder.io/qwik-city";
import { CartLogo } from "../icons/cart";
export default component$(() => {
  useStylesScoped$(styles);

  const cart = useContext(CartContext);
  const totalProducts = cart.value
    .map((item) => item.count)
    .reduce((x, y) => x + y, 0);

  return (
    <header>
      <div class="logo">
        <a href="/" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <div class="logo">
            <a class="link" href="/cart">
              <div>
                <CartLogo />
                <span> - {totalProducts}</span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </header>
  );
});
