function minSubArrayLen(target: number, nums: number[]): number {
  /*
      Input: target = 7, nums = [2,3,1,2,4,3] Output: 2
      Input: target = 4, nums = [1,4,4] Output: 1
      Input: target = 11, nums = [1,1,1,1,1,1,1,1] Output: 0
       */
  let l = 0;
  let r = 0;
  let sum = 0;
  let min = Infinity;
  while (r < nums.length || sum >= target) {
    if (sum < target && r < nums.length) {
      sum += nums[r];
      r++;
    } else {
      sum -= nums[l];
      l++;
    }
    if (sum >= target) min = Math.min(min, r - l);
  }

  return Number.isFinite(min) ? min : 0;
}

export { minSubArrayLen };
