function jump(nums: number[]): number {
  /*
    Input: nums = [2,3,1,1,4]
    Output: 2

    seems like DP
    should I from head or from end?
    if start from end:
    [2,3,1,1,4]
    [x,x,x,x,0]

    [2,1,2,1,0]
    start from end
    pick the min in the range then +1
     */
  const n = nums.length;
  const stepArr: number[] = new Array(n).fill(Infinity);
  stepArr[n - 1] = 0;
  for (let i = n - 2; i >= 0; i--) {
    // iterate from end to head
    for (let jmp = 1; jmp <= nums[i]; jmp++) {
      // find the min in the jmp range and update to current position
      if (jmp + i < n) {
        stepArr[i] = Math.min(stepArr[i + jmp] + 1, stepArr[i]);
      }
    }
  }
  return stepArr[0];
}

/**
 * @param {number[]} nums
 * @return {number}
 */

var jumpOld = function (nums: number[]): number {
  /**
   * [2,3,1,14]
   * |0|
   *   |1,1|
   *       | 2|
   */
  let res = 0;
  let l = 0;
  let r = 0;
  while (r < nums.length - 1) {
    let farest = 0;
    for (let i = l; i <= r; i++) {
      farest = Math.max(farest, i + nums[i]);
    }
    l = r + 1;
    r = farest;
    res++;
  }
  return res;
};

var jumpMemoizedFromEnd = function (nums: number[]): number {
  /**
   * [2,3,1,1,4]
   * [  1,2,1,0]
   * [2,3,0,1,4]
   * [3,2,Inf,1,0]
   */
  const minMoveArr: number[] = [];
  minMoveArr[nums.length - 1] = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    const maxMovement = nums[i];
    minMoveArr[i] = Infinity;
    for (let j = 1; j <= maxMovement; j++) {
      if (i + j > nums.length - 1) break;
      minMoveArr[i] = Math.min(minMoveArr[i], minMoveArr[i + j] + 1);
    }
  }
  return minMoveArr[0];
};

var jumpDPOptimized = function (nums: number[]): number {
  /**
   * [2,3,1,1,4]
   */
  const memoizedArr: number[] = [];
  function minJump(pos: number = 0): number {
    if (pos >= nums.length - 1) return 0;
    const maxMovement = nums[pos];
    if (pos + maxMovement >= nums.length - 1) return 1;
    if (memoizedArr[pos] >= 0) return memoizedArr[pos];
    // const maxMovement = pos + nums[pos] >= nums.length ? nums.length - pos : nums[pos] ;
    let minJumpCount = Infinity;
    for (let i = maxMovement; i > 0; i--) {
      minJumpCount = Math.min(minJumpCount, minJump(pos + i));
      if (minJumpCount === 1) break;
    }
    return (memoizedArr[pos] = minJumpCount + 1);
  }

  return minJump();
};

var jumpNoOptmized = function (nums: number[]): number {
  /**
   * [2,3,1,1,4]
   */
  const memoizedArr: number[] = [];
  function minJump(pos: number = 0): number {
    if (pos >= nums.length - 1) return 0;
    if (memoizedArr[pos] >= 0) return memoizedArr[pos];
    // we don't need to consider the conditions of maxMovement >= nums.length
    const maxMovement =
      pos + nums[pos] >= nums.length ? nums.length - pos : nums[pos];
    let minJumpCount = Infinity;
    for (let i = maxMovement; i > 0; i--) {
      minJumpCount = Math.min(minJumpCount, minJump(pos + i));
    }
    return (memoizedArr[pos] = minJumpCount + 1);
  }

  return minJump();
};

export { jump };
