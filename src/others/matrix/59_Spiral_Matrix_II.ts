function generateMatrix(n: number): number[][] {
  /*
    Input: n = 3
    Output: [[1,2,3],[8,9,4],[7,6,5]]
     */
  const res: number[][] = [];
  for (let i = 0; i < n; i++) {
    res[i] = [];
  }
  let count = 1;
  let col = 0;
  let row = 0;
  while (count <= n ** 2) {
    // right
    while (col < n && res[row][col] === undefined) {
      res[row][col] = count;
      count++;
      col++;
    }
    col--;
    row++;
    //down
    while (row < n && res[row][col] === undefined) {
      res[row][col] = count;
      count++;
      row++;
    }
    row--;
    col--;
    //left
    while (col >= 0 && res[row][col] === undefined) {
      res[row][col] = count;
      count++;
      col--;
    }
    col++;
    row--;
    //top
    while (row >= 0 && res[row][col] === undefined) {
      res[row][col] = count;
      count++;
      row--;
    }
    row++;
    col++;
  }
  return res;
}

export { generateMatrix };
