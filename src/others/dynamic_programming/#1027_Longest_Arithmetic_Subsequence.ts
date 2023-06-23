function longestArithSeqLength(nums: number[]): number {
  /*
    brute force:
    with given a1, a2 we can find the count of sequence A in O(N)
    for(a1Ind=0 ~ N)           // given a1
      for(a2Ind=a1Ind+1 ~N)    // given a2
        findCount              // find
    O(N^3)
    try to memo
    Index: i0 i1 i2 i3 i4 ... in
    value: n0 n1 n2 n3 n4 ... nn
    dp[ind][diff] means: at index:ind diffrent:diff there are dp[ind][diff] count of arithmetic sequence 

    dp[1][n1-n0] = 2

    dp[2][n2-n1] = if( n2-n1 === n1-n0 ) dp[1][n1-n0] + 1 else 2
    dp[2][n2-n0] = 2

    dp[3][n3-n2] 
    dp[3][n3-n1]
    dp[3][n3-n0]
    ...

    20 1  15 3 10 5 8
     {-19:2}
        {14:2
        -5:2
        }
            {-12:2
            2:2
            -17:2
            }

    */
  if (nums.length === 1) return 1;
  if (nums.length === 2) return 2;
  const memo = new Map<string, number>();
  // key: ind_diff
  const N = nums.length;
  let max = 0;
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      const key = `${i}_${nums[i] - nums[j]}`; // index:i diff: nums[i]-nums[j]
      const prevKey = `${j}_${nums[i] - nums[j]}`;
      const prevVal = memo.get(prevKey) ? memo.get(prevKey)! : 1;
      max = Math.max(prevVal + 1, max);
      memo.set(key, prevVal + 1);
    }
  }
  return max;
}

function longestArithSeqLengthBadAlloc(nums: number[]): number {
  /*
    Input: nums = [3,6,9,12]
    Output: 4
    Input: nums = [20,1,15,3,10,5,8]
    Output: 4
     */
  const N = nums.length;
  const memo = new Map<string, number>();
  function dp(i = 0, prev = -1, diff = NaN): number {
    // prev -2: first prev -1: second prev>= 0
    if (i === N) return 0;
    const key = `${i}_${prev}_${diff}`;
    if (memo.has(key)) return memo.get(key)!;
    let first = 0;
    let second = 0;
    let take = 0;
    // take
    if (prev === -1) {
      first = dp(i + 1, i, NaN) + 1;
    }
    if (prev >= 0) {
      if (Number.isNaN(diff)) second = dp(i + 1, i, nums[i] - nums[prev]) + 1;
      if (nums[i] - nums[prev] === diff) take = dp(i + 1, i, diff) + 1;
    }
    // not take
    const notTake = dp(i + 1, prev, diff);
    const max = Math.max(first, second, take, notTake);
    memo.set(key, max);
    return max;
  }
  return dp();
}

export { longestArithSeqLength };
