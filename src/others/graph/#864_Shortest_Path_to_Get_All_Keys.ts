import { Queue } from "datastructures-js";

function shortestPathAllKeys(grid: string[]): number {
  /*
        visit map
        key is binary to represent keys  key: 
        a: 00000
        b: 00001
        c: 00020
        d: 00021
        {
            ( row, col, key, distance ):true
        }
        for simplity 'FFFFFF' to represent key status

        bft Queue( (row,col, key, distance))
        */
  const LOWERCASES = "abcdef";
  const UPPERCASES = "ABCDEF";
  const m = grid.length;
  const n = grid[0].length;
  let rowStart = -1;
  let colStart = -1;
  let keysStatus = "ffffff";
  const visited = new Map<string, boolean>(); // visited[`${keys}_${row}_${col}`]

  const q = new Queue<[number, number, string, number]>();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "@") {
        rowStart = i;
        colStart = j;
      }
      if (LOWERCASES.indexOf(grid[i][j]) >= 0) {
        const keyInd = LOWERCASES.indexOf(grid[i][j]);
        keysStatus =
          keysStatus.substring(0, keyInd) +
          "t" +
          keysStatus.substring(keyInd + 1);
      }
    }
  }
  q.enqueue([rowStart, colStart, "ffffff", 0]);
  while (q.size() > 0) {
    const size = q.size();
    for (let i = 0; i < size; i++) {
      let [row, col, keys, dist] = q.dequeue()!;
      if (row < 0 || row >= m || col < 0 || col >= n) continue;
      const char = grid[row][col];
      const visitKey = `${keys}_${row}_${col}`;
      const isLcokOpen = keys[UPPERCASES.indexOf(char)] === "t";
      if (
        visited.has(visitKey) ||
        char === "#" ||
        (UPPERCASES.indexOf(char) >= 0 && !isLcokOpen)
      )
        continue;
      if (LOWERCASES.indexOf(char) >= 0) {
        // update keys state
        const keyInd = LOWERCASES.indexOf(char);
        keys = keys.substring(0, keyInd) + "t" + keys.substring(keyInd + 1);
      }
      if (keysStatus === keys) return dist;
      visited.set(`${keys}_${row}_${col}`, true);
      // go up
      q.enqueue([row - 1, col, keys, dist + 1]);
      // go right
      q.enqueue([row, col + 1, keys, dist + 1]);
      // go down
      q.enqueue([row + 1, col, keys, dist + 1]);
      // go left
      q.enqueue([row, col - 1, keys, dist + 1]);
    }
  }

  return -1;
}

export { shortestPathAllKeys };
