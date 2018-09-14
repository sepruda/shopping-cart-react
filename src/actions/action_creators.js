import * as Type from '../constants/action_types';

export const buyShopItem = id => {
    return {
        type: Type.SHOP_BUY_ITEM,
        id
    }
}
export const addItemToWish = id => {
    return {
        type: Type.SHOP_ADD_ITEM_TO_WISHLIST,
        id
    }
}

