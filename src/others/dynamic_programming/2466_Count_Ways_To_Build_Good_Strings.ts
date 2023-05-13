function countGoodStrings(
  low: number,
  high: number,
  zero: number,
  one: number
): number {
  /*
    Input: low = 3, high = 3, zero = 1, one = 1
    Output: 8
    Input: low = 2, high = 3, zero = 1, one = 2
    Output: 5

    low=2 high=3

    first step:
      0
     /  \ 
    011 00  V
    V   /\
    0011  000
     X     V

     11 V
    /  \
  110  1111
  V     XX

    11
    
     */

  const MOD = 10 ** 9 + 7;
  const memoArr: number[] = [];
  function construct(i = 0): number {
    if (i > high) return 0;
    if (memoArr[i] !== undefined) return memoArr[i];
    const takeOne = construct(i + one);
    const takeZero = construct(i + zero);
    const count = i >= low ? 1 : 0;

    return (memoArr[i] = (takeOne + takeZero + count) % MOD);
  }
  return construct();
}

export { countGoodStrings };
