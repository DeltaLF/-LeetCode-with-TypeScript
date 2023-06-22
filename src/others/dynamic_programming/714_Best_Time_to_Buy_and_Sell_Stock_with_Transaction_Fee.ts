function maxProfit(prices: number[], fee: number): number {
  /*
      Input: prices = [1,3,2,8,4,9], fee = 2
      Output: 8
       */
  const N = prices.length;
  const memo = new Map<string, number>();
  function strategy(day = 0, canBuy = true): number {
    if (day >= N) return 0;
    const key = `${day}_${canBuy}`;
    if (memo.has(key)) return memo.get(key)!;
    let buy = 0;
    let sell = 0;
    // buy or sell
    if (canBuy) {
      buy = strategy(day + 1, false) - prices[day];
    } else {
      sell = strategy(day + 1, true) + prices[day] - fee;
    }
    // hold
    const hold = strategy(day + 1, canBuy);
    const max = Math.max(buy, sell, hold);
    memo.set(key, max);
    return max;
  }
  return strategy();
}

function maxProfitBadAlloc(prices: number[], fee: number): number {
  /*
    Input: prices = [1,3,2,8,4,9], fee = 2
    Output: 8
     */
  const N = prices.length;
  const memo = new Map<string, number>();
  function strategy(day = 0, boughtDay = -1): number {
    if (day >= N) return 0;
    const key = `${day}_${boughtDay}`;
    if (memo.has(key)) return memo.get(key)!;
    let buy = 0;
    let sell = 0;
    // buy or sell
    if (boughtDay < 0) {
      // buy
      buy = strategy(day + 1, day);
    } else {
      sell = strategy(day + 1, -1) + prices[day] - prices[boughtDay] - fee;
      boughtDay = -1;
    }
    // hold
    const hold = strategy(day + 1, boughtDay);
    const max = Math.max(buy, sell, hold);
    memo.set(key, max);
    return max;
  }
  return strategy();
}

export { maxProfit };
