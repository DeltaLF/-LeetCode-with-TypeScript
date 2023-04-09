function closedIsland(grid: number[][]): number {
  let island = 0;
  const height = grid.length;
  const width = grid[0].length;

  function dft(r: number, c: number): boolean {
    if (r < 0 || c < 0 || r >= height || c >= width) return false; // over boundry
    if (grid[r][c] === 1 || grid[r][c] === -1) return true; // sea
    grid[r][c] = -1; // mark land as -1 for visited
    const up = dft(r - 1, c);
    const right = dft(r, c + 1);
    const down = dft(r + 1, c);
    const left = dft(r, c - 1);
    return up && right && down && left; // return false if any land is adjacent to bondary
  }

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (grid[r][c] === 0) {
        if (dft(r, c)) island++;
      }
    }
  }
  return island;
}

function closedIslandVisitedArr(grid: number[][]): number {
  /*
    Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
    Output: 2
    Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
    Output: 1
    00100
    01010
    01110

    we need 
    1. an array to record visited 
    2. dft helper function 
       a closed island => never adjacent to outter map (-1,m,n)
       mark land as visited
     */
  let island = 0;
  const height = grid.length;
  const width = grid[0].length;
  const visited: boolean[][] = [];
  for (let r = 0; r < height; r++) {
    visited.push([]);
  }

  function dft(r: number, c: number): boolean {
    if (r < 0 || c < 0 || r >= height || c >= width) return false; // over boundry
    if (grid[r][c] === 1 || visited[r][c] === true) return true; // sea
    visited[r][c] = true; // mark as visited
    const up = dft(r - 1, c);
    const right = dft(r, c + 1);
    const down = dft(r + 1, c);
    const left = dft(r, c - 1);
    return up && right && down && left; // return false if any land is adjacent to bondary
  }

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (grid[r][c] === 0 && visited[r][c] !== true) {
        if (dft(r, c)) island++;
      }
    }
  }
  return island;
}

export { closedIsland };
