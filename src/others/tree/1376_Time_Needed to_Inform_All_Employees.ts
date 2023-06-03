function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  /*
  Input: n = 1, headID = 0, manager = [-1], informTime = [0]
  Output: 0
  
  Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
  Output: 1
        2
  0 1 3  4  5

  since differnt layer might have different inform time => we should use dft
   */
  const tree: number[][] = [];
  for (let i = 0; i < n; i++) {
    tree[i] = [];
  }
  for (let i = 0; i < n; i++) {
    if (manager[i] !== -1) {
      tree[manager[i]!].push(i); //add subordinate to his manager
    }
  }
  let max = 0;
  function dft(i = headID, time = 0): void {
    if (tree[i].length === 0) {
      // i doesn't have subordinate
      max = Math.max(max, time);
      return;
    }
    for (const subordinate of tree[i]) {
      dft(subordinate, informTime[i] + time);
    }
  }
  dft();
  return max;
}

function numOfMinutesOld(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[]
): number {
  /*
    Input: n = 6, headID = 2, manager = [2,2,-1,2,2,2], informTime = [0,0,1,0,0,0]
    return 1

    DFT or BFT
    since time pass sync
    DFT -> traversal once -> find out the max time to reach leaf

      8,
      0,
      [-1, 5, 0, 6, 7, 0, 0, 0],
      [89, 0, 0, 0, 0, 523, 241, 519]

           0              89
         /  \  \  \       
        2    5  6  7
          (523)(241)(519)
              \  \  \
               1  3  4

*/
  if (n <= 1) return 0;
  const tree: number[][] = [];
  for (let i = 0; i < n; i++) {
    tree.push([]);
  }
  for (let i = 0; i < n; i++) {
    // manager[i]: parent i: child
    if (manager[i] >= 0) {
      tree[manager[i]].push(i);
    }
  }
  function dft(node: number): number {
    // return the max time from root to leaf
    if (tree[node].length === 0) return 0;
    let maxTime = -1;
    for (let child of tree[node]) {
      maxTime = Math.max(maxTime, dft(child) + informTime[node]);
    }
    return maxTime;
  }
  return dft(headID);
}

export { numOfMinutes };
