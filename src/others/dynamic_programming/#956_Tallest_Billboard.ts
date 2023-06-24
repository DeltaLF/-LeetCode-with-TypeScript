function tallestBillboard(rods: number[]): number {
  let dp = new Map<number, number>(); // dp[diff] = tall
  dp.set(0, 0);

  for (const rod of rods) {
    const newDp = new Map(dp);
    for (const [diff, tallLen] of dp.entries()) {
      const shortLen = tallLen - diff;
      // add to tall
      const maxLenTall = newDp.get(diff + rod) ? newDp.get(diff + rod)! : 0;
      newDp.set(diff + rod, Math.max(maxLenTall, tallLen + rod));
      // add to short
      const maxLenShort = newDp.get(Math.abs(diff - rod))
        ? newDp.get(Math.abs(diff - rod))!
        : 0;
      newDp.set(
        Math.abs(diff - rod),
        Math.max(maxLenShort, rod + shortLen, tallLen)
      );
    }
    dp = newDp;
  }
  return dp.get(0)!;
}

function tallestBillboardBadAlloc(rods: number[]): number {
  /*
      1 <= rods.length <= 20
      1 <= rods[i] <= 1000
      sum(rods[i]) <= 5000
      Input: rods = [1,2,3,6]
      Output: 6
      Input: rods = [1,2,3,4,5,6]
      Output: 10
  
      brute force:
      there are 3 possibilites for every rod 
      1. group I 2. group II 3. not take
      3**20 / 2 
  
      according to restriction 
        0 <= output <= 2500
      if we have isValid(singleRodLength) 
      we can use binary search
  
       */
  const sum = rods.reduce((prev, curr) => prev + curr, 0);
  const memo = new Map<string, boolean>();
  let max = 0;
  function permutation(i = 0, gILen = 0, gIILen = 0) {
    if (gIILen === gILen) max = Math.max(max, gILen);
    if (rods.length === i || gILen > sum / 2 || gIILen > sum / 2) return;
    const key = `${i}_${gILen}_${gIILen}`;
    if (memo.get(key)) return;
    // put in group I
    permutation(i + 1, gILen + rods[i], gIILen);
    // put in group II
    permutation(i + 1, gILen, gIILen + rods[i]);
    // not take
    permutation(i + 1, gILen, gIILen);
    memo.set(key, true);
  }
  permutation();
  return max;
}
export { tallestBillboard };
