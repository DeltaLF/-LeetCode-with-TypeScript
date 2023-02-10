function maxDistance(grid: number[][]): number {
  /*
       0  0  1
       0  0  0
       0  0  0
    topleft
       I  I  0
       I  I  1
       I  I  2
    bottom right
       2  1  0
       3  2  1
       4  3  2
       
       1  0  0
       0  0  0
       0  0  0
       top left
       0  1  2
       1  2  3
       2  3  4
       right down


             4

    */

  /*
    1 0 0
    0 1 0
    0 0 0
    make two DP map
    1. from left top to right bottom  record the minDistance from left or top to a land
    (check all possibility from left or up)
    0 1 2        y        
    1 0 1    x  cur   => cur = 1 + Math.min(x,y)
    2 1 2
    
    2. from right bottom to left tip  record the minDistance from right or down to a land
    (check all possibility from right or down)
    0     1   Inf
    1     0   Inf
    Inf  Inf  Inf
    
    take min of two DP then find the max 
    */
  const dp: number[][] = [];
  const n = grid.length;
  for (let row = 0; row < n; row++) {
    dp[row] = [];
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        dp[row][col] = 0;
      } else {
        const up = dp[row - 1] === undefined ? Infinity : dp[row - 1][col];
        const left =
          dp[row][col - 1] === undefined ? Infinity : dp[row][col - 1];
        dp[row][col] = 1 + Math.min(up, left);
      }
    }
  }

  for (let row = n - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      if (grid[row][col] === 0) {
        const right = dp[row + 1] === undefined ? Infinity : dp[row + 1][col];
        const down =
          dp[row][col + 1] === undefined ? Infinity : dp[row][col + 1];
        dp[row][col] = 1 + Math.min(right, down, dp[row][col] - 1);
      }
    }
  }
  let maxDist = -Infinity;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) continue;
      maxDist = Math.max(maxDist, dp[row][col]);
    }
  }
  return Number.isFinite(maxDist) ? maxDist : -1;
}

function maxDistanceBruteForce(grid: number[][]): number {
  /*
      Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
      Output: 4
      1  0  0     
      0  0  0
      0  0  0
      for brutue force: 
      iterate through n*n, 
      in every loop, if current position is water, then find the min distance to all the land
      O(n^4) n^2 for iterating n^2 for searching land
       */
  function findNearestLand(row: number, col: number): number {
    let minDist = Infinity;
    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        if (grid[x][y] === 1) {
          minDist = Math.min(minDist, Math.abs(row - x) + Math.abs(col - y));
        }
      }
    }
    return Number.isFinite(minDist) ? minDist : -1;
  }

  let maxDist = -1;
  const n = grid.length;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 0) {
        maxDist = Math.max(maxDist, findNearestLand(row, col));
      }
    }
  }
  return maxDist;
}

export { maxDistance };
