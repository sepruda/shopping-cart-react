import React, { Component } from "react";

import ShopView from "./ShopView";
import CartView from "./CartView/CartView";
import WishView from "./WishView";
import Header from "./Header/Header";
import Loader from "./Loader";

class Shop extends Component { 
    state = {
        showCart: false,
        showWish: false
    }

    showCartHandler = () => {
        this.setState({showCart: !this.state.showCart, showWish: false})
    }

    showWishHandler = () => {
        this.setState({showWish: !this.state.showWish, showCart: false})
    }
    
    componentDidMount() {
        this.props.requestData();
    }

    componentDidUpdate(prevProps) {      
        if (this.props.selectedItemId !== prevProps.selectedItemId) {
            this.props.requestItemData();
        }
    }

    render() {
        return (
    <div className="container-fluid">
        <Header 
            showModal={this.props.cartModalHandler}
            modalClosed={this.props.modalCloseHandler}
            toggleCart={this.showCartHandler}
            toggleWish={this.showWishHandler}
            cartItems={this.props.cartItems}
            wishItems={this.props.wishItems}
        />
        <div className="row ">
            <div className="col-sm-12">
                {this.props.error ? console.log(this.props.error) : null}
                <ShopView 
                    shopItems={this.props.shopItems}
                    buyShopItem={this.props.buyItem}
                    wishAddItem={this.props.wishAddItem}
                    clicked={this.props.itemSelectedHandler}
                    selectedItemId={this.props.selectedItemId}
                    selectedItem={this.props.selectedItem}
                    show={this.props.showModal}
                    modalClosed={this.props.modalCloseHandler}
                    isLoading={this.props.isLoading}
                />
                {this.props.isLoading ? <Loader /> : null}
            </div>
                <WishView 
                    wishItems={this.props.wishItems}
                    wishAddItem={this.props.wishAddItem}
                    wishRemoveItem={this.props.wishRemoveItem}
                    buyWishItem={this.props.buyItem}
                    showWish={this.state.showWish}
                    showCart={this.state.showCart}
                    modalClose={this.showWishHandler}
                />
                <CartView 
                    cartItems={this.props.cartItems}
                    removeItem={this.props.cartRemoveItem}
                    show={this.props.showModal}
                    modalClose={this.showCartHandler}
                    showCart={this.state.showCart}
                    showWish={this.state.showWish}
                />  
        </div>
    </div>
    )}
}

export default Shop;
