function stoneGameIII(stoneValue: number[]): string {
  /*
    Input: values = [1,2,3,7]
    Output: "Bob"
    Input: values = [1,2,3,-9]
    Output: "Alice"
    Input: values = [1,2,3,6]
    Output: "Tie"

    for Alice turn try to get as much point as possible 

    [1,2,3,7]



     */
  const n = stoneValue.length;
  const memoObj = new Map<string, number>();
  function game(i = 0, isAlice = true): number {
    if (i >= n) return 0;
    const key = `${i}_${isAlice ? 1 : 0}`;
    if (memoObj.has(key)) return memoObj.get(key)!;
    let score = isAlice ? -Infinity : Infinity;
    let sum = 0;
    if (isAlice) {
      for (let j = 1; j <= 3; j++) {
        if (i + j > n) break;
        sum += stoneValue[i + j - 1];
        score = Math.max(score, game(i + j, !isAlice) + sum);
      }
    } else {
      // Bob's trun
      for (let j = 1; j <= 3; j++) {
        if (i + j > n) break;
        sum += stoneValue[i + j - 1];
        score = Math.min(score, game(i + j, !isAlice) - sum);
      }
    }
    memoObj.set(key, score);
    return score;
  }
  const result = game();
  if (result === 0) return "Tie";
  return result > 0 ? "Alice" : "Bob";
}
export { stoneGameIII };
