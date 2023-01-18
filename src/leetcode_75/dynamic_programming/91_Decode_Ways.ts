function numDecodings(s: string): number {
  if (s.length === 0 || s[0] === "0") return 0;
  function isValid(str: string): boolean {
    if (str[str.length - 1] === "d") return false;
    const num = parseInt(str);
    if (num > 0 && num < 27) return true;
    return false;
  }
  const memoizedArr: number[] = [];
  function helper(i: number): number {
    const one = s[i];
    const two = s[i] + s[i + 1];
    if (i >= s.length) return 0;
    if (one === "0") return -1;
    if (memoizedArr[i] !== undefined) return memoizedArr[i];
    if (two === "00") return (memoizedArr[i] = -Infinity);
    if (s[i + 1] === "0") {
      if (isValid(two)) {
        return (memoizedArr[i] = helper(i + 2));
      }
      return -Infinity;
    }
    if (isValid(two)) {
      return (memoizedArr[i] = 1 + helper(i + 1) + helper(i + 2));
    } else {
      return (memoizedArr[i] = helper(i + 1));
    }
  }
  const res = helper(0);
  return isFinite(res) ? res + 1 : 0;
}

export { numDecodings };
