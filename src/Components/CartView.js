import React from "react";
import FlexList from "./FlexList";
import CartItem from "./CartItem";

const CartView = props => (
    <div className="border mt-3 p-2">
        <h5 className="border-bottom border-dark">Kurv</h5>
        <ul>
            {props.cartItems.map(item => {
                return (
                    <li>
                        {item.title }
                        {item.author }
                        {item.price}
                    </li>
                );
            })}
        </ul>
    </div>
);

export default CartView;
