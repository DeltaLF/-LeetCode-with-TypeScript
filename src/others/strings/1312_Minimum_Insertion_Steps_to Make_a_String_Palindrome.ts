function minInsertions(s: string): number {
  /* try bottom up
  what does [i][j] stands for? 
  [i][j] means: s[i:j] min steps needed to make Palindrome
  i: subString length
  j: subString starts from

  memoArr[s.length-1][0] means subString length:s.length and start form 0
  we can start from substring length ===0: iterate thorugh j=0~s-1
  then subString === 1

  */
  const memoArr: number[][] = [];
  for (let i = 0; i < s.length; i++) {
    memoArr.push([]);
  }
  memoArr[0] = Array(s.length).fill(0);
  for (let j = 0; j < s.length - 1; j++) {
    memoArr[1][j] = s[j] === s[j + 1] ? 0 : 1;
  }
  for (let i = 2; i < s.length; i++) {
    // subString length  0 means l=r
    for (let j = 0; j < s.length - i; j++) {
      // compare strat from j len i cmp(j,j+i)
      //  agsgasg
      //    j   |j+i
      if (s[j] === s[i + j]) {
        memoArr[i][j] = memoArr[i - 2][j + 1];
      } else {
        memoArr[i][j] = Math.min(memoArr[i - 1][j], memoArr[i - 1][j + 1]) + 1;
      }
    }
  }
  return memoArr[s.length - 1][0];
}

function minInsertionsTopDown(s: string): number {
  /*
    O(n^2)
    Map(i_j) => means: for s[i:j] min steps reuqired to make  palindrom
    */
  const memo = new Map<string, number>();
  function evaluteMinMove(l: number, r: number): number {
    if (l >= r) return 0;
    if (memo.has(`${l}_${r}`)) return memo.get(`${l}_${r}`)!;
    if (s[l] === s[r]) {
      return evaluteMinMove(l + 1, r - 1);
    } else {
      // move left (duplicate s[l] on the right hand side)
      const goLeft = evaluteMinMove(l, r - 1) + 1;
      const goRight = evaluteMinMove(l + 1, r) + 1;
      memo.set(`${l}_${r}`, Math.min(goLeft, goRight));
      return memo.get(`${l}_${r}`)!;
    }
  }
  return evaluteMinMove(0, s.length - 1);
}

function minInsertionsTripleDP(s: string): number {
  /*


    Input: s = "mbadm"
    Output: 2
    
    Input: s = "leetcode"
    Output: 5
        |
    leetcode
        leetdocodteel

    abc
    i=0  abc => cbabc =>2
    i=1  cabac or acbca => 2  // is there a simple way to evaluate?
    i=2  abcba => 2

    aaabaaa
    i=2
      |
    aaabaaa
    1. AAABaa'a'AAbaaa : 6
    2.  aaAB'a'baaa    : 2

       l   r
    [...]i[...]   if l !== r should I duplicate l or r?

    

    
    s.length <= 500
    brute force: O(2n^3)  space: O(n^2)

    iterate thorough the string and set the middle point as i
      while middle point is i => evaluate how many moves are required to make a string palindrome
      => seems to be DP
    
      i=1 l=0 r=2
      abc
     */

  // i = l+1 or r-1
  let min = s.length;
  const memo = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    memo.clear();
    min = Math.min(min, evaluteMinMoveFromI(i - 1, i + 1));
    memo.clear();
    min = Math.min(min, evaluteMinMoveFromI(i, i + 1));
  }
  function evaluteMinMoveFromI(l: number, r: number): number {
    if (l < 0 || r >= s.length) {
      // aa i=0 l=-1 r=1 2-1=1
      // abc i=0 l=-1 r=1 3-1=2    i=2 l=1 r=3
      // how about a i=0 l=-1 r=1 => no problem
      return l < 0 ? s.length - r : l + 1;
    }
    if (memo.has(`${l}_${r}`)) return memo.get(`${l}_${r}`)!;
    if (s[l] === s[r]) {
      return evaluteMinMoveFromI(l - 1, r + 1);
    } else {
      // move left (duplicate s[l] on the right hand side)
      const goLeft = evaluteMinMoveFromI(l - 1, r) + 1;
      const goRight = evaluteMinMoveFromI(l, r + 1) + 1;
      memo.set(`${l}_${r}`, Math.min(goLeft, goRight));
      return memo.get(`${l}_${r}`)!;
    }
  }
  return min;
}

export { minInsertions };
