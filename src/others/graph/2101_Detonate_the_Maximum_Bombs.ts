function maximumDetonation(bombs: number[][]): number {
  /*
    boombs count: 100
    iterate through twice 100^2 O(10^4)
    seems to be union find
    bombUnit[]
    is bomb interacte?
    sqrt(|x1-x2|^2+|y1-y2|^2) <= r1 + r2
     */
  const n = bombs.length;
  function dft(currBomb: number, visit: boolean[]): number {
    let count = 1;
    visit[currBomb] = true;
    for (let i = 0; i < n; i++) {
      if (i !== currBomb && !visit[i] && isOverlap(currBomb, i)) {
        count += dft(i, visit);
      }
    }
    return count;
  }

  function isOverlap(i: number, j: number): boolean {
    const c1 = bombs[i];
    const c2 = bombs[j];
    return c1[2] ** 2 >= (c1[0] - c2[0]) ** 2 + (c1[1] - c2[1]) ** 2;
  }
  let max = 0;
  for (let i = 0; i < n; i++) {
    const visit = Array(n).fill(false);
    max = Math.max(max, dft(i, visit));
  }
  return max;
}

export { maximumDetonation };
