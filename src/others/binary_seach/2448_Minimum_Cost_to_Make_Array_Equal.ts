function minCost(nums: number[], cost: number[]): number {
  const N = nums.length;
  function getCost(targetNum: number): number {
    let total = 0;
    for (let i = 0; i < N; i++) {
      total += Math.abs(targetNum - nums[i]) * cost[i];
    }
    return total;
  }
  function numCheck(i: number) {
    return isNaN(i) ? Infinity : i;
  }

  let l = Math.min(...nums);
  let r = Math.max(...nums);
  let m = Math.floor((l + r) / 2);
  let mv1 = getCost(m);
  let mv2 = getCost(m + 1);
  let min = Math.min(numCheck(mv1), numCheck(mv2));
  while (l < r) {
    console.log(l, r, m);
    if (mv1 < mv2) {
      r = m;
    } else {
      l = m + 1;
    }

    m = Math.floor((l + r) / 2);
    mv1 = getCost(m);
    mv2 = getCost(m + 1);
    min = Math.min(numCheck(mv1), numCheck(mv2), min);
  }

  return min;
}

function minCostFailed(nums: number[], cost: number[]): number {
  /*
      Input: nums = [1,3,5,2], cost = [2,3,1,14]
      Output: 8
  
      the target num must locate between min(nums) max(nums) 
      1. sort nums, cost   O(nlogn)
      2. implement getCost O(n)
      3. binary search     O(logn)
      time:O(nlog) space: O(n)
  
      Colud there be multiple minimun?
  
      what if getCost(start) === getCost(end)
  
      [1, 3, 5]
      [10,0,10]
      getCost(1) = 40
      getCost(3) = 40
      getCost(5) = 40



      [1,3,5,6,7,10]
          
       */
  const sortArr: number[] = [];
  const N = nums.length;
  for (let i = 0; i < N; i++) {
    sortArr[i] = i;
  }
  sortArr.sort((a, b) => nums[a] - nums[b]);
  function getCost(targetNum: number): number {
    let total = 0;
    for (let i = 0; i < N; i++) {
      total += Math.abs(targetNum - nums[i]) * cost[i];
    }
    return total;
  }
  let l = 0;
  let r = N - 1;
  let m = Math.floor((l + r) / 2);
  let lVal = getCost(nums[sortArr[l]]);
  let rVal = getCost(nums[sortArr[r]]);
  let mVal = getCost(nums[sortArr[m]]);
  let min = Math.min(lVal, rVal, mVal);
  while (l < r) {
    if (lVal < rVal) {
      r = m - 1;
    } else {
      l = m + 1;
    }
    if (r < 0 || l >= N) break;
    m = Math.floor((l + r) / 2);
    lVal = getCost(nums[sortArr[l]]);
    rVal = getCost(nums[sortArr[r]]);
    mVal = getCost(nums[sortArr[m]]);
    min = Math.min(lVal, rVal, mVal, min);
  }

  return min;
}

export { minCost };
