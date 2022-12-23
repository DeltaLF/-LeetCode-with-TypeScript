/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices:number[]):number{
    const memoizedObj:{[key:string]:number} = {};
    function decision(day:number,canBuy:boolean):number{
        if(day >= prices.length) return 0;
        if(memoizedObj[day.toString()+canBuy.toString()] !== undefined){
            return memoizedObj[day.toString()+canBuy.toString()]
        }
        const stayCool = decision(day+1,canBuy);
        let buyOrSell:number;
        if(canBuy){
            buyOrSell = decision(day+1,false) - prices[day];
        }else{
            // sell, and day+1 must be cooldown
            buyOrSell = decision(day + 2, true) + prices[day];
        }
        const max = Math.max(stayCool, buyOrSell);
        memoizedObj[day.toString()+canBuy.toString()] = max;
        return max;
    }

    return decision(0, true);
}

var maxProfitTimeExceeded = function(prices:number[]):number {
    /*
    Input: prices = [1,2,3,0,2]
    Output: 3
    brute force:4^n
                        0     1    2     3
    there are 4 states buy, sell, cool, rest
    [0,1,2,3,3,4] + [100]
     b r r r r s 
    [1,2,3,1,4,5,1,2,3]
    */
   const currentMax:number[] = new Array(prices.length).fill(-Infinity);

   function decision(day:number,buy:number,sell:number):number{
    // return current profit
    // current state: 1: hold stock, 0: no stock
    if(day === prices.length ) return 0;
    if(buy > sell){ //hold stock, and value is the day we bought the stock
        const keepIt = decision(day+1,buy,sell);
        const sellIt = decision(day+1,buy, day) + prices[day] - prices[buy]; // update sell++++
        return Math.max(keepIt,sellIt);
    }else{
        let buyToday = -Infinity;
        if(day - sell > 1 || sell === -1){
            buyToday = decision(day+1, day,sell)  // update buy
        }
        const noMove = decision(day+1, buy,sell);
        return Math.max(buyToday, noMove);
    }
   }

   return  decision(0,-1,-1);
};

export { maxProfit }