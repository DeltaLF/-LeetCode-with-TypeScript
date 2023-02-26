function minDistance(word1: string, word2: string): number {
  // inital set as max operations possibile number
  /*
    abc
    hic
    */
  const w1L = word1.length;
  const w2L = word2.length;
  const memoizedObj: { [key: string]: number } = {};
  function findMin(w1: number = 0, w2: number = 0): number {
    // return the minDist needed
    if (memoizedObj[`${w1}_${w2}`] !== undefined) {
      return memoizedObj[`${w1}_${w2}`];
    }
    if (w1 === w1L && w2 === w2L) return 0;
    if (w1 === w1L) return w2L - w2; // w1 is over, insert the remaining
    if (w2 === w2L) return w1L - w1; // w2 is over, delete the remaining
    if (word1[w1] === word2[w2]) {
      return findMin(w1 + 1, w2 + 1);
    }
    // try delete
    const tryDelete = findMin(w1 + 1, w2) + 1;
    const tryInsert = findMin(w1, w2 + 1) + 1;
    const tryReplace = findMin(w1 + 1, w2 + 1) + 1;
    return (memoizedObj[`${w1}_${w2}`] = Math.min(
      tryDelete,
      tryInsert,
      tryReplace
    ));
  }
  return findMin(0, 0);
}

export { minDistance };
