function tribonacci(n: number): number {
  /*
      T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
       */
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  let t0 = 0;
  let t1 = 1;
  let t2 = 1;
  let ans = 0;
  for (let i = 3; i <= n; i++) {
    ans = t2 + t1 + t0;
    t0 = t1;
    t1 = t2;
    t2 = ans;
  }
  return ans;
}
function tribonacciBottomUpDP(n: number): number {
  /*
    T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
     */
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;
  const memoizedArr: number[] = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    // tn+1           tn                  tn-1              tn-2
    memoizedArr[i] =
      memoizedArr[i - 1] + memoizedArr[i - 2] + memoizedArr[i - 3];
  }
  return memoizedArr[n];
}

export { tribonacci };
