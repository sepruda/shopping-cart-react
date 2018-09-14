import React from "react";

import ShopView from "./ShopView";
import CartView from "./CartView";
import WishView from "./WishView";
import Header from "./Header";

const Shop = props => (
    <div className="container-fluid">
        <Header />
        <div className="row ">
            <div className="col-sm-8">
                <ShopView 
                    shopItems={props.shopItems}
                    buyShopItem={props.buyShopItem}
                    addItemToWish={props.addItemToWish}
                    />
            </div>
            <div className="col-4">
                <CartView cartItems={props.cartItems}/>
                <WishView wishItems={props.wishItems}/>
            </div>
        </div>
    </div>
);

export default Shop;
