function findNumberOfLIS(nums: number[]): number {
  const N = nums.length;
  const length = new Array(N).fill(0);
  const count = new Array(N).fill(0);
  let maxLen = 0;
  let ans = 0;
  for (let i = 0; i < N; i++) {
    length[i] = 1;
    count[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (length[i] === length[j] + 1) count[i] += count[j];
        if (length[i] < length[j] + 1) {
          length[i] = length[j] + 1;
          count[i] = count[j];
        }
      }
    }
    if (maxLen === length[i]) ans += count[i];
    if (maxLen < length[i]) {
      maxLen = length[i];
      ans = count[i];
    }
  }
  return ans;
}

export { findNumberOfLIS };
