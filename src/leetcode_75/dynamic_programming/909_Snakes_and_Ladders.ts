function snakesAndLaddersDFT(board: number[][]): number {
  function tf(i: number): number[] {
    // position transform
    // return [row, col]
    const row = n - 1 - Math.floor((i - 1) / n);
    const isFromLeft = (n - row) % 2 === 1;
    const col = isFromLeft ? (i - 1) % n : n - ((i - 1) % n) - 1;
    // console.log("transform:", i, `[${row},${col}]`);
    return [row, col];
  }
  const n = board.length;
  const minStepBoard: number[][] = [];
  const firstFromLadder: boolean[][] = [];
  for (let i = 0; i < n; i++) {
    minStepBoard[i] = [];
    firstFromLadder[i] = [];
    for (let j = 0; j < n; j++) {
      minStepBoard[i][j] = Infinity;
      firstFromLadder[i][j] = true;
    }
  }
  minStepBoard[n - 1][0] = 0;
  function dft(pos: number, step = 0, isFromLadder = false) {
    if (pos >= n * n) return;
    // ladder case
    // console.log(`pos:${pos}, step:${step},${isFromLadder}`, minStepBoard);
    const [currRow, currCol] = tf(pos);
    if (board[currRow][currCol] !== -1 && !isFromLadder) {
      // noted might transfer to original location
      const [transferRow, transferCol] = tf(board[currRow][currCol]);
      //   console.log(`transfer:[${transferRow},${transferCol}]`);
      if (
        minStepBoard[transferRow][transferCol] > step ||
        (currRow === transferRow && currCol === transferCol) ||
        firstFromLadder[transferRow][transferCol]
      ) {
        firstFromLadder[transferRow][transferCol] = false;
        minStepBoard[transferRow][transferCol] = step;
        dft(board[currRow][currCol], step, true);
      }
      return;
    }
    for (let i = 6; i > 0; i--) {
      if (pos + i > n * n) continue;
      const [nextRow, nextCol] = tf(pos + i);
      if (minStepBoard[nextRow][nextCol] > step + 1 || isFromLadder) {
        minStepBoard[nextRow][nextCol] = Math.min(
          step + 1,
          minStepBoard[nextRow][nextCol]
        );
        dft(pos + i, step + 1, false);
      }
    }
  }
  dft(1, 0, false);
  const [endRow, endCol] = tf(n * n);
  //   console.log(minStepBoard);
  return Number.isFinite(minStepBoard[endRow][endCol])
    ? minStepBoard[endRow][endCol]
    : -1;
}

export { snakesAndLadders };
