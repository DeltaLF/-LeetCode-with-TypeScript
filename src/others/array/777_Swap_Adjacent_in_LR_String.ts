function canTransform(start: string, end: string): boolean {
  /*
    only XL to LX and RX to XR
    XXXXLLLLXRRXR => only L can go left , R can go right
    XXXLLLLXXXRRR
    l
    r
    */
  let s = 0;
  let e = 0;
  const n = start.length;
  while (s < n || e < n) {
    while (start[s] === "X") {
      s++;
    }
    while (end[e] === "X") {
      e++;
    }
    if (start[s] !== end[e]) return false;
    if (start[s] === "L") {
      // L in end is on the right hand side
      if (e > s) return false;
      s++;
      e++;
      continue;
    }
    if (start[s] === "R") {
      // R in end is on the left hand side
      if (e < s) return false;
      s++;
      e++;
    }
  }
  return true;
}

function canTransformTrivial(start: string, end: string): boolean {
  /*
    we can only swap XL to LX , RX to XR
    LX,RX,LR... are not allowed
    "RXXLRXRXL", end = "XRLXXRRLX"
    Output: true

    1. transform string to array => mutate is much more efficinet
    2. itearte through from right to left if the letter different
      if it's X,R 
        no=>false
        yes=> is next L , X repectively
        swap

    "XXXXXLX", "LXXXXXX"
    should start from end because once a swap happens, there might be new swap available
    "XXRXLXRXXX", "XXRLXXXXXR
    XXRXLXRXXX
    XXRLXXXXXR=>
     */
  const s = start.split("");
  const e = end.split("");
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== e[i]) {
      if (
        (s[i] === "L" && s[i - 1] === "X" && e[i] === "X") ||
        (s[i] === "X" && s[i - 1] === "R" && e[i] === "R")
      ) {
        //swap
        [s[i], s[i - 1]] = [s[i - 1], s[i]];
      } else {
        if (s[i] === "L" && s[i - 1] == "L" && e[i] === "X") {
          let j = i - 2;
          while (s[j] === "L") {
            j--;
          }
          if (s[j] === "X") {
            [s[i], s[j]] = [s[j], s[i]];
            continue;
          }
        }
        if (s[i] === "X" && s[i - 1] === "X" && e[i] === "R") {
          let j = i - 2;
          while (s[j] === "X") {
            j--;
          }
          if (s[j] === "R") {
            [s[i], s[j]] = [s[j], s[i]];
            continue;
          }
        }
        return false;
      }
    }
    // continue if s[i] === e[i]
  }
  return true;
}

export { canTransform };
