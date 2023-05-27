function stoneGameII(piles: number[]): number {
  /*
      
      Input: piles = [2,7,9,4,4]
      Output: 10
       */

  const memoObj: Record<string, number> = {};
  function game(i = 0, m = 1, isAlice = true): number {
    if (i >= piles.length) return 0;
    const key = `${i}_${m}_${isAlice}`;
    if (memoObj[key] !== undefined) return memoObj[key];
    let res = isAlice ? 0 : Infinity;
    let sum = 0;
    for (let x = 1; x <= m * 2; x++) {
      if (i + x - 1 >= piles.length) break;
      sum += piles[i + x - 1];
      if (isAlice) {
        res = Math.max(res, game(i + x, Math.max(x, m), !isAlice) + sum);
      } else {
        // bob turns
        res = Math.min(res, game(i + x, Math.max(x, m), !isAlice));
      }
    }
    return (memoObj[key] = res);
  }

  return game();
}

export { stoneGameII };
