import React from "react";

import './ShopItem.css';

const ShopItem = props => {

    return (
    <div className="card-group p-2" style={{width: "14rem"}}>
        <div className="card" >
            <div className="card-header">
                {props.title}
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
                <div className="text-center">
                    <button
                        className="btn btn-link btn-sm"
                        onClick={() => {props.wishAddItem(props.id)}}
                    >
                        Wish list
                    </button>
                </div>
                <p className="card-text">
                    <small>{props.author}</small>
                </p>
            </div>

            <div className="card-footer p-2 bg-white border-0 ">
                <div className="text-right">
                    <span>
                        <strong>kr. {props.price}</strong>
                    </span>
                </div>
            </div>
            <div className="card-footer p-2">
                <div>
                    <button
                        className="btn btn-primary btn-sm btn-block"
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
