function numWays(words: string[], target: string): number {
  /*
      Input: words = ["acca","bbbb","caca"], target = "aba"
      Output: 6
      Explanation: There are 6 ways to form target.
      "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")
      "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")
      "aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")
      "aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")
      "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")
      "aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca")
      
      Input: words = ["abba","baab"], target = "bab"
      Output: 4
      Explanation: There are 4 ways to form target.
      "bab" -> index 0 ("baab"), index 1 ("baab"), index 2 ("abba")
      "bab" -> index 0 ("baab"), index 1 ("baab"), index 3 ("baab")
      "bab" -> index 0 ("baab"), index 2 ("baab"), index 3 ("baab")
      "bab" -> index 1 ("abba"), index 2 ("baab"), index 3 ("baab")
              i->
      k a b   bab
      | b a
      V b a
        a b
      should I keep track on words index j? probably not because only vertical index k matter
       */

  const I = target.length; // target length
  const J = words.length; // the jth word
  const K = words[0].length; // the kth character
  const MOD = Math.pow(10, 9) + 7;
  const memo: number[][] = [];
  const freq: number[][] = [];
  for (let i = 0; i < I; i++) {
    memo.push([]);
  }

  for (let k = 0; k < K; k++) {
    freq[k] = Array(26).fill(0);
    for (let j = 0; j < J; j++) {
      const charN = words[j].charCodeAt(k) - "a".charCodeAt(0);
      freq[k][charN] += 1;
    }
  }

  function findComb(i = 0, k = 0, count = 0): number {
    if (i === I) {
      //   count = (count + 1) % (Math.pow(10, 9) + 7);
      return 1;
    }
    if (k === K) return 0;
    if (memo[i][k] !== undefined) return memo[i][k];

    const charN = target.charCodeAt(i) - "a".charCodeAt(0);
    count = (count + freq[k][charN] * findComb(i + 1, k + 1)) % MOD;
    // no luck on kth
    count = (count + findComb(i, k + 1)) % MOD;
    memo[i][k] = count;
    return count;
  }
  return findComb();
}

export { numWays };
