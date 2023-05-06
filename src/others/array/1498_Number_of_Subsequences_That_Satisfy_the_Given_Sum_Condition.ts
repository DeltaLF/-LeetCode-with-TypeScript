function numSubseq(nums: number[], target: number): number {
  /*
        [3,5,6,7]
        target 10
        for those < 5 => all available 
        sort first
        start from 3 Binary Search for target-3 example: 7  length:4 combination:  (4-1)^2 => we must take 3 any other number are optional
        start from 5 Binary Search for (target-5) :only 5   length:1 combination: 1 => only take 5
        */
  const MODULE = 10 ** 9 + 7;
  nums.sort((a, b) => a - b);
  let count = 0;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    if (nums[l] + nums[r] > target) {
      r--;
    } else {
      count =
        (count + Number(BigInt(BigInt(2) ** BigInt(r - l)) % BigInt(MODULE))) %
        MODULE;
      l++;
    }
  }

  return count;
}
function numSubseqBadAlloc(nums: number[], target: number): number {
  /*
    Input: nums = [3,5,6,7], target = 9
    Output: 4
    Explanation: There are 4 subsequences that satisfy the condition.
    [3] -> Min value + max value <= target (3 + 3 <= 9)
    [3,5] -> (3 + 5 <= 9)
    [3,5,6] -> (3 + 6 <= 9)
    [3,6] -> (3 + 6 <= 9)
    
    Input: nums = [3,3,6,8], target = 10
    Output: 6
    Explanation: There are 6 subsequences that satisfy the condition. (nums can have repeated numbers).
    [3] , [3] , [3,3], [3,6] , [3,6] , [3,3,6]


    [3,3,6,8]
    0 [3,6,8] + 3 [3,6,8]
    consideer [3,6,8]
    0 + [6,8] + 3 [6,8]    
    consider [6,8]
    0 + [8]  6 [8]   1+1
    [8]
    0+[]   x8+[]

    if target:15
    [8]: 0
    but [1,8] =>2
    is it really DP?
    nums length: 10^5 => 

     */

  const MODULE = 10 ** 9 + 7;
  const memoMap = new Map<string, number>();
  function numSub(i = 0, min = 0, max = 0): number {
    if (i >= nums.length) {
      return min + max <= target && min > 0 && max > 0 ? 1 : 0;
    }
    const hash = `${i}_${min}_${max}`;
    if (memoMap.has(hash)) return memoMap.get(hash)!;
    // not take
    const notTake = numSub(i + 1, min, max) % MODULE;
    // take
    if (min === 0) min = nums[i];
    const take =
      numSub(i + 1, Math.min(min, nums[i]), Math.max(max, nums[i])) % MODULE;
    memoMap.set(hash, (take + notTake) % MODULE);
    return memoMap.get(hash)!;
  }
  return numSub();
}
export { numSubseq };
