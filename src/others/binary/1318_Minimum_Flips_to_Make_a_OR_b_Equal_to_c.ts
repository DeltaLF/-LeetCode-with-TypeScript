function minFlips(a: number, b: number, c: number): number {
  /*
    Input: a = 2, b = 6, c = 5
    Output: 3
    010
    110
    101
    Input: a = 4, b = 2, c = 7
    Output: 1
    100
    010
    111
    Input: a = 1, b = 2, c = 3
    Output: 0
    01
    10
    11
    
    if c=1
    if a or b ===1 then 0
    if a && b ===0 then1
    if c=0

     */
  let aBinary = Number(a).toString(2);
  let bBinary = Number(b).toString(2);
  let cBinary = Number(c).toString(2);
  function offset(max: number, binary: string): string {
    if (binary.length < max) {
      binary = Array(max - binary.length)
        .fill(0)
        .join("")
        .concat(binary);
    }
    return binary;
  }
  const maxLen = Math.max(aBinary.length, bBinary.length, cBinary.length);
  aBinary = offset(maxLen, aBinary);
  bBinary = offset(maxLen, bBinary);
  cBinary = offset(maxLen, cBinary);
  let count = 0;
  for (let i = 0; i < maxLen; i++) {
    if (cBinary[i] === "0") {
      if (aBinary[i] === "1") count++;
      if (bBinary[i] === "1") count++;
    } else {
      if (aBinary[i] === "0" && bBinary[i] === "0") count++;
    }
  }
  return count;
}
export { minFlips };
