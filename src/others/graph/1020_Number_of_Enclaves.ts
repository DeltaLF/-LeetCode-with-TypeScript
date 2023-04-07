function numEnclaves(grid: number[][]): number {
  /*
    Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
    Output: 3

    1. dft helper function 
    2. iterate through
       mark visited land as -1
     */
  let enclaves = 0;
  const row = grid.length;
  const col = grid[0].length;
  function dft(r: number, c: number): number {
    if (r < 0 || r >= row || c < 0 || c >= col) return -Infinity;
    if (grid[r][c] === 0 || grid[r][c] === -1) return 0; //retrun 0 if it's sea or visited
    grid[r][c] = -1; // visited
    const up = dft(r - 1, c);
    const right = dft(r, c + 1);
    const down = dft(r + 1, c);
    const left = dft(r, c - 1);
    return up + right + down + left + 1;
  }
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (grid[r][c] === 1) {
        // unvisited land
        const count = dft(r, c);
        enclaves += Number.isFinite(count) ? count : 0;
      }
    }
  }
  return enclaves;
}

export { numEnclaves };
