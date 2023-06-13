function equalPairs(grid: number[][]): number {
  /*
    321
    176
    277


    11
    11

    10
    01
    11
    22
    */
  const n = grid.length;
  let count = 0;
  const rows = new Map<string, number>();
  for (const row of grid) {
    const strR = row.join(",");
    if (rows.has(strR)) {
      rows.set(strR, rows.get(strR)! + 1);
    } else {
      rows.set(strR, 1);
    }
  }
  let col: number[] = [];
  for (let c = 0; c < n; c++) {
    col = [];
    for (let r = 0; r < n; r++) {
      col.push(grid[r][c]);
    }
    const strC = col.join(",");
    if (rows.has(strC)) {
      count += rows.get(strC)!;
    }
  }
  return count;
}

export { equalPairs };
