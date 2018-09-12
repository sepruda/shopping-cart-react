import React from "react";

const ShopItem = props => (
    <div className="card-group p-2 " style={{ width: "11rem" }}>
        <div className="card">
            <img
                className="card-img-top"
                height="190"
                src={props.image}
                alt="cover"
            />
            <div className="card-body p-2">
                <div className="text-center">
                    <button
                        className="btn btn-link btn-sm"
                        onClick={props.addItemToWish}
                    >
                        Ønskeliste
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
                        onClick={props.buyItem}
                    >
                        Køb
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default ShopItem;
