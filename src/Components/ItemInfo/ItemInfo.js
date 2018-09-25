import React from 'react';

import './ItemInfo.css';

const itemInfo = (props) => {  
    
    let description = props.item.description
        .replace(/&#10;/gm, '\n')
        .replace(/(&ldquo;)|(&rdquo;)|(&quot;)/gm, '"')
        .replace(/&rsquo;/gm, "'" )
        .replace(/&mdash;/gm, "— ")
        .replace(/&hellip;/gm, "... ")
        .replace(/&bull;/gm, '•')
        .replace(/&ouml;/gm, 'ö')
        .replace(/&szlig;/gm, 'ß')
        .replace(/&auml;/gm, 'ä')
        .replace(/&uuml;/gm, 'ü');

    return (
    <div className="item">
        <img src={props.item.image} alt="game cover" />
        <button 
            className="btn btn-inline btn-success btn-sm float-right m-2"
            onClick={() => props.buyShopItem(props.item.gameId)}
        >
            Buy
        </button>
        <button 
            className="btn btn-inline btn-outline-info btn-sm float-right m-2"
            onClick={() => props.wishAddItem(props.item.gameId)}
        >
            Wish List
        </button>
        <h2>{props.item.name}<span style={{fontSize: "0.6em"}}> ({props.item.yearPublished})</span></h2>
        <ul>
            <li>Players: {props.item.minPlayers}-{props.item.maxPlayers}</li>
            <li>Playing Time: {props.item.playingTime} minutes</li>
            <li>Rating: {props.item.averageRating.toFixed(1)}</li>
        </ul>
        <h5>Description:</h5>
        <pre className="Description">{description}</pre>
        <h5>Publishers: </h5>
        {props.item.publishers.join(", ")}
    </div>
    );
};

export default itemInfo;