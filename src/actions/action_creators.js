import * as Type from '../constants/action_types';

import { generatePrice } from './helper_functions/helper_functions';

//Syncronous actions
export const buyItem = id => {
    return {
        type: Type.BUY_ITEM,
        id,
    }
}
export const wishAddItem = id => {
    return {
        type: Type.WISH_ADD_ITEM,
        id
    }
}

export const wishRemoveItem = id => {
    return {
        type: Type.WISH_REMOVE_ITEM,
        id
    }
}

export const cartRemoveItem = id => {
    return {
        type: Type.CART_REMOVE_ITEM,
        id
    }
}

export const modalCloseHandler = () => {
    return {
        type: Type.MODAL_CLOSE_HANDLER
    }
}

export const fetchDataStart = () => {
    return {
        type: Type.FETCH_DATA_START
    }
}

export const fetchDataReceive = data => {
    return {
        type: Type.FETCH_DATA_RECEIVE,
        data
    }
}

export const fetchItemDataReceive = data => {
    return {
        type: Type.FETCH_ITEM_DATA_RECEIVE,
        data
    }
}

export const fetchDataFail = msg => {
    return {
        type: Type.FETCH_DATA_FAIL,
        error: msg
    }
}

export const itemSelectedHandler = id => {
    return {
        type: Type.ITEM_SELECTED_HANDLER,
        id
    }
}


//Asyncronous actions using middleware Thunk

export const requestData = () => {

    return (dispatch) => {

        dispatch(fetchDataStart());

        const url = "https://bgg-json.azurewebsites.net/hot";
        return fetch(url, {mode: "cors"})
            .then(response => {
                return response.json();
            }).then(data => {
                const games = data.slice(0, 10);
                generatePrice(games);
                dispatch(fetchDataReceive(games))
            }).catch(err => {
                console.log('Fetch error :-(', err);
                dispatch(fetchDataFail(err))
            })
    }
}

export const requestItemData = () => {

    return (dispatch, getState) => {
        dispatch(fetchDataStart());

        const gameId = getState().selectedItemId;
        const url = 'https://bgg-json.azurewebsites.net/thing/';

        return fetch(url + gameId, {mode: 'cors'})
        .then(response => {
            return response.json();
        }).then(data => {
            dispatch(fetchItemDataReceive(data))
        }).catch(err => {
            console.log('Fetch error :-(', err);
            dispatch(fetchDataFail(err))
        })
    }
}

