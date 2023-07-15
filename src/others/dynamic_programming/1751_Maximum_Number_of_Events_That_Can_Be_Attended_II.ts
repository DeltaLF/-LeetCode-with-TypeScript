function maxValue(events: number[][], k: number): number {
  /*
    Input: events = [[1,2,4],[3,4,3],[2,3,1]], k = 2
    Output: 7
    
     */
  events.sort((a, b) => a[0] - b[0]);
  const memo = new Map<string, number>();
  function arrange(i = 0, kLeft = k, day = 1): number {
    if (i >= events.length || kLeft === 0) return 0;
    if (day > events[i][0]) return arrange(i + 1, kLeft, day);
    const key = `${i}_${kLeft}_${day}`;
    if (memo.has(key)) return memo.get(key)!;
    let take = 0;
    if (day <= events[i][0] && kLeft > 0) {
      take = arrange(i + 1, kLeft - 1, events[i][1] + 1) + events[i][2];
    }
    const notTake = arrange(i + 1, kLeft, day);

    const max = Math.max(take, notTake);
    memo.set(key, max);
    return max;
  }
  return arrange();
}

export { maxValue };
