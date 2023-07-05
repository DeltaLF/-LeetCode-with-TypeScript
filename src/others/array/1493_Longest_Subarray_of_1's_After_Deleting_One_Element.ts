function longestSubarray(nums: number[]): number {
  /*
    Input: nums = [1,1,0,1] Output: 3
    Input: nums = [0,1,1,1,0,1,1,0,1] Output: 5
    Input: nums = [1,1,1] output: 2

    l 
    r
     */
  let l = 0,
    r = 0,
    m = -1,
    max = 0;
  while (r < nums.length) {
    if (nums[r] === 1) {
    } else {
      if (m < l) {
        m = r + 1;
      } else {
        l = m;
        m = r + 1;
      }
    }
    r++;
    max = Math.max(max, r - l - 1);
  }
  return max;
}

export { longestSubarray };
