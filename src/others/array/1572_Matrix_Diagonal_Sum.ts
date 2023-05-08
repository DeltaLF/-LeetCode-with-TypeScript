function diagonalSum(mat: number[][]): number {
  /*
    Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
is odd => minus center point
     */
  const n = mat.length;
  const center = n % 2 === 1 ? mat[(n - 1) / 2][(n - 1) / 2] : 0;
  let firstD = 0;
  let secondD = 0;
  for (let i = 0; i < n; i++) {
    firstD += mat[i][i];
    secondD += mat[i][n - 1 - i];
  }
  return firstD + secondD - center;
}

export { diagonalSum };
