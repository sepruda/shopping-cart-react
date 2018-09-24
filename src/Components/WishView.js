import React from "react";
import WishItem from "./WishItem";

const consolidateList = items => {
    const list = {};
    items.map(item => list[item.gameId] = item)
        return Object.values(list);
}

const WishView = props => {
    const items = consolidateList([...props.wishItems]);
    return (
        <div className="border mt-3 p-2">
            <h5 className="border-bottom border-dark">Wish List</h5>
            {items.map(item => {
                    return (
                        <WishItem
                            key={item.gameId}
                            title={item.name}
                            price={item.price}
                            id={item.gameId}
                            removeItem={props.wishRemoveItem}
                        />
                    );
            })}
        </div>
    );
}

export default WishView;
