import React from "react";

const WishView = props => (
    <div className="border mt-3 p-2">
        <h5 className="border-bottom border-dark">Ønskeliste</h5>
        {props.wishItems.map(item => {
                return (
                    <ul>
                        <li>
                            {item.title}
                            {item.author}
                            {item.price}
                        </li>
                    </ul>
                );
        })}
    </div>
);

export default WishView;
