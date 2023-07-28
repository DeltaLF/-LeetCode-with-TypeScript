function PredictTheWinner(nums: number[]): boolean {
  /*
    Input: nums = [1,5,2]
    Output: false
    Input: nums = [1,5,233,7]
    Output: true
    
     */
  const memo = new Map<string, number>();

  function dft(l = 0, r = nums.length - 1, isP1 = true): number {
    if (l > r) return 0;
    const key = `${l}_${r}_${isP1 ? 1 : 0}`;
    if (memo.has(key)) return memo.get(key)!;
    const pickLeft = dft(l + 1, r, !isP1) + (isP1 ? nums[l] : -nums[l]);
    const pickRight = dft(l, r - 1, !isP1) + (isP1 ? nums[r] : -nums[r]);
    if (isP1) {
      memo.set(key, Math.max(pickLeft, pickRight));
      return Math.max(pickLeft, pickRight);
    }

    memo.set(key, Math.min(pickLeft, pickRight));

    return Math.min(pickLeft, pickRight);
  }
  return dft() >= 0;
}

export { PredictTheWinner };
