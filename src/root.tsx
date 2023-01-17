import {
  component$,
  createContext,
  useContextProvider,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import type { CartCardProps } from "./components/cart-card/cart-card";
import { RouterHead } from "./components/router-head/router-head";

import globalStyles from "./global.css?inline";
export const CartContext =
  createContext<Signal<Array<CartCardProps>>>("cart-context");
export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  useStyles$(globalStyles);
  const cart = useSignal<Array<CartCardProps>>([]);
  useContextProvider(CartContext, cart);
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
