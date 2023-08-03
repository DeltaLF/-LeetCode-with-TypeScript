function letterCombinations(digits: string): string[] {
  /*
    Input: digits = "23"
    Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
     */
  if (digits.length === 0) return [];
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  } as const;
  const ans: string[] = [];
  function recursion(i = 0, strArr: string[] = []) {
    if (i >= digits.length) {
      ans.push(strArr.join(""));
      return;
    }
    const digit = digits[i] as keyof typeof map;
    for (const letter of map[digit]) {
      strArr.push(letter);
      recursion(i + 1, strArr);
      strArr.pop();
    }
  }
  recursion();
  return ans;
}
