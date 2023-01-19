function subarraysDivByK(nums: number[], k: number): number {
  const prefixMap: { [key: number]: number } = { 0: 1 };
  let count = 0;
  let sum = 0;
  for (let num of nums) {
    sum += num;
    sum = sum % k >= 0 ? sum % k : (sum % k) + k;
    if (prefixMap[sum] !== undefined) {
      count += prefixMap[sum];
      prefixMap[sum] += 1;
    } else {
      prefixMap[sum] = 1;
    }
  }
  return count;
}

function subarraysDivByKTEL(nums: number[], k: number): number {
  // try optimized brutue force
  /*
  nput: nums = [4,5,0,-2,-3,1]
  prev=[]
  
  */
  const prevArray: number[] = [];
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    for (let ind in prevArray) {
      count += prevArray[ind] % k === 0 ? 1 : 0;
      prevArray[ind] += nums[i];
    }
    prevArray.push(nums[i]);
  }
  return count;
}

function subarraysDivByKDPfail(nums: number[], k: number): number {
  // use memoized => memory exceeded
  // not use memoized => time exceeded
  /*
    Input: nums = [4,5,0,-2,-3,1], k = 5 Output: 7
    possible sub array combination:
    0~1, 0~2, .. 0~n-1    (n-1)
    1~2, 2~3, .. 2~n-1    (n-2)
    ...
                          (1)
                          n-1((n-1)+1)/2
    brute force solution
  function sum(arr: number[]) {
    return arr.reduce((prev, curr) => {
      return curr + prev;
    }, 0);
  }
  // brutue force
  let total = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // check single
    total += nums[i] % k === 0 ? 1 : 0;
    for (let j = i + 1; j < nums.length; j++) {
      const arr = nums.slice(i, j + 1);
      total += sum(arr) % k === 0 ? 1 : 0;
    }
  }
  total += nums[nums.length - 1] % k === 0 ? 1 : 0;
  return total;

    

        1. no prevSum

        3. prevSum but stop here
        4. 

        k=1
        c(0): carray from ind 0
                        1 
                     /      \
                 c(0) 3       3   
                  /         /     \
               c(0) 5    c(1) 5      5
               /         /         /   \
           c(0) 4      c(1) 4    c(2)4   4


        1, 3, 5,4
        ind=0 prev:Inf count 1 + helper(1,1);


     */
  const memoizedArr: { [key: string]: number }[] = [];
  for (let i = 0; i < nums.length; i++) {
    memoizedArr[i] = {};
  }
  function helper(ind: number = 0, prevSum: number = -Infinity): number {
    if (ind >= nums.length) return 0;
    if (memoizedArr[ind][prevSum.toString()] !== undefined)
      return memoizedArr[ind][prevSum.toString()];
    // continue from previous sum
    let count = 0;
    if (Number.isFinite(prevSum)) {
      // stop here
      count += (prevSum + nums[ind]) % k === 0 ? 1 : 0;
      // carray on
      count += helper(ind + 1, prevSum + nums[ind]);
    } else {
      // prevent cause duplicated
      // start new subArray
      count += nums[ind] % k === 0 ? 1 : 0;
      count += helper(ind + 1) + helper(ind + 1, nums[ind]);
    }
    return (memoizedArr[ind][prevSum.toString()] = count);
  }

  return helper(0);
}

export { subarraysDivByK };
