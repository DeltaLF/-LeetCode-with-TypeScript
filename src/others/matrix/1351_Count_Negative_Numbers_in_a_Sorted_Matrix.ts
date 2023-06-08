function countNegatives(grid: number[][]): number {
  /*
    Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    Output: 8
    Input: grid = [[3,2],[1,0]]
    Output: 0
     */
  const m = grid.length;
  const n = grid[0].length;
  let count = 0;
  for (let row = m - 1; row >= 0; row--) {
    if (grid[row][n - 1] >= 0) break;
    for (let col = n - 1; col >= 0; col--) {
      if (grid[row][col] < 0) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}
export { countNegatives };
