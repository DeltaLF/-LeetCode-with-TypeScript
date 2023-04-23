function numberOfArrays(s: string, k: number): number {
  const MOD = 10 ** 9 + 7;
  const memoArr: number[] = [];
  function dft(i = 0): number {
    if (i >= s.length) return 1;
    if (s[i] === "0") return 0;
    if (memoArr[i] !== undefined) return memoArr[i];
    let currNum = 0;
    let count = 0;
    for (let j = i; j < s.length; j++) {
      currNum = currNum * 10 + Number(s[j]);
      if (currNum > k) break;
      count = (count + dft(j + 1)) % MOD;
    }
    return (memoArr[i] = count);
  }
  return dft();
}

function numberOfArraysFailed(s: string, k: number): number {
  /*
      Input: s = "1000", k = 10
      Output: 0
      
      Input: s = "1317", k = 2000
      Output: 8
      Explanation: Possible arrays are [1317],[131,7],[13,17],[1,317],[13,1,7],[1,31,7],[1,3,17],[1,3,1,7]
  
      131:  50:
      i=0 can I put a , here?  if no then pass
      if yes:
      -put         1,31 [0], 1,3,1  [0,1]
      -not put     13,1 [1]
      memo:{[0], [0,1],[1] 2^2 -1 
      consider 1317
      
      from left to right
      num: current carry number
      i:current num
  
  
       */
  function checkValid() {
    let num = 0;
    for (let nStr of s) {
      const n = Number(nStr);
      if (n !== 0) {
        num = n;
      } else {
        num = num * 10;
        if (num > k) return false;
      }
    }
    return true;
  }
  // should add one at end
  if (!checkValid()) return 0;
  function combine(i = 0, num = 0): number {
    if (i >= s.length) {
      return num === 0 ? 0 : 1;
    }
    // no leading zero
    if (num === 0 && Number(s[i]) === 0) return combine(i + 1, 0);

    const newNum = num * 10 + Number(s[i]);
    let carrayOn = 0;
    let restart = 0;
    if (newNum <= k) {
      carrayOn = combine(i + 1, newNum);
    }
    if (Number(s[i + 1]) !== 0) {
      restart = combine(i + 1, 0);
    }
    return restart + carrayOn;
  }

  return combine();
}

export { numberOfArrays };
