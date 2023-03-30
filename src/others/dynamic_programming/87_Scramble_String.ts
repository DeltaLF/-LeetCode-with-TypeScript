// super hard
function isScramble(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  function compare(sub1: string, sub2: string): boolean {
    if (sub1 === sub2) return true;
    if (sub1.length !== sub2.length) return false;
    const n = sub1.length;
    for (let i = 1; i < sub1.length; i++) {
      if (
        compare(sub1.substring(0, i), sub2.substring(0, i)) &&
        compare(sub1.substring(i, n), sub2.substring(i, n))
      )
        return true;
      // swap at current index
      if (
        compare(sub1.substring(0, i), sub2.substring(n - i)) &&
        compare(sub1.substring(i), sub2.substring(0, n - i))
      )
        return true;
    }
    return false;
  }

  return compare(s1, s2);
}

function isScrambleFail(s1: string, s2: string): boolean {
  /*
    Input: s1 = "great", s2 = "rgeat"
    Output: true

    Input: s1 = "abcde", s2 = "caebd"
    Output: false

    abcde 

    start from short strings:

     */
  if (s1 === s2) return true;
  const scarmbleStrings: Record<string, boolean> = {};
  const memoizedStrings: Record<string, boolean> = {};
  function scrambleStr(l = 0, r = s1.length - 1, s = s1) {
    // if (memoizedStrings[`${l}_${r}_${s}`]) return;
    console.log(l, r, s, scarmbleStrings);
    /*
    xxxabcoooo
       l r
    subString(0,l-1) + SCRAMBLE(subString(l,r)) + subString(r+1)

SCRAMBLE
    abcde
    l   r
    0   4
    for(i in l to r)
    i=l substring(l,i+1)  substring(i+1,r+1)  i=0 l=0 r=4
    a bcde switch   => SCRAMBLE(a)  + SCRAMBLE(bcde) 
    i=l+1
    ab cde switch   => SCRAMBLE(ab) + SCRAMBLE(cde) i=1 l=0 r=4
    
    li  r      l    r
    ab cde  => cde ab



    i=l+2
    abc de switch   => SCRAMBLE(abc) + SCRAMBLE(de)
    i=l+3
    abcd e switch   => SCRAMBLE(abcd) + SCRAMBLE(e)
    i=l+4
    abcde '' switch => SCRAMBLE(abcde) + SCRAMBLE('')


    abcdef
    l    r
      i
    */
    if (r < l) return;
    // if (r === l) {
    //   scarmbleStrings[s] = true;
    //   memoizedStrings[`${l}_${r}_${s}`];
    // }
    for (let i = l; i <= r; i++) {
      console.log(`l:${l} i:${i} r:${r} s:${s}`);
      console.log(memoizedStrings);

      const str = s
        .substring(0, l)
        .concat(
          s.substring(i + 1, r + 1),
          s.substring(l, i + 1),
          s.substring(r + 1)
        );
      console.log("sssssstr", str);
      scarmbleStrings[str] = true;
      memoizedStrings[`${l}_${r}_${str}`] = true;
      const reverseI = r - i;
      scrambleStr(l, reverseI - 1, str);
      if (reverseI >= l) {
        scrambleStr(reverseI, r, str);
      }
    }
  }
  console.log(scarmbleStrings);
  scrambleStr();
  return s2 in scarmbleStrings;
}

export { isScramble };
