import React from "react";

import './ShopItem.css';

const ShopItem = props => {

    return (
    <div className="card-group p-2" style={{width: "14rem"}}>
        <div className="card">
            <div className="card-header text-center">
                <h5>{props.title}</h5>
            </div>
            <img
                className="card-img-top"
                src={props.image}
                alt="cover"
                onClick={() => {
                    props.clicked(props.id)}}
                style={{objectFit: "contain", objectPosition: "0, 0"}}
            />
            <div className="card-body p-2">
                    <button
                        className="btn btn-inline btn-outline-info btn-sm"
                        onClick={() => {props.wishAddItem(props.id)}}
                    >
                        Wish list
                    </button>
                    <button 
                        className="btn btn-inline btn-outline-warning btn-sm float-right"
                        onClick={() => {props.clicked(props.id)}}
                    >
                        Info
                    </button>
            </div>
            

            <div className="card-footer p-2 bg-white border-0 ">
                <div className="text-right">
                    <span>
                        <strong>DKK {props.price}</strong>
                    </span>
                </div>
            </div>
            <div className="card-footer p-2">
                <div>
                    <button
                        className="btn btn-success btn-sm btn-block"
                        onClick={() => {props.buyShopItem(props.id);}
                    }
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
)};

export default ShopItem;
