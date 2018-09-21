import React from 'react';

import './ItemInfo.css';

const itemInfo = ({item}) => {  
    
    let description = item.description
        .replace(/&#10;/gm, '\n')
        .replace(/(&ldquo;)|(&rdquo;)|(&quot;)/gm, '"')
        .replace(/&rsquo;/gm, "'" )
        .replace(/&mdash;/gm, "— ")
        .replace(/&hellip;/gm, "... ");

    return (
    <div className="item">
        <img src={item.image} alt="game cover" />
        <button className="BuyButton">Buy</button>
        {/* Price: Use an array of plausible prices that is allocated to each game on render */}
        <h2>{item.name}<span style={{fontSize: "0.6em"}}> ({item.yearPublished})</span></h2>
        <ul>
            <li>Players: {item.minPlayers}-{item.maxPlayers}</li>
            <li>Playing Time: {item.playingTime} minutes</li>
            <li>Rating: {item.averageRating.toFixed(1)}</li>
        </ul>
        <h5>Description:</h5>
        <pre className="Description">{description}</pre>
        {/* Use regex to clean html text */}
        <h5>Publishers: </h5>
        {item.publishers.join(", ")}
    </div>
)};

export default itemInfo