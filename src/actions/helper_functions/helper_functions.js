export const generatePrice = (games) => {
    const prices = [519, 269, 249, 849, 549, 199, 299, 499, 399, 
        649, 599, 449, 1199, 249, 269, 299, 399, 399];
    
    games.map(game => {
        return game.price = prices[Math.floor(Math.random() * prices.length)];
    });
    console.log(games);
    
}