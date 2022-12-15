/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n:number):number {
    // fib solution
    let a = 1;
    let b = 1;
    while(n > 1){
        // b = b + a;
        // a = old b = b - a;
        a = (b += a) - a
        n--;
    }
    return b;
};

var climbStairsDP = function(n:number):number {
    const combinations = [0,1,2];
    if(n > 2){
        for(let i=3; i <=n;i++){
            combinations[i] = combinations[i-1] + combinations[i-2];
        }
    } 
    return combinations[n];     
};
export {climbStairs};