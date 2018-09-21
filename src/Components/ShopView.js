import React from "react";
import ShopItem from "./ShopItem";
import PropTypes from "prop-types";
import FlexList from "./FlexList";
import ItemInfo from "./ItemInfo/ItemInfo";
import Modal from './UI/Modal/Modal';

const ShopView = props => {
    let itemInfo;
    if (props.selectedItem) {
    itemInfo = <ItemInfo item={props.selectedItem} />
    }

    return (
    <div className="border mt-3 p-2">
        <h4 className="border-bottom">Board Games</h4>
        <Modal show={props.show} modalClosed={props.modalClosed}>
            {itemInfo}
        </Modal>
        <FlexList>
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
        </FlexList>
    </div>
)};

ShopView.propTypes = {
    shopItems: PropTypes.array.isRequired
}

export default ShopView;
