function strangePrinter(s: string): number {
  /*
    l    r
    aaabbb
    l=0
    r=5
    start from memo[l][r] => memo[0][5] = 6
    for(i=0~4)
    i=0
    s[0] !== s[5] j=0
    memo[0][5] = Math.min( memo[0][5] , 1 + dp(0,0) + dp(1,5))
    i=1
    s[1] !== s[5] j=0
    memo[0][5] = Math.min( memo[0][5] , 1 + dp(0,1) + dp(2,5))
    ...
    i=2
    s[2] !== s[5] j=0
    memo[0][5] = Math.min( memo[0][5], 1 + dp(0,2) + dp(3,5) )
        
    */
  const memo: number[][] = [];
  const N = s.length;
  for (let i = 0; i < N; i++) {
    memo[i] = new Array(N).fill(-1);
  }

  function dp(l = 0, r = N - 1): number {
    if (memo[l][r] !== -1) return memo[l][r];
    memo[l][r] = N;
    let j = -1;
    for (let i = l; i < r; i++) {
      if (s[i] !== s[r] && j === -1) {
        j = i;
      }
      if (j !== -1) {
        memo[l][r] = Math.min(memo[l][r], 1 + dp(j, i) + dp(i + 1, r));
      }
    }
    if (j === -1) memo[l][r] = 0;
    return memo[l][r];
  }
  return dp() + 1;
}

function strangePrinterTLE(s: string): number {
  /*
    Input: s = "aaabbb"
    Output: 2
    Input: s = "aba"
    Output: 2
    1 <= s.length <= 100
    aaccabbbbbcabaa

    for brute force

    012345
    aaabbb
    we can print 
    1. start from 0~5
    2. how long we want to print
    3. which char we want to print
    DP?

    max(n) => 100
    we start from i=0 to i=n-1
    in i step we can
    1. determine how many string we want to print -> 1 ~ n-i 
    2. if the string is already the same we can skip 


     */
  const N = s.length;
  const memo = new Map<string, number>();
  function print(i = 0, str = ""): number {
    if (i >= N) return 0;
    if (s[i] === str[i]) return print(i + 1, str);
    const key = `${i}_${str}`;
    if (memo.has(key)) return memo.get(key)!;
    let minPrint = 100;
    // find identical char
    let lastInd = i;
    for (let k = i + 1; k < N; k++) {
      if (s[k] === s[i]) lastInd = k;
    }
    for (let j = 1; j <= Math.min(N - i, lastInd + 1); j++) {
      const letters = new Array(j).fill(s[i]).join("");
      // try all combination
      const newStr = str.substring(0, i) + letters + str.substring(i + j);
      minPrint = Math.min(minPrint, print(i + 1, newStr) + 1);
    }
    memo.set(key, minPrint);
    return minPrint;
  }
  return print();
}

export { strangePrinter };
/*
"aaabbb"
"aba"
"aaccabbbbbcabaa"
*/
