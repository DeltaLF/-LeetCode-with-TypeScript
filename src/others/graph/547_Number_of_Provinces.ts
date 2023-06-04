function findCircleNum(isConnected: number[][]): number {
  /*
    Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
    0-1,  2
    */
  const n = isConnected.length;
  const visited = Array(n).fill(false);
  let count = 0;
  function dft(i: number) {
    if (visited[i]) return;
    visited[i] = true;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && isConnected[i][j] === 1) {
        dft(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dft(i);
    }
  }
  return count;
}

export { findCircleNum };
