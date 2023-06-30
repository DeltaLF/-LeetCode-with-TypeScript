function latestDayToCross(row: number, col: number, cells: number[][]): number {
  //row:m col:n k = cells.length
  // 0 index based
  function makeGird(days: number) {
    // O(m*n)
    const grid: number[][] = [];
    for (let i = 0; i < row; i++) {
      grid[i] = [];
      for (let j = 0; j < col; j++) {
        grid[i][j] = 0;
      }
    }
    for (let i = 0; i < days; i++) {
      const [rPlus1, cPlus1] = cells[i];
      const r = rPlus1 - 1;
      const c = cPlus1 - 1;
      grid[r][c] = 1;
    }
    return grid;
  }
  function isValid(grid: number[][]): boolean {
    // O(m*n)
    // mark grid[][]===2 for visited
    function dft(r: number, c: number): boolean {
      if (r < 0 || c < 0 || c >= col || grid[r][c] > 0) return false;
      if (r >= row - 1) return true;
      grid[r][c] = 2; // for visited grid
      const top = dft(r - 1, c);
      const right = dft(r, c + 1);
      const down = dft(r + 1, c);
      const left = dft(r, c - 1);
      return top || right || down || left;
    }
    for (let i = 0; i < col; i++) {
      if (dft(0, i)) return true;
    }
    return false;
  }
  let l = 0;
  let r = cells.length - 1;
  let m = Math.floor((l + r) / 2);
  let maxDay = 0;
  while (l < r) {
    // O(logk) iterations
    // O(m*n) in each iteration
    const grid = makeGird(m);

    if (isValid(grid)) {
      maxDay = m;
      l = m + 1;
    } else {
      r = m;
    }

    m = Math.floor((l + r) / 2);
  }
  return maxDay;
}
export { latestDayToCross };
