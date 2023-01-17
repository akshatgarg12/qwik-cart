import { component$} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { Item } from '~/components/product/product';
import { Product } from '~/components/product/product';

export const products : Array<Item> = [
  {
    id : 1,
    title : "watch",
    img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price : 5000
  },
  {
    id : 2,
    title : "suit",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price : 10000
  },
  {
    id : 3,
    title : "shoes",
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price : 3000
  },
  {
    id : 4,
    title : "sunglasses",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    price : 2000
  },
]
export default component$(() => {
  return (
    <div>
      <div class="container">
          {
            products.map((item) => <Product key={item.id} item = {item} />)
          }
      </div>
    </div>
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
