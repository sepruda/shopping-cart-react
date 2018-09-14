import items from "../data/shop_items"; 
import { FILTER, SHOP_BUY_ITEM, SHOP_ADD_ITEM_TO_WISHLIST } from "../constants/action_types";

const initialState = {
    filter: FILTER.ALL,
    shop: {
        cartItems: [],
        wishItems: [],
        shopItems: [...items]
    }
}

export const shop_reducer = (state = initialState.shop, action) => {
    let currentItem = {};

    switch (action.type) {
        case SHOP_BUY_ITEM:
            currentItem = state.shopItems.filter(item => item.id == action.id)
            return {...state, cartItems: [...state.cartItems, ...currentItem]};
        case SHOP_ADD_ITEM_TO_WISHLIST:
            currentItem = state.shopItems.filter(item => item.id == action.id)
            return {...state, wishItems: [...state.wishItems, ...currentItem]};
        default:
            return state;
    }
}

// export const filter_reducer = (state. initialState.filter, action) => {
//     return state;
// }