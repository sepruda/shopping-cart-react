import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import PropTypes from "prop-types";
import ItemInfo from "./ItemInfo/ItemInfo";
import Modal from './UI/Modal/Modal';
import Loader from './Loader';

const ShopView = props => {
    
    let itemInfo;
    if (props.selectedItem) {
    itemInfo = 
        <ItemInfo 
            item={props.selectedItem} 
            wishAddItem={props.wishAddItem}
            buyShopItem={props.buyShopItem}
        />
    }

    return (
    <div className="border mt-3 p-2">
        <h4 className="border-bottom p-2">Popular Board Games</h4>
        <Modal show={props.show} modalClosed={props.modalClosed}>
            {itemInfo}
            {props.isLoading ? <Loader /> : null}
        </Modal>
        <div className="card-group">
            {props.shopItems.map(item => {
                return (
                    <ShopItem
                        id={item.gameId}
                        key={item.gameId}
                        title={item.name}
                        price={item.price}
                        image={item.thumbnail}
                        buyShopItem={props.buyShopItem}
                        wishAddItem={props.wishAddItem}
                        clicked={props.clicked}
                    />

                );
            })}
        </div>
    </div>
)};

ShopView.propTypes = {
    shopItems: PropTypes.array.isRequired
}

export default ShopView;
