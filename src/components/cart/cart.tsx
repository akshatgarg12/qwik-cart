import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { CartCardProps } from "../cart-card/cart-card";
import CartCard from "../cart-card/cart-card";
import styles from './cart.css?inline'

export interface CartProps{
    cart : Array<CartCardProps>
}

export default component$(({cart} : CartProps) => {
    useStylesScoped$(styles)

    const totalPrice = cart.map(({item, count}) => (item.price * count)).reduce((partialSum:number, a:number) => partialSum + a, 0);
    return (
        <div class="cart">
            <h5>Cart :</h5> 
            <hr />
            {
                cart.map(({item, count}: any) => {
                    return (
                        <CartCard
                            item = {item}
                            count = {count}
                        />
                    )
                })
            }
            <h4>Total Price : $ {totalPrice}</h4>
        </div>
    )

})