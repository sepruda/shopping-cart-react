import React from "react";

const ShopItem = props => (
    <div className="card-group p-2 " style={{ width: "13rem" }}>
        <div className="card">
            <img
                className="card-img-top"
                // height="160px"
                src={props.image}
                alt="cover"
                onClick={() => {props.clicked(props.id)}}
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
                <h5 className="card-title">
                    <small>{props.title}</small>
                </h5>
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
                <div className="text-right">
                    <button
                        className="btn btn-primary btn-sm btn-block"
                        onClick={() => {props.buyShopItem(props.id)}}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default ShopItem;
