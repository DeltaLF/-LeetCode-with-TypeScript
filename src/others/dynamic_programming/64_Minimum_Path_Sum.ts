function minPathSum(grid: number[][]): number {
  /*
    try bottom up
    x x x o
    x x x o
    o o o o
    */
  let row = grid.length - 1;
  let col = grid[0].length - 1;
  for (let r = 0; r <= row; r++) {
    for (let c = 0; c <= col; c++) {
      if (r === 0 && c === 0) continue;
      const fromTop = r - 1 >= 0 ? grid[r - 1][c] : Infinity;
      const fromLeft = c - 1 >= 0 ? grid[r][c - 1] : Infinity;
      grid[r][c] = Math.min(fromLeft, fromTop) + grid[r][c];
    }
  }
  return grid[row][col];
}
function minPathSumTopDown(grid: number[][]): number {
  /*
    Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
    Output: 7
    1 3 1
    1 5 1
    4 2 1


    1 4 5
    2 7 6
    6 8 7 
    
    123 
    456
    output 12

    seems like a dp problem
    1. find the recursive 
    2. memoize table
     */

  const height = grid.length;
  const width = grid[0].length;
  const memoizedArr: number[][] = [];
  for (let i = 0; i < height; i++) {
    memoizedArr.push(Array(width).fill(-1));
  }
  function findMin(row = 0, col = 0, sum = 0): number {
    if (row === height - 1 && col === width - 1) return grid[row][col];
    if (memoizedArr[row][col] > 0) return memoizedArr[row][col];
    let goRight = Infinity;
    let goDown = Infinity;
    // go down
    if (row + 1 < height) {
      goDown = findMin(row + 1, col, sum);
    }
    // go right
    if (col + 1 < width) {
      goRight = findMin(row, col + 1, sum);
    }
    return (memoizedArr[row][col] = Math.min(goRight, goDown) + grid[row][col]);
  }
  return findMin();
}

export { minPathSum };
