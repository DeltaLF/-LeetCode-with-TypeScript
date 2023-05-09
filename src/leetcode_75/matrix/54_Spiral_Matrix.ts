/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix: number[][]): number[] {
  /*
      Input: matrix = 
      [[1,2,3,4],
       [5,6,7,8],
       [9,10,11,12]]
      Output: [1,2,3,4,8,12,11,10,9,5,6,7]
      12
      34
      56
      78
      4*2
      2->4-1->2-1->4-2->2-2
  
      m*n 3*4
      4 -> 3-1 -> 4-1 -> 3-2 -> 4-2 -> 3-3x
      1 2 3
      4 5 6
      7 8 9
      m*n 3*3
      3 -> 3-1 -> 3-1 -> 3-2 -> 3-2
  
       */
  const res: number[] = []; // start from right top
  function traversal(direction = "r", row = 0, col = 0): void {
    if (!Number.isInteger(matrix[row]?.[col])) return;
    if (direction === "r") {
      while (Number.isInteger(matrix[row]?.[col])) {
        res.push(matrix[row][col]);
        matrix[row][col] = NaN;
        col++;
      }
      row++;
      col--;
      traversal("d", row, col);
    }
    if (direction === "d") {
      while (Number.isInteger(matrix[row]?.[col])) {
        res.push(matrix[row][col]);
        matrix[row][col] = NaN;
        row++;
      }
      row--;
      col--;
      traversal("l", row, col);
    }
    if (direction === "l") {
      while (Number.isInteger(matrix[row]?.[col])) {
        res.push(matrix[row][col]);
        matrix[row][col] = NaN;
        col--;
      }
      row--;
      col++;
      traversal("t", row, col);
    }
    if (direction === "t") {
      while (Number.isInteger(matrix[row]?.[col])) {
        res.push(matrix[row][col]);
        matrix[row][col] = NaN;
        row--;
      }
      row++;
      col++;
      traversal("r", row, col);
    }
  }
  traversal();
  return res;
}

var spiralOrderOld = function (matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  /*
    1 2 3 
    4 5 6
    7 8 9
    0 1 2
    1 2 3 6 9 2 1 0 7 4 5 8
    */
  // boundary
  let top = 0;
  let left = -1;
  let right = n;
  let bottom = m;
  const answer: number[] = [];
  // current position
  let row = 0; // 0 ~ m
  let col = 0; // 0 ~ n
  while (answer.length < m * n) {
    // go right
    while (col < right) {
      answer.push(matrix[row][col]);
      col++;
    }
    if (answer.length === m * n) break;
    right--;
    col--;
    row++;
    // go down
    while (row < bottom) {
      answer.push(matrix[row][col]);
      row++;
    }
    if (answer.length === m * n) break;
    bottom--;
    row--;
    col--;
    // go left
    while (col > left) {
      answer.push(matrix[row][col]);
      col--;
    }
    if (answer.length === m * n) break;
    left++;
    col++;
    row--;
    // go up
    while (row > top) {
      answer.push(matrix[row][col]);
      row--;
    }
    if (answer.length === m * n) break;
    top++;
    row++;
    col++;
  }

  return answer;
};

export { spiralOrder };
