import React from "react";
import CartItem from "../CartItem";

import './CartView.css';
import Backdrop from "../UI/Backdrop/Backdrop";

const consolidateList = items => {
    const list = {};
    items.map(item => {
        if (list[item.gameId]) {
            return list[item.gameId].quantity++;
        } else {
            list[item.gameId] = item;
            return list[item.gameId].quantity = 1;
        }
    });
    return Object.values(list);
};

const getTotal = items => {
    const total = items.reduce((tot, item) => {
        return tot + parseFloat(item.price) * item.quantity;
    }, 0);
    return total;
};

const CartView = props => {
    const items = consolidateList([...props.cartItems]);
    const total = getTotal(items);

    return (
            <React.Fragment>
            <Backdrop show={props.showCart} clicked={props.modalClose} />
            <div className="CartView"
            style={{
                transform: props.showCart ? 'translateY(0)': 'translate(100vh)',
                opacity: props.showCart ? '1' : '0'}}
            >
                { props.showCart ? 
                    <div>
                        <h5 className="border-bottom border-dark">Cart</h5>
                            {items.map(item => {
                                return (
                                    <CartItem 
                                        key={item.gameId}
                                        title={item.name}
                                        price={item.price}
                                        id={item.gameId}
                                        quantity={item.quantity}
                                        removeItem={props.removeItem}
                                    />
                                );
                            })}
                            <div className="text-right border-top">
                                <strong>Total: DKK {total.toFixed(2)}</strong>
                            </div>
                    </div>
                
                 : null}
            </div>
            </React.Fragment>
    );
}
export default CartView;
