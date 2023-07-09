function largestVariance(s: string): number {
  /*
      Input: s = "aababbb"
      Output: 3
      
      all combination: O(n^2)
      i=0   len= 0 ~n
      i=1   len= 1~n
      ...
      i=n-1 len=1
  

    
       */

  function findVariance(s1: string, s2: string): number {
    // target is to maximize s1
    let firstB = false;
    let hasB = false;
    let diff = 0;
    let max = 0;
    for (const char of s) {
      if (char === s1) diff++;
      if (char === s2) {
        hasB = true;
        if (firstB && diff >= 0) {
          // remove the first s2
          firstB = false;
        } else if (--diff < 0) {
          // reset to start with s2
          firstB = true;
          diff = -1;
        }
      }
      if (hasB) max = Math.max(max, diff);
    }
    return max;
  }

  let globalMax = 0;
  const alphabet = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    alphabet[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  const setS = new Set(s);
  for (const s1 of setS) {
    // maximum: 26^2
    for (const s2 of setS) {
      if (alphabet[s1.charCodeAt(0) - "a".charCodeAt(0)] > 1) {
        globalMax = Math.max(findVariance(s1, s2), globalMax);
      }
    }
  }
  return globalMax;
}
export { largestVariance };
