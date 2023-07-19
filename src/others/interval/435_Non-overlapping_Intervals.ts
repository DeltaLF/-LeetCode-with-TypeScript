function eraseOverlapIntervals(intervals: number[][]): number {
  /*
    Input: intervals = [[1,2],[2,3],[3,4],[1,3]] 1
    Input: intervals = [[1,2],[1,2],[1,2]] 2

    i1, i2, i3, ...

    1-5 1-15 6-11
    might need DP or Binary Search?
    O(N) find the maximum intervals to remove => but we don't have to remove all of them
    brute force:

     */
  intervals.sort((a, b) => a[1] - b[1]);
  const N = intervals.length;
  let curr = intervals[0];
  let removeCount = 0;
  for (let i = 1; i < N; i++) {
    if (intervals[i][0] < curr[1]) {
      removeCount++;
    } else {
      curr = intervals[i];
    }
  }
  return removeCount;
}

export { eraseOverlapIntervals };
