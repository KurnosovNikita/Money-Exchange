// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var p=0, n=0, d=0, q=0 ,h=0;
    var money = {};    
    
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if(currency <= 0){
        return {};
    } else {
        if(~~(currency / 50) > 0){
                h = Math.floor(currency / 50);
                currency-=(h * 50);
                money.H = h;
            }
        if(~~(currency / 25) > 0){
                q = Math.floor(currency / 25);
                currency-=(q * 25);
                money.Q = q;
            }
        if(~~(currency / 10) > 0){
                d =  Math.floor(currency / 10);
                currency-=(d * 10);
                money.D = d;
            }
        if(~~(currency / 5) > 0){
                n =  Math.floor(currency / 5);
                currency-=(n * 5);
                money.N = n;
            }
        if(~~(currency / 1) > 0){
                p =  Math.floor(currency / 1);
                currency-=(p * 1);
                money.P = p;
        }
        return money;
    }
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
