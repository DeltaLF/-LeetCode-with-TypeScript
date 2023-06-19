function largestAltitude(gain: number[]): number {
  /*
Input: gain = [-5,1,5,0,-7]
Output: 1
 */
  let alt = 0;
  let max = 0;
  for (const diff of gain) {
    alt += diff;
    max = Math.max(max, alt);
  }
  return max;
}
