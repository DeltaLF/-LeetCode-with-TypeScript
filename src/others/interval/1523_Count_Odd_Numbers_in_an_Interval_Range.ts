function countOdds(low: number, high: number): number {
  /*
    Input: low = 3, high = 7
    Output: 3
    4 6   - 2    4  7 -3
    3 5   - 2    3  6 -3

    make low high both even 
    count of odd: (high(even) - low(even))/2
    2 10 ->4
     */
  if (low === high) {
    return low % 2 === 0 ? 0 : 1;
  }
  let count = 0;
  // make sure low and high are both even
  if (low % 2 !== 0) {
    low++;
    count++;
  }
  if (high % 2 !== 0) {
    high--;
    count++;
  }
  count += (high - low) / 2;
  return count;
}

export { countOdds };
