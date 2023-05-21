function shortestBridge(grid: number[][]): number {
  /*
    010
    000
    001
    return 2
    11111
    10001
    10101
    10001
    11111
    return 1


    island:[[a1,b1],[a2,a2]...]
    islandII:[[c1,d1],[c2,d2]...]
    find min bridge from iterate through all the mutual distance

    distance between [x1,y1] , [x2,y2]
    |x1-x2| (-1 if res>0) + |y1-y2| (-1 if res > 0)

    n=grid.length
    time
    O(n^4)  
    space
    O(n^2)
     */
  const n = grid.length;
  const island: number[][][] = [[], []]; //[ [[x1,y1],[x2,y2]...], [[a1,b2],..]]
  const visited: boolean[][] = [];
  for (let i = 0; i < n; i++) {
    visited[i] = Array(i).fill(false);
  }

  function dft(x: number, y: number, island: number[][]) {
    if (x < 0 || x >= n || y < 0 || y >= n || visited[x][y]) return;
    visited[x][y] = true;
    if (grid[x][y] === 0) return;
    island.push([x, y]);
    dft(x - 1, y, island);
    dft(x + 1, y, island);
    dft(x, y - 1, island);
    dft(x, y + 1, island);
  }

  let islandInd = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (!visited[x][y] && grid[x][y] === 1) {
        dft(x, y, island[islandInd]);
        islandInd++;
      }
    }
  }

  function distance(islandI: number[], islandII: number[]): number {
    const [x1, y1] = islandI;
    const [x2, y2] = islandII;
    const x = Math.abs(x1 - x2);
    const y = Math.abs(y1 - y2);
    const offset = x > 0 || y > 0 ? 1 : 0;
    return x + y - offset;
  }
  let min = 2 * n;
  for (let islandI = 0; islandI < island[0].length; islandI++) {
    for (let islandII = 0; islandII < island[1].length; islandII++) {
      min = Math.min(min, distance(island[0][islandI], island[1][islandII]));
    }
  }
  return min;
}

export { shortestBridge };
