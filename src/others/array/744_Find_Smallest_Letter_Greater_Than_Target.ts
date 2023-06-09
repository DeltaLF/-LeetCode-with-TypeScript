function nextGreatestLetter(letters: string[], target: string): string {
  let resNum = "z".charCodeAt(0) + 1;
  for (const char of letters) {
    if (char.charCodeAt(0) > target.charCodeAt(0)) {
      resNum = Math.min(char.charCodeAt(0), resNum);
    }
  }
  return resNum === "z".charCodeAt(0) + 1
    ? letters[0]
    : String.fromCharCode(resNum);
}

export { nextGreatestLetter };
