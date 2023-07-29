function soupServings(n: number): number {
  /*
      Serve 100 ml of soup A and 0 ml of soup B,
      Serve 75 ml of soup A and 25 ml of soup B,
      Serve 50 ml of soup A and 50 ml of soup B, and
      Serve 25 ml of soup A and 75 ml of soup B.
      Input: n = 50
      Output: 0.62500

      use 25ml as 1 unit
          A  B
      t1: 4  0
      t2: 3  1
      t3: 2  2
      t4: 1  3
      
       */

  if (n > 10000) return 1;
  const memo = new Map<string, number>();
  function dp(a = n, b = n): number {
    // run out of
    if (b > 0 && a <= 0) return 1; // only a
    if (b <= 0 && a <= 0) return 0.5; // both a and b
    if (b <= 0 && a > 0) return 0; // only b
    const key = `${a}_${b}`;
    if (memo.has(key)) return memo.get(key)!;
    const t1 = dp(a - 100, b);
    const t2 = dp(a - 75, b - 25);
    const t3 = dp(a - 50, b - 50);
    const t4 = dp(a - 25, b - 75);
    memo.set(key, (t1 + t2 + t3 + t4) / 4);
    return memo.get(key)!;
  }
  return dp();
}

export { soupServings };
