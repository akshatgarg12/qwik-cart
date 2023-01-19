import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { CartContext } from "~/root";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";
import { CartLogo } from "../icons/cart";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";
export default component$(() => {
  useStylesScoped$(styles);
  const nav = useNavigate()
  const loc = useLocation()
  const isPrefetch = loc.pathname.search('prefetch') !== -1
  const cart = useContext(CartContext);
  const totalProducts = cart.value
    .map((item) => item.count)
    .reduce((x, y) => x + y, 0);

  return (
    <header>
      <div class="logo">
        {
          isPrefetch ? 
          <Link prefetch={true} href = "/" title = 'home'>
            <QwikLogo />
          </Link>
          :
          <button onClick$ = {() => nav.path = '/'}>
            <QwikLogo />
          </button>
        }
      </div>
      <ul>
        <li>
          <div class="logo">
          {
            isPrefetch ? 
            <Link prefetch={true} href = "/cart" title = 'cart'>
              <div>
                <CartLogo />
                <span> - {totalProducts}</span>
              </div>
            </Link>
            :
            <button onClick$ = {() => nav.path = '/cart'}>
              <div>
                <CartLogo />
                <span> - {totalProducts}</span>
              </div>
            </button>
          }
          </div>
        </li>
      </ul>
    </header>
  );
});
