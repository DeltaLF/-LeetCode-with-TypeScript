function partitionString(s: string): number {
  let map: boolean[] = [];
  let count = 1;
  for (let char of s) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    if (map[index]) {
      count++;
      map = [];
      map[index] = true;
    } else {
      map[index] = true;
    }
  }
  return count;
}

function partitionStringObj(s: string): number {
  /*
    Input: s = "abacaba"
    Output: 4
    ("a","ba","cab","a") and ("ab","a","ca","ba")

    prepare a current map and then itearate through string
    1. if curr char is dupliacted in current => add a new substring and reset current map
    2. else update curr map continue
     */
  let map: Record<string, boolean> = {};
  let count = 1;
  for (let char of s) {
    if (char in map) {
      count++;
      map = {};
      map[char] = true;
    } else {
      map[char] = true;
    }
  }
  return count;
}

export { partitionString };
