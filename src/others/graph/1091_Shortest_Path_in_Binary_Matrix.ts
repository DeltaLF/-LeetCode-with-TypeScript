import { Queue } from "datastructures-js";
function shortestPathBinaryMatrix(grid: number[][]): number {
  if (grid[0][0]) return -1;
  const n = grid.length;
  const q = new Queue<[number, number]>();
  q.enqueue([0, 0]);
  let step = 1;
  function isValid(x: number, y: number): boolean {
    if (x < 0 || y < 0 || x >= n || y >= n) return false;
    return grid[x][y] === 0;
  }
  while (q.size() > 0) {
    const size = q.size();
    for (let i = 0; i < size; i++) {
      const curr = q.dequeue();
      const [x, y] = curr;
      if (x === n - 1 && y === n - 1) return step;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (isValid(x + i, y + j)) {
            q.enqueue([x + i, y + j]);
            grid[x + i][y + j] = 1;
          }
        }
      }
    }
    step++;
  }

  return -1;
}

function shortestPathBinaryMatrixUnoptimzed(grid: number[][]): number {
  /*
    Input: grid = [[0,1],[1,0]]
    Output: 2
    Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
    Output: 4
    Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
    Output: -1

    000
    110
    110

     */
  if (grid[0][0]) return -1;
  const n = grid.length;
  const visited: boolean[][] = [];
  for (let r = 0; r < n; r++) {
    visited[r] = [];
    for (let c = 0; c < n; c++) {
      visited[r][c] = false;
    }
  }
  const q = new Queue<[number, number]>();
  q.enqueue([0, 0]);
  let step = 1;
  function isValid(x: number, y: number): boolean {
    if (x < 0 || y < 0 || x >= n || y >= n) return false;
    return !visited[x][y] && grid[x][y] === 0;
  }
  while (q.size() > 0) {
    const size = q.size();
    for (let i = 0; i < size; i++) {
      const curr = q.dequeue();
      const [x, y] = curr;
      if (x === n - 1 && y === n - 1) return step;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (isValid(x + i, y + j)) {
            q.enqueue([x + i, y + j]);
            visited[x + i][y + j] = true;
          }
        }
      }
    }
    step++;
  }

  return -1;
}

export { shortestPathBinaryMatrix };
