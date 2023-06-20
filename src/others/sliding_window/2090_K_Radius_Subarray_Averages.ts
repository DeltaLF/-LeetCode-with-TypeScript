function getAverages(nums: number[], k: number): number[] {
  /*
    Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
    Output: [-1,-1,-1,5,4,4,-1,-1,-1]
     */
  let l = -k;
  let r = k;
  let sum = 0;
  for (let i = 0; i < r; i++) {
    sum += nums[i];
  }
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[r] !== undefined) sum += nums[r];
    if (l < 0 || r >= nums.length) {
      res.push(-1);
    } else {
      res.push(Math.floor(sum / (2 * k + 1)));
    }
    if (nums[l] !== undefined) sum -= nums[l];
    l++;
    r++;
  }
  return res;
}

export { getAverages };
