function maxProduct(nums: number[]): number {
  // same logic but simpler code
  let max = -Infinity;
  let positive = 1;
  let negative = 1;
  // only when encounters num <0 makes postiive has different sign
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      positive = 1;
      negative = 1;
      max = Math.max(0, max);
    } else {
      if (positive * negative > 0) {
        // same sign means negative hasn't been initialized
        negative = 1;
      }
      positive *= nums[i];
      negative *= nums[i];
      max = Math.max(max, positive, negative);
    }
  }

  return max;
}

function maxProductNotBeautified(nums: number[]): number {
  /*
    Input: nums = [3,-1,4,-3,-6]
    Output: 72

    i=0 curr=3
    i=1 curr=-3  lastNeg=1
    i=2 curr=-12 lastNeg=1 lastOppValue=4
    i=3 curr=12 lastNeg=3 lastOppValue=-12
    i=4 curr=-72 lastNeg=4 lastOppValue=72


    brutue force: 
    i:0~n-1, j:1~n (subArray length)  O(n^2)
    is it necessary?

    left, right pointer? no, we cannot determine whether to shrink l or r
    
    iterate from i=0 
    if nums[i]===0 => reset
    if nums[i]>0 carry on
    if nums[i]<0 => we want to keep 2 number => one positive one negative
       +Max
       -Max*/
  let max = -Infinity;
  let lastoppsiteValue: number = 1;
  let curr = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      curr *= nums[i];
      lastoppsiteValue *= nums[i];
      max = Math.max(curr, max, lastoppsiteValue);
    } else if (nums[i] === 0) {
      curr = 1; // reset
      lastoppsiteValue = 1;
      max = Math.max(max, 0);
    } else {
      // <0
      if (lastoppsiteValue * curr > 0) {
        // lastoppsiteValue hasn't been actually init
        lastoppsiteValue = 1;
      } else {
        // lastoppsiteValue has different sign to curr
        lastoppsiteValue *= nums[i];
        max = Math.max(lastoppsiteValue, max);
      }
      curr *= nums[i];
      max = Math.max(max, curr);
    }
  }
  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProductOld = function (nums: number[]): number {
  // [3,-1,4,-3,-6]
  let max = Math.max(...nums);
  let currMax = 1;
  let currMin = 1;
  let tempMax: number;
  for (let num of nums) {
    tempMax = currMax;
    currMax = Math.max(currMax * num, currMin * num, num);
    currMin = Math.min(tempMax * num, currMin * num, num);
    max = Math.max(currMax, max);
  }
  return max;
};

var maxProductDP = function (nums: number[]): number {
  /*
    fail when apply memoizedObj
    try dyanmic programming 
    */

  /*
    [2,3,5]
    take = help(1,2); //
    notTake = help(1) => help([3,5])
    */
  const memoizedObj: { [key: string]: number } = {};
  function help(ind: number = 0, prev: number | null = null): number {
    if (ind === nums.length - 1) {
      return Math.max(
        (prev === null ? 1 : prev) * nums[nums.length - 1],
        nums[nums.length - 1],
        prev === null ? -Infinity : prev
      );
    }
    // if(prev === null){
    //   // no prev
    //   if( Number.isInteger( memoizedObj[ind.toString() + 'f'] )){
    //     return memoizedObj[ind.toString() + 'f']
    //   }
    // }else{
    //   if( Number.isInteger( memoizedObj[ind.toString() + 't'] )){
    //       return memoizedObj[ind.toString() + 't'] * prev
    //     }
    // }

    const take = help(ind + 1, (prev === null ? 1 : prev) * nums[ind]);
    const notTake = help(ind + 1);
    //memoizedObj[ind.toString() + 't'] = take;
    //memoizedObj[ind.toString() + 'f'] = notTake;
    return Math.max(take, notTake, prev === null ? -Infinity : prev);
  }
  return help();
};

var maxProductBruteForce = function (nums: number[]): number {
  /*
    key point is to detect 0, negative number
    
    */
  let max: number = -Infinity;
  const reRunStack = [0];
  for (let ind = 0; ind < nums.length - 1; ind++) {
    if (nums[ind] <= 0) {
      reRunStack.push(ind + 1);
    }
  }
  // iterate through
  for (let reRunInd of reRunStack) {
    let localMax: number = 1;
    for (let i = reRunInd; i < nums.length; i++) {
      localMax = localMax * nums[i];
      max = Math.max(max, localMax);
      if (localMax === 0) break;
    }
  }
  return max;
};

export { maxProduct };
