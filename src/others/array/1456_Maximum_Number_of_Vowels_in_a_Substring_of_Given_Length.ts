function maxVowels(s: string, k: number): number {
  /*
    Input: s = "abciiidef", k = 3
    Output: 3
    Input: s = "leetcode", k = 3
    Output: 2

    sliding window
    initalize the substring to length k
     */
  let l = 0;
  let r = 0;
  let vowles = 0;
  let max = 0;
  const vowlesSet = new Set(["a", "e", "i", "o", "u"]);
  for (r = 0; r < k; r++) {
    if (vowlesSet.has(s[r])) {
      vowles++;
    }
  }
  max = vowles;
  while (r < s.length) {
    if (vowlesSet.has(s[l])) vowles--;
    if (vowlesSet.has(s[r])) vowles++;
    max = Math.max(max, vowles);
    l++;
    r++;
  }
  return max;
}

export { maxVowels };
