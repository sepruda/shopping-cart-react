import Shop from "../Components/Shop";
import { connect } from 'react-redux';
import { buyItem, 
        wishAddItem, 
        cartRemoveItem, 
        requestData, 
        itemSelectedHandler, 
        requestItemData, 
        modalCloseHandler } from "../actions/action_creators";

const mapStateToProps = state => {
    return {
        filter: state.filter,
        shopItems: state.shopItems,
        cartItems: state.cartItems,
        wishItems: state.wishItems,
        isLoading: state.isLoading,
        error: state.error,
        selectedItemId: state.selectedItemId,
        selectedItem: state.selectedItem,
        showModal: state.showModal
        }
}


const mapDispatchToProps = dispatch => {
    return {
        buyItem: id => dispatch(buyItem(id)),
        wishAddItem: id => dispatch(wishAddItem(id)),
        cartRemoveItem: id => dispatch(cartRemoveItem(id)),
        requestData: () => dispatch(requestData()),
        requestItemData: () => dispatch(requestItemData()),
        itemSelectedHandler: id => dispatch(itemSelectedHandler(id)),
        modalCloseHandler: () => dispatch(modalCloseHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)