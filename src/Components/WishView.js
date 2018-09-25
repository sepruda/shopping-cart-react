import React from "react";
import WishItem from "./WishView/WishItem";
import Backdrop from "./UI/Backdrop/Backdrop";

const consolidateList = items => {
    const list = {};
    items.map(item => list[item.gameId] = item)
        return Object.values(list);
}

const WishView = props => {
    const items = consolidateList([...props.wishItems]);
    
    return (
        <React.Fragment>
            <Backdrop show={props.showWish} clicked={props.modalClose}/>
            <div className="WishView"
            style={{
                transform: props.showWish ? 'translateY(0)': 'translate(100vh)',
                opacity: props.showWish ? '1' : '0'
            }}>
                { props.showWish ? 
                    <div>
                        <h5 className="border-bottom border-dark">Wish List</h5>
                        {items.map(item => {
                                return (
                                    <WishItem
                                        key={item.gameId}
                                        title={item.name}
                                        price={item.price}
                                        id={item.gameId}
                                        removeItem={props.wishRemoveItem}
                                        buyItem={props.buyWishItem}
                                    />
                                );
                        })}
                    </div> : null }
            </div>
        </React.Fragment>
    );
}

export default WishView;
