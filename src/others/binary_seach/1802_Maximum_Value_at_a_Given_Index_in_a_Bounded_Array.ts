function maxValue(n: number, index: number, maxSum: number): number {
  /*
    n <= 10^9 => only O(n) is acceptable
    Input: n = 4, index = 2,  maxSum = 6
    Output: 2
    note:  maxSum > nums[i] > 0   
    sum(nums) = maxSum
    
    if we say
    nums[index]=6 fail [x,x,6,x]
    nums[index]=5  [x,x,5,x] => [3,4,5,4]
    ...
    [x,x,2,x] => [1,1,2,1]
     for index 
     we can write function Sum(n-1,front) Sum(n+1,back)  O(1)
     then we iterate through nums[index] between 1 <= nums <= maxSum
     to optimize: binary search
    
     n=4 index=2 maxSum=6
    
     X[ 1,2,3,2]
     max=4
     n=2
     beforeLen =2
     [  2,3,4,3 ]

     */

  function sumXtoY(x: number, y: number): number {
    // x <= y  x,x+1,x+2,...y
    return ((x + y) * (y - x + 1)) / 2;
  }
  function sumHalf(len: number, num: number): number {
    if (len >= num) {
      return sumXtoY(1, num) + len - num;
    } else {
      return sumXtoY(num - len + 1, num);
    }
  }

  function isNumAtIndexValid(numAtInt: number): boolean {
    //    [ ...x-2,x-1,x,x-1,x-2...]
    let sum = numAtInt;
    // sum before Ind
    const beforeLen = index;
    sum += sumHalf(beforeLen, numAtInt - 1);
    const afterLen = n - index - 1;
    sum += sumHalf(afterLen, numAtInt - 1);
    return sum <= maxSum;
  }
  //   for (let i = maxSum; i > 0; i--) {
  //     if (isNumAtIndexValid(i)) {
  //       return i;
  //     }
  //   }
  // optimze with binary search
  let l = 1;
  let r = maxSum;
  let m = Math.floor((l + r) / 2);
  while (l < r) {
    if (isNumAtIndexValid(m)) {
      l = m + 1;
    } else {
      r = m - 1;
    }
    m = Math.floor((l + r) / 2);
  }
  return isNumAtIndexValid(m) ? m : m - 1;
}

export { maxValue };
