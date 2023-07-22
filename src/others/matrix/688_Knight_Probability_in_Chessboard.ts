function knightProbability(
  n: number,
  k: number,
  row: number,
  column: number
): number {
  /*
      
        xxx
        xxx
        xxx
        1/8* (2/8)
       */
  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
  ];
  const memo = new Map<string, number>();

  function dft(r = row, c = column, kLeft = k): number {
    if (r < 0 || r >= n || c < 0 || c >= n) return 0;
    if (kLeft === 0) return 1;
    const key = `${r}_${c}_${kLeft}`;
    if (memo.has(key)) return memo.get(key)!;
    let prob = 0;
    for (const [rMove, cMove] of moves) {
      prob += dft(r + rMove, c + cMove, kLeft - 1) / 8;
    }
    memo.set(key, prob);
    return prob;
  }
  return dft();
}

export { knightProbability };
