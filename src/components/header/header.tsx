import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { CartContext } from "~/root";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";
import { Link } from "@builder.io/qwik-city";
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
        <Link prefetch={true} href="/" title="qwik">
          <QwikLogo />
        </Link>
      </div>
      <ul>
        <li>
          <div class="logo">
            <Link prefetch={true} class="link" href="/cart">
              <div>
                <CartLogo />
                <span> - {totalProducts}</span>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </header>
  );
});
