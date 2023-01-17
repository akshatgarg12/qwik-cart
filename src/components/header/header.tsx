import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';
import { CartContext } from '~/root';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import { Link } from '@builder.io/qwik-city'
export default component$(() => {
  useStylesScoped$(styles);
  const cart = useContext(CartContext)
  const totalProducts = cart.value.map((item) => item.count).reduce((x, y) => x+y, 0)
  return (
    <header>
      <div class="logo">
        <Link class="link" href="/" title="qwik">
          <QwikLogo />
        </Link>
      </div>
      <ul>
        <li>
          <Link class="link" href="/cart">
            Cart - {totalProducts}
          </Link>
        </li>
      </ul>
    </header>
  );
});
