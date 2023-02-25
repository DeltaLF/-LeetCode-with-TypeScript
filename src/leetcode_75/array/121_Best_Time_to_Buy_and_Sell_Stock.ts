/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices: number[]): number {
  /*
    Input: prices = [7,1,5,3,6,4]
                       l r
                      
     */
  if (prices.length <= 1) return 0;
  let l = 0;
  let r = 1;
  let max = Math.max(0, prices[r] - prices[l]);
  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      max = Math.max(max, prices[r] - prices[l]);
    } else {
      l = r;
    }
    r++;
  }
  return max;
}

var maxProfitOld = function (prices: number[]): number {
  if (prices.length <= 1) return 0;
  let maxProfit = 0;
  let minInd = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[minInd]) {
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

export { maxProfit };
