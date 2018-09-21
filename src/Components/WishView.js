import React from "react";
import WishItem from "./WishItem";

const consolidateList = items => {
    const list = {};
    items.map(item => list[item.id] = item)
        return Object.values(list);
}

const WishView = props => {
    const items = consolidateList([...props.wishItems]);

    return (
        <div className="border mt-3 p-2">
            <h5 className="border-bottom border-dark">Ønskeliste</h5>
            {items.map(item => {
                    return (
                        <WishItem
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            id={item.id}
                        />
                    );
            })}
        </div>
    );
}

export default WishView;
