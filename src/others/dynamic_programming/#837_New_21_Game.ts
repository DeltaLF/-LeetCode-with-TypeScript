function new21Game(n: number, k: number, maxPts: number): number {
  /*

if we can get score possibility arr

1. [p0, p1,....pk,pk+1,..pn] => Ans = pk + pk+1 + pk+2,... pn
2. for px it's possibility is summation of px-1 + px-2... px-maxPts
*/
  if (k === 0 || n > maxPts + k) return 1;
  const scoreP = Array(n + 1).fill(0);
  scoreP[0] = 1;
  let sum = 1;
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    scoreP[i] = sum / maxPts;
    if (i >= k) {
      ans += scoreP[i];
    } else {
      sum += scoreP[i]; // because game stop after score >= k
    }
    if (i >= maxPts) sum -= scoreP[i - maxPts];
  }

  return ans;
}

function new21GameTLE(n: number, k: number, maxPts: number): number {
  const memo: number[] = [];
  function dft(score = 0): number {
    if (score >= k) return score > n ? 0 : 1;
    if (memo[score] !== undefined) return memo[score];
    let sum = 0;
    for (let i = 1; i <= maxPts; i++) {
      sum += dft(score + i);
    }

    return (memo[score] = sum / maxPts);
  }
  return dft();
}

function new21GameFailed(n: number, k: number, maxPts: number): number {
  /*
      Input: n = 6, k = 1, maxPts = 10
      Output: 0.60000
      Input: n = 21, k = 17, maxPts = 10
      Output: 0.73278
       */
  function helper(n: number, k: number): number {
    if (k === 0) {
      // base case

      return n < maxPts ? n / maxPts : 1;
    }
    let sum = 0;
    for (let i = 1; i <= maxPts; i++) {
      console.log(n, k, i);
      // consider all possibility
      if (k - i <= 0) break;
      sum = helper(n - i, k - i);
    }
    return sum;
  }
  return helper(n, k);
}

export { new21Game };
