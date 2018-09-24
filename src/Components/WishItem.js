import React from "react";

const wishItem = props => (
    <div>
        <button
            className="btn btn-sm btn-danger mr-1"
            onClick={(e) => {
                props.removeItem(props.gameId);
            }}
        >
            &times;
        </button>
        {props.title}
        <div className="text-right">
            kr.{" "}
            {parseFloat(props.price).toFixed(2)}
        </div>
    </div>
);

export default wishItem;