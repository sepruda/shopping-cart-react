import React from "react";

const CartItem = props => (
    <div>
        <button
            className="btn btn-sm btn-danger mr-1"
            onClick={(e) => {props.removeItem(props.id)}}
        >
            &times;
        </button>
        {props.quantity} &times; {props.title}
        <div className="text-right">
            kr.{" "}
            {(parseFloat(props.price) * props.quantity).toFixed(2)}
        </div>
    </div>
);

export default CartItem;
