function arraySign(nums: number[]): number {
  /*
    Input: nums = [-1,-2,-3,-4,3,2,1]
    Output: 1
     */
  const res = nums.reduce((pre, cur) => {
    const product = pre * cur;
    if (product === 0) return 0;
    if (product > 0) return 1;
    return -1;
  }, 1);
  return res;
}

export { arraySign };
