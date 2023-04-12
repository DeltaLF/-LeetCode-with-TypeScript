function isValid(s: string): boolean {
  /*
    Input: s = "()[]{}"
    Output: true
     */
  const stack: string[] = [];
  const map: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let str of s) {
    if (str in map) {
      // compare right part
      if (stack.length === 0) return false;
      const leftPart = stack.pop()!;
      if (map[str] !== leftPart) return false;
    } else {
      // push left part
      stack.push(str);
    }
  }
  return stack.length === 0;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValidOld = function (s: string): boolean {
  const stack: string[] = [];
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      const top = stack.pop();
      if (
        (c === ")" && top === "(") ||
        (c === "}" && top === "{") ||
        (c === "]" && top === "[")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

export { isValid };
