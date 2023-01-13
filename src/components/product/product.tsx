import {component$, useStylesScoped$} from '@builder.io/qwik'
import type { QRL} from '@builder.io/qwik';
import styles from './product.css?inline';


export interface Item{
  id : number,
  title : string,
  img : string,
  price : number,
}

export interface ProductProps{
  item : Item 
  addToCart : QRL<(item: any) => Promise<void>>
}

export const Product = component$(({item, addToCart} : ProductProps) => {
    const {id, title, img, price} = item
    useStylesScoped$(styles)
    return (
      <div class="product">
        <div><img src = {img} alt = {`image of item ${id}`}/></div>
        <h3>{title}</h3>
        <h5>$ {price}</h5>
        <button onClick$={async () => {
          console.log(addToCart)
          await addToCart(item)
          }}>Add to cart</button>
      </div>
      )
  })