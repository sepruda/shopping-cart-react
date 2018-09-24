import React from "react";
import CartItem from "./CartItem";


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
        <div className="border mt-3 p-2">
            <h5 className="border-bottom border-dark">Kurv</h5>
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
                    <strong>Total: kr. {total.toFixed(2)}</strong>
                </div>
        </div>
    );
}
export default CartView;
