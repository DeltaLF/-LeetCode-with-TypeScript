function buddyStrings(s: string, goal: string): boolean {
  /*
    s = "ab", goal = "ab"
     */
  if (s.length !== goal.length) return false;
  const diffInd: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffInd.push(i);
    }
  }
  if (diffInd.length !== 0 && diffInd.length !== 2) return false;
  if (diffInd.length === 2) {
    if (
      s[diffInd[0]] === goal[diffInd[1]] &&
      s[diffInd[1]] === goal[diffInd[0]]
    )
      return true;
    return false;
  }

  return s.length !== new Set(s).size;
}

export { buddyStrings };
