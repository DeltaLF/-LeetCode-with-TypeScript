function threeSumClosest(nums: number[], target: number): number {
  /*
      Input: nums = [-1,2,1,-4], target = 1
      Output: 2
  
      if we sort first then brutue force: O(nlong + n^3)
      [-4, -1, 1, 2]
      [a,b,c,d,e,f,g...]
      ab, c~z
      ac d~z
      but with sorted array, we can terminate early
    */
  nums.sort((a, b) => a - b);
  let ans = Infinity;
  const n = nums.length;
  let l = 0;
  let r = n;
  let sum: number = -Infinity;
  /*
    ----------------
    *     *       *
    i     left    rigjt    
    */
  for (let i = 0; i < n - 2; i++) {
    l = i + 1;
    r = n - 1;
    while (r > l) {
      sum = nums[i] + nums[l] + nums[r];
      ans = Math.abs(ans - target) > Math.abs(sum - target) ? sum : ans;
      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        return target;
      }
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] > target) break;
  }
  return ans;
}

function threeSumClosestNotOptmized(nums: number[], target: number): number {
  /*
    Input: nums = [-1,2,1,-4], target = 1
    Output: 2

    if we sort first then brutue force: O(nlong + n^3)
    [-4, -1, 1, 2]
    [a,b,c,d,e,f,g...]
    ab, c~z
    ac d~z
    but with sorted array, we can terminate early
  */
  nums.sort((a, b) => a - b);
  let ans = Infinity;
  const n = nums.length;
  let sum: number = -Infinity;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        sum = nums[i] + nums[j] + nums[k];
        ans = Math.abs(ans - target) > Math.abs(sum - target) ? sum : ans;
        // if sum differemce is samller then take it
        if (sum > target) break;
      }
      if (nums[i] + nums[j] + nums[j + 1] > target) break;
      //   if (sum > target) break;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] > target) break;
    // if (sum > target) break;
  }
  return ans;
}
export { threeSumClosest };
