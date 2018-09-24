// import items from "../data/shop_items"; 
import { FILTER, 
        BUY_ITEM, 
        WISH_ADD_ITEM, 
        CART_REMOVE_ITEM, 
        CART_SHOW_MODAL,
        FETCH_DATA_START, 
        FETCH_DATA_RECEIVE, 
        FETCH_DATA_FAIL, 
        ITEM_SELECTED_HANDLER, 
        FETCH_ITEM_DATA_RECEIVE, 
        MODAL_CLOSE_HANDLER,
        WISH_REMOVE_ITEM} from "../constants/action_types";

const initialState = {
    filter: FILTER.ALL,
    shop: {
        cartItems: [],
        wishItems: [],
        shopItems: []
    },
    isLoading: false,
    error: null,
    selectedItemId: null,
    selectedItem: null,
    showModal: false,
}

export const shop_reducer = (state = initialState.shop, action) => {
    let currentItem = {};
    let index = null;

    switch (action.type) {
        case BUY_ITEM:
            currentItem = state.shopItems.filter(item => item.gameId === action.id)
            return {...state, cartItems: [...state.cartItems, ...currentItem]};
        case WISH_ADD_ITEM:
            currentItem = state.shopItems.filter(item => item.gameId === action.id)
            if (state.wishItems.some(item => item.gameId === currentItem[0].gameId)) {
                return state;
            } else {
                return {...state, wishItems: [...state.wishItems, ...currentItem]}; 
            }
        case WISH_REMOVE_ITEM:
            index = state.wishItems.findIndex(item => item.gameId === action.id);
            const new_wish_list = [...state.wishItems];
            new_wish_list.splice(index, 1);
            return {...state, wishItems: [...new_wish_list]};
        case CART_REMOVE_ITEM:
            index = state.cartItems.findIndex(item => item.gameId === action.id);
            const new_cart_list = [...state.cartItems];
            new_cart_list.splice(index, 1);
            return {...state, cartItems: [...new_cart_list]};
        case CART_SHOW_MODAL:
            return {...state, showModal: !state.showModal}
        case ITEM_SELECTED_HANDLER:
            return {...state, selectedItemId: action.id, showModal: true};
        case MODAL_CLOSE_HANDLER:
            return {...state, showModal: false, selectedItem: null}
        case FETCH_DATA_START:
            return {...state, isLoading: true};
        case FETCH_DATA_RECEIVE:
            return {...state, shopItems: action.data, isLoading: false};
        case FETCH_ITEM_DATA_RECEIVE:
            return {...state, selectedItem: action.data, isLoading: false, showModal: true}
        case FETCH_DATA_FAIL:
            return {...state, isLoading: false, error: action.msg}
            default:
            return state;
    }
}

// export const filter_reducer = (state. initialState.filter, action) => {
//     return state;
// }