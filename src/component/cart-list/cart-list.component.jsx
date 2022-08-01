import React from "react" ; 
import './cart-list.style.css' ; 
import {Cart} from "../cart/cart.component" ;


export const CartList =(props) => {
    return (
        <div className="cart-list" >
             {
        props.monster.map(monster => {
          return <Cart monster = {monster} key={monster.id}  />

        })}
        </div>
    )
}