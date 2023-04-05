function minimizeArrayValue(nums: number[]): number {
  /*
    
    Input: nums = [3,7,1,6]
    Output: 5 
    nums[i]--
    nums[i-1]++

    nums[i]<= nums[i-1] => no needs to do more operations

    is it DP? no even if [1~n] is sorted we cannot sau [n+1~m] won't affect [1~n]
    [3,7] => [4,6] => [5,5]

    [3,7,1]=>[5,5,1]
    [3,7,1,6] => [5,5,2,5]

    1 2 3 4 5 6
    2 2 4 5 4 5

    we can think about the question as

    n >= 1
    nums[i+n]--
    nums[i]++

    as long as there is a number on the left that is larger then any number on the right
    we can balance them

    1 2 3 4 5 6

    i=0 max:1
    i=1 Max(avg(0~1),prevMax)
    i=2 Max(avg(0~2),prevMax)

    */
  let sum = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, Math.ceil(sum / (i + 1)));
  }
  return max;
}

export { minimizeArrayValue };
