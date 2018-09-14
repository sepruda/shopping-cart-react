import React from "react";
import ShopList from "./FlexList";
import ShopItem from "./ShopItem";
import PropTypes from "prop-types";
import FlexList from "./FlexList";

const ShopView = props => (
    <div className="border mt-3 p-2">
        <h4 className="border-bottom">Bøger</h4>
        <FlexList>
            {props.shopItems.map(item => {
                return (
                    <ShopItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        author={item.author}
                        price={item.price}
                        subject={item.subject}
                        image={item.img}
                        buyShopItem={props.buyShopItem}
                        addItemToWish={props.addItemToWish}
                    />
                );
            })}
        </FlexList>
    </div>
);

ShopView.propTypes = {
    items: PropTypes.array.isRequired
}

export default ShopView;
