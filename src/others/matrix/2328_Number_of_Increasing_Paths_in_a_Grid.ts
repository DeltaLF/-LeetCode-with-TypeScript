function countPaths(grid: number[][]): number {
  /*
    Input: grid = [[1,1],[3,4]]
    1 1
    3 4

    1 1 3 4
    13 14 34
    134


    iterate from left top to right down and apply dft in every grid
    but if the grid has been started then don't do dft duplicatlly 
     */
  const MODULE = 10 ** 9 + 7;
  const ROW = grid.length;
  const COL = grid[0].length;
  const memo: bigint[][] = [];

  for (let i = 0; i < ROW; i++) {
    memo[i] = [];
  }
  //   const memo = new Map<string, bigint>();
  function dft(r: number, c: number): bigint {
    if (r < 0 || c < 0 || r >= ROW || c >= COL) return BigInt(0);
    if (memo[r][c] !== undefined) return memo[r][c];
    let count = BigInt(0);
    // if (!hasStarted[r][c]) {
    //   hasStarted[r][c] = true;
    //   // strat a new path from (r,c)
    //   count += dft(r, c) + 1;
    // }
    // top
    if (r > 0 && grid[r - 1][c] > grid[r][c])
      count += dft(r - 1, c) + BigInt(1);

    // right
    if (c < COL - 1 && grid[r][c + 1] > grid[r][c])
      count += dft(r, c + 1) + BigInt(1);

    // down
    if (r < ROW - 1 && grid[r + 1][c] > grid[r][c])
      count += dft(r + 1, c) + BigInt(1);

    // left
    if (c > 0 && grid[r][c - 1] > grid[r][c])
      count += dft(r, c - 1) + BigInt(1);
    memo[r][c] = count;
    return count;
  }
  let totalCount = BigInt(0);
  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      totalCount += dft(r, c) + BigInt(1);
    }
  }
  totalCount = totalCount % BigInt(MODULE);
  return Number(totalCount);
}

export { countPaths };
