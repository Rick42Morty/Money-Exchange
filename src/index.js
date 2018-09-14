// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency <= 0) {
        return {};
    }

    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    
    var change = {};
    var H, Q, D, N, P;

    H = Math.floor(currency/50);
    Q = Math.floor((currency - 50*H)/25);
    D = Math.floor((currency - 50*H - 25*Q)/10);
    N = Math.floor((currency - 50*H - 25*Q - 10*D)/5);
    P = currency - 50*H - 25*Q - 10*D - 5*N;

    if (H) change.H = H;  
    if (Q) change.Q = Q; 
    if (D) change.D = D; 
    if (N) change.N = N; 
    if (P) change.P = P; 

    return change;
}
