import React from "react";

const CartItem = props => (
    <div>
        <div>{props.title}</div>
        <div>{props.author}</div>
        <div>{props.price}</div>
    </div>
);

export default CartItem;
