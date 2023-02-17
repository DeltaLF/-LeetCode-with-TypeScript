function uniquePaths(m: number, n: number): number {
  /*
        1 1  1  1
        1 2  3  4
        1 3  6 10
        1 4 10 14
    */
  if (m === 1 || n === 1) return 1;
  const rowArr: number[] = new Array(n).fill(1);
  let uniq = 0;
  let left = 0;
  for (let row = 1; row < m; row++) {
    left = 1;
    for (let col = 1; col < n; col++) {
      uniq = rowArr[col] + left;
      left = uniq;
      rowArr[col] = left;
    }
  }
  return uniq;
}
function uniquePathsBottomUp(m: number, n: number): number {
  /*
        try bottom up
        1 1 1
        1 2 3
        1 3 6
        */
  const memoizedArr: number[][] = [new Array(n).fill(1)];
  for (let row = 1; row < m; row++) {
    memoizedArr[row] = [1];
  }
  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      memoizedArr[row][col] =
        memoizedArr[row - 1][col] + memoizedArr[row][col - 1];
    }
  }
  return memoizedArr[m - 1][n - 1];
}

function uniquePathsUpToBottom(m: number, n: number): number {
  /*
        Input: m = 3, n = 2
        Output: 3
        o o 
        o o
        o o
        at 
        6  3  1
        3  2  1
        1  1  1

        pos x,y unique path = sum((x+1,y),(x,y+1))
        */
  let count = 0;
  const memoizedArr: number[][] = [];
  for (let row = 0; row < m; row++) {
    memoizedArr.push([]);
  }
  function dp(row: number, col: number): number {
    if (memoizedArr[row][col] !== undefined) return memoizedArr[row][col];
    if (row === m - 1 && col === n - 1) return 1;
    if (row === m - 1) return dp(row, col + 1);
    if (col === n - 1) return dp(row + 1, col);
    const goRight = dp(row, col + 1);
    const goDown = dp(row + 1, col);
    return (memoizedArr[row][col] = goRight + goDown);
  }
  return dp(0, 0);
}

export { uniquePaths };
