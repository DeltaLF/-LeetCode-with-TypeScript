function minEatingSpeed(piles: number[], h: number): number {
  /*
    Input: piles = [3,6,7,11], h = 8
    Output: 4
    Input: piles = [30,11,23,4,20], h = 5
    Output: 30
    Input: piles = [30,11,23,4,20], h = 6
    Output: 23


       1  < output < max(piles)
                             (h === piles)
    since output is integer between 1, max =>[1,2,3...max] is a sorted array => we can use binary search
    
    complexity anaylsis:
    assume piles.length === n
    Math.max(...piles) = m
    isFinishInTime takes O(n)
    binary search between 1 m takes O(logm)
    total: O(nlogm)
     */
  let l = 1;
  let r = Math.max(...piles);
  let m = Math.floor((l + r) / 2);
  function isFinishInTime(k: number): boolean {
    const totalTime = piles.reduce((prev, curr) => {
      return prev + Math.ceil(curr / k);
    }, 0);
    return totalTime <= h;
  }
  let minK = r;
  while (l <= r) {
    if (isFinishInTime(m)) {
      // we can try less k
      minK = Math.min(minK, m);
      r = m - 1;
    } else {
      l = m + 1;
    }
    m = Math.floor((l + r) / 2);
  }
  return minK;
}

export { minEatingSpeed };
