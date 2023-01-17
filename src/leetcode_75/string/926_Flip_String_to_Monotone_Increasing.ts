function minFlipsMonoIncr(s: string): number {
  /*
       similar brutue force but use pointer 
       l r
       first loop find out if all be 1 how many flip should be done
       store as r
       l =0
    if all flip to 1 takes l+r =5
      l=0
      r=5
       1000010
    if start from 1 flip afterward to 1
      l=1 first should flip to 1
      r=5 
       1000010
    if start from 2 flip afterward to 1
      l=1
      r=4
    */
  let l = 0;
  let r = 0;
  for (let letter of s) {
    if (letter === "0") {
      r++;
    }
  }
  let minFlip = r;
  for (let letter of s) {
    if (letter === "0") {
      r--;
    } else {
      l++;
    }
    minFlip = Math.min(l + r, minFlip);
  }
  return minFlip;
}

function minFlipsMonoIncrNonOptimized(s: string): number {
  /*
    s = "00011000"

    0000111 + 0
    brutue force: O(n^2)
    for(i ~ s.length){
        evalute start from s[i] should be 1;
    }
    return min
     */
  let minFlip = Infinity;
  for (let i = 0; i <= s.length; i++) {
    // start from i, the following number should all be 1
    let flip = 0;
    for (let j = 0; j < s.length; j++) {
      if (j < i) {
        //"00011000"
        // should be 0
        flip += s[j] === "1" ? 1 : 0;
      } else {
        // should be 1
        flip += s[j] === "0" ? 1 : 0;
      }
    }
    minFlip = Math.min(minFlip, flip);
  }
  return minFlip;
}

export { minFlipsMonoIncr };
