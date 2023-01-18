function maxSubarraySumCircular(nums: number[]): number {
  let currMax = nums[0];
  let max = nums[0];
  let currMin = nums[0];
  let min = nums[0];
  let total = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    // either reset from now or add
    currMax = Math.max(currMax + num, num);
    max = Math.max(max, currMax);
    currMin = Math.min(currMin + num, num);
    min = Math.min(min, currMin);
    total += num;
  }
  if (total === min) return max;
  return Math.max(max, total - min);
}
function maxSubarraySumCircularNotOptimized(nums: number[]): number {
  /*
    [ a, b, c, d, e, f]
    max might be inside original array
    [ a,b,c,d]
    or might be circular
    [ a,b,c,d, |e,f,a,b,c| ,d,e]
    equivalent to => [ a, b, c,| d, | e, f ]  where between || is minSubArray
    */
  function findExtremeSubArray(nums: number[], isMax: 1 | -1 = 1): number {
    if (nums.length === 1) return nums[0];
    let l = 0;
    let r = 0;
    let sum = nums[r];
    let ans = sum;
    while (l < nums.length - 1) {
      if (sum * isMax > 0 && r + 1 < nums.length) {
        r++;
        sum += nums[r];
      } else {
        if (l === r && r < nums.length - 1) {
          sum -= nums[l];
          r++;
          l++;
          sum += nums[r];
        } else {
          sum -= nums[l];
          l++;
        }
      }
      ans = isMax === 1 ? Math.max(ans, sum) : Math.min(ans, sum);
    }
    return ans;
  }

  const max = findExtremeSubArray(nums, 1);
  const min = findExtremeSubArray(nums, -1);
  const sum = nums.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
  if (sum === min) return max;
  return Math.max(max, sum - min);
}

export { maxSubarraySumCircular };
