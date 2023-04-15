function maxValueOfCoins(piles: number[][], k: number): number {
  const memo: number[][] = [];
  for (let i = 0; i < piles.length; i++) {
    // n + 1 for convent comparison
    memo[i] = [];
  }
  function pickCoin(i = 0, quota = k): number {
    // k-1 means start consider from pick one coin
    if (i >= piles.length || quota === 0) return 0;
    if (memo[i][quota] !== undefined) return memo[i][quota];
    let cur = 0;
    let max = pickCoin(i + 1, quota);
    for (let j = 0; j < Math.min(piles[i].length, quota); j++) {
      cur += piles[i][j];
      max = Math.max(max, cur + pickCoin(i + 1, quota - j - 1));
    }
    memo[i][quota] = max;
    return max;
  }

  return pickCoin();
}

function maxValueOfCoinsFailed(piles: number[][], k: number): number {
  /*
Input: piles = [[7,8,9],[5,4,3],[1,100,3]], k = 2
Output: 101
    40   70      1
    9     1    100
    5     3      3
    i=0~i pile , k: pick k element
          consider 0~1
     i=0 i=1
  0  54   74(54vs74)
  1  14   14(14vs4)
k=2   5    5(5vs3) 

memo:
[
    [0,0,...                                            0]   //          0   pile
    [(0 quota left), (one quota left),...(k-1 quota left)],  // consider 1   pile
    [(0 quota left), (one quota left),...(k-1 quota left)],  // consider 1~2 piles
    ...
    [(0 quota left), (one quota left),...(k-1 quota left)],  // consider 1~n piles
]
    */
  const memo: number[][] = [];
  for (let i = 0; i <= piles.length; i++) {
    // n + 1 for convent comparison
    memo[i] = Array(k).fill(0);
  }
  function pickCoin(i = 1, quota = k - 1): void {
    // k-1 means start consider from pick one coin
    if (i >= piles.length || quota < 0) return;
    let cur = 0;
    let currInd = 0;
    for (let j = quota; j >= 0; j--) {
      // j means how many quota left
      // k-j=> coin picked count
      if (k - j > piles[i - 1].length) cur += piles[i - 1][currInd];
      currInd++;
    }
  }

  pickCoin();
  return memo[piles.length][0];
}
function maxValueOfCoinsHorizontalDP(piles: number[][], k: number): number {
  /*
    Input: piles = [[100],[100],[100],[100],[100],[100],[1,1,1,1,1,1,700]], k = 7
    Output: 706 
    n<=1000 (n piles)
    piles[i][j] <= 10^5 conin denominations
    k, total conin cout <= 2000
    DP?

    p=[0,0,0,...] add ind while we decide to pick a coin from ith pile => we need O(n) space for every state
    with do memoized we only need to iterate through each coin once
    space: O(n*n*k)

    */

  const recordInit = Array(piles.length).fill(-1);
  //   const memoizedObj: Record<string, number> = {};
  const memoizedObj = new Map<string, number>();
  function pickCoin(quota = k, record = recordInit): number {
    if (quota === 0) return 0; // run out of quota
    if (memoizedObj.has(`${quota}_${record.join("_")}`))
      return memoizedObj.get(`${quota}_${record.join("_")}`)!;
    // if (memoizedObj[`${quota}_${record.join("_")}`] !== undefined)
    //   return memoizedObj[`${quota}_${record.join("_")}`];
    // try all possibility
    let max = 0;
    for (let i = 0; i < piles.length; i++) {
      // try every piles
      if (record[i] < piles[i].length - 1) {
        // there still coin left
        const pickI =
          pickCoin(
            quota - 1,
            record.map((pileInd, ind) => {
              return ind === i ? pileInd + 1 : pileInd;
            })
          ) + piles[i][record[i] + 1]; // record start from -1
        max = Math.max(max, pickI);
      }
    }
    memoizedObj.set(`${quota}_${record.join("_")}`, max);
    // memoizedObj[`${quota}_${record.join("_")}`] = max;
    return max;
  }
  return pickCoin();
}

export { maxValueOfCoins };
