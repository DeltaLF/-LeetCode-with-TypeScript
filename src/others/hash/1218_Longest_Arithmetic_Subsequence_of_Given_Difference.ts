function longestSubsequence(arr: number[], difference: number): number {
  /*
    Input: arr = [1,2,3,4], difference = 1
    Output: 4
     */
  const map = new Map<string, number>();
  for (const num of arr) {
    const ariNum = (num - difference).toString();
    if (map.has(ariNum)) {
      map.set(num.toString(), map.get(ariNum)! + 1);
    } else {
      map.set(num.toString()!, 1);
    }
  }
  let max = 0;
  for (const [_, num] of map) {
    max = Math.max(num, max);
  }
  return max;
}

export { longestSubsequence };
