function shuffle(nums: number[], n: number): number[] {
  /*
    nums = [1,2,3,4,4,3,2,1], n = 4
    */
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }
  return result;
}

export { shuffle };
