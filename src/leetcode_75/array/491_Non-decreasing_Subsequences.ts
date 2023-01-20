function findSubsequences(nums: number[]): number[][] {
  // try pure recursion
  const ansSet = new Set<string>();
  function helper(i: number = 0, arr: number[] = []) {
    if (arr.length >= 2) {
      ansSet.add(JSON.stringify(arr));
    }
    if (i >= nums.length) return;
    // take current value
    if (arr.length === 0 || nums[i] >= arr.at(-1)!) {
      const newArr = arr.slice();
      newArr.push(nums[i]);
      helper(i + 1, newArr);
    }
    // not take current value
    helper(i + 1, arr.slice());

    return;
  }
  helper();
  const ans: number[][] = [];
  for (let arrStr of ansSet) {
    ans.push(JSON.parse(arrStr));
  }
  return ans;
}

function findSubsequencesForAndRecursive(nums: number[]): number[][] {
  const ans: { [key: string]: boolean } = {};

  function helper(i: number = 0, arr: number[] = []) {
    if (i >= nums.length) return;
    if (arr.length === 0) arr.push(nums[i]);
    helper(i + 1);
    for (let j = i + 1; j < nums.length; j++) {
      helper(j, arr.slice());
      if (nums[j] >= arr.at(-1)!) {
        arr.push(nums[j]);
        ans[JSON.stringify(arr)] = true;
        helper(j, arr.slice());
      }
    }
  }
  helper();
  const ansArr: number[][] = [];
  for (let key in ans) {
    ansArr.push(JSON.parse(key));
  }
  return ansArr;
}

function findSubsequencesWithLoops(nums: number[]): number[][] {
  /*
Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
for brutul force: it takes O(n^2) time complexity
i=0 j=1 cand =[[4]]; 6>4 => [[4,6],[4]]
i=0 j=2 cand =[[4,6],[4]] => [[4,6,7],[4,7],[4,6],[4]]
i=0 j=3 cand =[[4,6,7],[4,7],[4,6],[4]] => [[4,6,7,7],[4,7,7],[4,6,7],[4,7],[4,6,7],[4,7],[4,6],[4]]


 */
  let res: number[][] = [];
  for (let i = 0; i < nums.length - 1; i++) {
    const candidates: number[][] = [[nums[i]]];
    for (let j = i + 1; j < nums.length; j++) {
      const currCandidateLength = candidates.length;
      for (let ind = 0; ind < currCandidateLength; ind++) {
        if (nums[j] >= candidates[ind].at(-1)!) {
          candidates.push(candidates[ind].slice());
          candidates[ind].push(nums[j]);
          res.push(candidates[ind].slice());
        }
      }
    }
  }
  let ans: string[] = [];
  for (let arr of res) {
    ans.push(JSON.stringify(arr));
  }
  res = [];
  ans = Array.from(new Set(ans));

  for (let str of ans) {
    res.push(JSON.parse(str));
  }
  return res;
}

export { findSubsequences };
