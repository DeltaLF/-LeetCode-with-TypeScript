function longestPalindromeSubseq(s: string): number {
  /*
      Input: s = "bbbab"
      Output: 4  bbbb
      
      Input: s = "cbbd"
      Output: 2  bb
  
      bbbab
      l   r
  
      s[l] === s[r]
      l++ r--
      else 
      we can try:
      find(l++)
      find(r--)
      find(l++,r--) // is this necessary?  nope, this will be covered by first l++ then r-- or first r-- then l++
      */
  const memoizedMap = new Map<string, number>();

  function findPalind(l = 0, r = s.length - 1): number {
    console.log(s, "l", l, "r", r);
    if (l > r) return 0; // end of finding
    if (l === r) return 1; // the middle of a palindromic
    if (memoizedMap.has(`${l}_${r}`)) return memoizedMap.get(`${l}_${r}`)!;
    if (s[l] === s[r]) {
      // matched
      return 2 + findPalind(l + 1, r - 1);
    } else {
      // try move left
      const moveLeft = findPalind(l + 1, r);
      // try move right
      const moveRight = findPalind(l, r - 1);
      memoizedMap.set(`${l}_${r}`, Math.max(moveLeft, moveRight));
      return memoizedMap.get(`${l}_${r}`)!;
    }
  }
  return findPalind();
}

export { longestPalindromeSubseq };
