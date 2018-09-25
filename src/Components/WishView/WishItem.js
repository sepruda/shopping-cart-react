import React from "react";

import './WishView.css';

const wishItem = props => (
    <div className="p-2">
        <button
            className="btn btn-sm btn-danger mr-1"
            onClick={(e) => {
                props.removeItem(props.gameId);
            }}
        >
            &times;
        </button>
        <button
            className="btn btn-sm btn-success float-right"
            onClick={e => {
                props.buyItem(props.id)
            }}
        >
            Buy
        </button>
        {props.title}
        <div className="text-right mt-2">
            DKK{" "}
            {parseFloat(props.price).toFixed(2)}
        </div>
    </div>
);

export default wishItem;