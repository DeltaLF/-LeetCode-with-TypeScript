function singleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const N = nums.length;
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[N - 1] !== nums[N - 2]) return nums[N - 1];
  for (let i = 3; i < nums.length - 3; i++) {
    if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) return nums[i];
  }
  return 0;
}
