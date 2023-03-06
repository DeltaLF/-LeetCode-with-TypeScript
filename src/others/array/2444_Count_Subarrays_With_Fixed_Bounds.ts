function countSubarrays(nums: number[], minK: number, maxK: number): number {
  /*
  divide array in to subArray that [n] n must >= minK && <= maxK
            [1, 1, 5, 2, 7, 5], 1, 5
  minCount   1  2  2  2
  maxCount   0  0  1  1

               [1 ,5, 5 ,5 ,1 ,5 ,2 ,3 ,1]
minInd      -1: 0  0  0  0  4  
maxInd      -1:-1  1  2  3  3
lastInvaild -1:-1 -1 -1 -1 -1
add             0  1  1  1  4
 
  */
  let lastMin = -1;
  let lastMax = -1;
  let lastInvaild = -1;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= maxK && nums[i] >= minK) {
      if (nums[i] === maxK) lastMax = i;
      if (nums[i] === minK) lastMin = i;
      count += Math.max(0, Math.min(lastMin, lastMax) - lastInvaild);
    } else {
      lastInvaild = i;
      lastMax = -1;
      lastMin = -1;
    }
  }
  return count;
}

function countSubarraysTLE(nums: number[], minK: number, maxK: number): number {
  /*
brutue force: O(n^2) causes TLE
*/
  let count = 0;
  let hasMin = false;
  let hasMax = false;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    hasMin = false;
    hasMax = false;
    for (let j = 0; i + j < n; j++) {
      if (nums[i + j] < minK || nums[i + j] > maxK) break;
      hasMin = hasMin || nums[i + j] === minK;
      hasMax = hasMax || nums[i + j] === maxK;
      if (hasMax && hasMin) count++;
    }
  }
  return count;
}

function countSubarraysFailed(
  nums: number[],
  minK: number,
  maxK: number
): number {
  /*
    2 <= nums.length <= 105, 1 <= nums[i], minK, maxK <= 106
    
    Input: nums = [1,1,1,1], minK = 1, maxK = 1
    Output: 10

    a little like dp => try to find the recursion sol

    [1]: 1
    [1,1]: 3 => 1 + [1] => 2 + 1
    [1,1,1]: 6 => 1 + [1,1]=> 3  + 3
    */

  /*
    [1,3,5,2,7,5] 1, 5
    */
  function count(i = 0, hasMin = false, hasMax = false, carry = 0): number {
    console.log(i, "hasMin", hasMin, "hasMax", hasMax, carry);
    // return counts of fiexd bounds from i to n
    if (i > nums.length) return 0;
    if (nums[i] >= minK && nums[i] <= maxK) {
      // continue
      if (nums[i] === minK) hasMin = true;
      if (nums[i] === maxK) hasMax = true;
      carry += hasMax && hasMin ? 1 : 0;
      if (i === 0) {
        return carry + count(i + 1, hasMin, hasMax, carry);
      } else {
        return (
          carry +
          count(
            // count from current
            i + 1,
            nums[i] === minK,
            nums[i] === maxK,
            minK === maxK ? 1 : 0
          )
        );
        +count(i + 1, hasMin, hasMax, carry);
      }
    } else {
      // stop at i but continue counting
      return count(i + 1, false, false, 0);
    }
  }

  return count(0, false, false);
}

export { countSubarrays };
