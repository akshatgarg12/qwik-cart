import { component$} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Cart from '~/components/cart/cart';

export default component$(() => {
  return (
    <Cart />
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
