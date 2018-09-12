import React from "react";
import ShopList from "./ShopList";
import ShopItem from "./ShopItem";

// Fjern denne import, når du løser opgaven
// og ændr "items" i markup'en med en prop
import shopitems from "../data/shop_items";

const ShopView = props => (
    <div className="border mt-3 p-2">
        <h4 className="border-bottom">Bøger</h4>
        <ShopList>
            {/* -------items børe være en prop * --------*/}
            {shopitems.map(item => {
                return (
                    <ShopItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        author={item.author}
                        price={item.price}
                        subject={item.subject}
                        image={item.img}
                    />
                );
            })}
            {/* ------- items børe være en prop * --------*/}
        </ShopList>
    </div>
);

export default ShopView;
