function zeroFilledSubarray(nums: number[]): number {
  /*
    Input: nums = [0,0,0,2,0,0]
    Output: 9
    Explanation:
    There are 5 occurrences of [0] as a subarray.
    There are 3 occurrences of [0,0] as a subarray.
    There is 1 occurrence of [0,0,0] as a subarray.
    There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.


    [0]: 1         1
    [0,0]: 3      1+2
    [0,0,0]: 6    1+2+3
    [0,0,0,0]: 10  1+2+3+4
    [0,0,0,0,0]: 15   [1]*5 + [2]*4 + [3]*3 + [4]*2 + [5]*1 

    (1+n)n/2

    1. count how many continous 0 subarry
    2. for length n subarry the combination is (1+n)n/2
    3. sum them all
     */
  let sum = 0;
  let subArrLength = 0;
  for (let num of nums) {
    if (num === 0) {
      subArrLength++;
    } else {
      sum += (subArrLength * (subArrLength + 1)) / 2;
      subArrLength = 0;
    }
  }
  sum += (subArrLength * (subArrLength + 1)) / 2;
  return sum;
}

export { zeroFilledSubarray };
