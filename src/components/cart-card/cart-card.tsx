import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { Item } from "../product/product";
import styles from './cart-card.css?inline'

export interface CartCardProps{
    item : Item
    count : number
}

export default component$(({item, count}:CartCardProps) => {
    const {id, title, img, price} = item
    useStylesScoped$(styles);
    return (
    <div class="cart-card">
         <div><img src = {img} alt = {`image of item ${id}`}/></div>
         <div><h3>{title}</h3></div>
         <div><h5>{count}</h5></div>
         <div><h5>{count * price}</h5></div>
    </div>
    )
})