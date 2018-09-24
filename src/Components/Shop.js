import React, { Component } from "react";

import ShopView from "./ShopView";
import CartView from "./CartView";
import WishView from "./WishView";
import Header from "./Header";
import Loader from "./Loader";

class Shop extends Component { 
    
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
        <Header />
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
                />
                {this.props.isLoading ? <Loader /> : null}
            </div>
            <div className="col-4">
                <CartView 
                    cartItems={this.props.cartItems}
                    removeItem={this.props.cartRemoveItem}
                />
                <WishView 
                    wishItems={this.props.wishItems}
                    wishAddItem={this.props.wishAddItem}
                    wishRemoveItem={this.props.wishRemoveItem}
                />
            </div>
        </div>
    </div>
    )}
}

export default Shop;
