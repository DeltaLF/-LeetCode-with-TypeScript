function combine(n: number, k: number): number[][] {
  /*
    Input: n = 4, k = 2
    Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
    Input: n = 1, k = 1
    Output: [[1]]


    1,2,3,4

    [1,2,3,4]  set 0
    for(1 to 4)
      [2,3,4] [1]
        [3,4] [1,2]

     */
  const nums: number[] = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  const ans: number[][] = [];

  function permutation(arr: number[] = [], i = 0) {
    if (arr.length >= k) {
      ans.push(arr.slice());
      return;
    }
    for (let j = i; j < n; j++) {
      arr.push(nums[j]);
      permutation(arr, j + 1);
      arr.pop();
    }
  }

  permutation();
  return ans;
}
