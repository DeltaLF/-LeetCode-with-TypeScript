function exist(board: string[][], word: string): boolean {
  function findWord(row: number, col: number, wordInd = 0): boolean {
    if (wordInd === word.length) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= m ||
      col >= n ||
      board[row][col] !== word[wordInd]
    )
      return false;
    const temp = board[row][col];
    board[row][col] = "#";
    const up = findWord(row - 1, col, wordInd + 1);
    const right = findWord(row, col + 1, wordInd + 1);
    const left = findWord(row, col - 1, wordInd + 1);
    const down = findWord(row + 1, col, wordInd + 1);
    const result = up || right || left || down;
    board[row][col] = temp;
    return result;
  }
  const m = board.length;
  const n = board[0].length;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (findWord(row, col, 0)) return true;
    }
  }
  return false;
}

function existFirstTry(board: string[][], word: string): boolean {
  /*
    Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 
    word = "SEE"

        A B C E
        S F C S
        A D E E

        1. iterate thorugh matrix to find first letter mn
        2. recursivly check the word                 3^word (front left right but not back)

[["A","B","C","E"],
 ["S","F","E","S"],
 ["A","D","E","E"]]
"ABCESEEEFS"
     */
  //from
  let locRecord = new Set<string>();
  function findWord(row: number, col: number, wordInd = 0): boolean {
    if (wordInd === word.length) return true;
    const loc = `${row}_${col}`;
    if (
      locRecord.has(loc) ||
      row < 0 ||
      col < 0 ||
      row >= m ||
      col >= n ||
      board[row][col] !== word[wordInd]
    )
      return false;
    locRecord.add(loc);
    const up = findWord(row - 1, col, wordInd + 1);
    const right = findWord(row, col + 1, wordInd + 1);
    const left = findWord(row, col - 1, wordInd + 1);
    const down = findWord(row + 1, col, wordInd + 1);
    const result = up || right || left || down;
    if (!result) locRecord.delete(loc);
    return result;
  }
  const m = board.length;
  const n = board[0].length;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      locRecord.clear();
      if (findWord(row, col, 0)) return true;
    }
  }
  return false;
}

export { exist };
