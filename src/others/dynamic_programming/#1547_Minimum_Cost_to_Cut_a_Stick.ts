function minCost(n: number, cuts: number[]): number {
  cuts.push(0);
  cuts.push(n);
  cuts.sort((a, b) => a - b);
  const memoObj = new Map<string, number>();
  function dft(start = 0, end = n): number {
    const key = `${start}_${end}`;
    if (memoObj.has(key)) return memoObj.get(key)!;
    let cost = Infinity;
    for (const cut of cuts) {
      if (cut > start && cut < end) {
        cost = Math.min(cost, dft(start, cut) + dft(cut, end) + end - start);
      }
    }
    const res = Number.isFinite(cost) ? cost : 0;
    memoObj.set(key, res);
    return res;
  }
  return dft();
}

export { minCost };
