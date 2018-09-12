import React from "react";

import ShopView from "./ShopView";
import CartView from "./CartView";
import WishView from "./WishView";

const Shop = props => (
    <div className="row ">
        <div className="col-sm-8">
            <ShopView />
        </div>
        <div className="col-4">
            <CartView />
            <WishView />
        </div>
    </div>
);

export default Shop;
