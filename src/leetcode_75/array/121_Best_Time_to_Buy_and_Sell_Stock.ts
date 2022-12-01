/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices:number[]):number {
    if(prices.length <= 1) return 0
    let maxProfit = 0;
    let minInd = 0;
    for(let i =1; i< prices.length;i++){
        if(prices[i] < prices[minInd]){
            minInd = i;
            continue;
        }
        maxProfit = Math.max(maxProfit, prices[i] - prices[minInd]);
    }    



    return maxProfit;

 
    /* brute-force: time limit exceeded
    let maxProfit = 0;
    
      [5, 3 , 1, 6]
             min
                max
    
    for(let minInd=0;minInd < prices.length-1 ;minInd++){
        for(let maxInd = minInd+1; maxInd < prices.length;maxInd++){
            maxProfit = Math.max(prices[maxInd] - prices[minInd], maxProfit);
        }
    }
    return maxProfit
    */ 
    
};

export {maxProfit}