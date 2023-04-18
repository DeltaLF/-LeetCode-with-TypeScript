function mergeAlternately(word1: string, word2: string): string {
  /*
    Input: word1 = "ab", word2 = "pqrs"
    Output: "apbqrs"
    Input: word1 = "abc", word2 = "pqr"
    Output: "apbqcr"
     */
  const res: string[] = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < word1.length && i2 < word2.length) {
    res.push(word1[i1]);
    i1++;
    res.push(word2[i2]);
    i2++;
  }
  while (i1 < word1.length) {
    res.push(word1[i1]);
    i1++;
  }
  while (i2 < word2.length) {
    res.push(word2[i2]);
    i2++;
  }
  return res.join("");
}

export { mergeAlternately };
