import Shop from "../Components/Shop";
import { connect } from 'react-redux';
import { buyShopItem, addItemToWish } from "../actions/action_creators";

const mapStateToProps = state => {
    return {
        filter: state.filter,
        shopItems: state.shopItems,
        cartItems: state.cartItems,
        wishItems: state.wishItems
        }
}


const mapDispatchToProps = dispatch => {
    return {
        buyShopItem: id => dispatch(buyShopItem(id)),
        addItemToWish: id => dispatch(addItemToWish(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)