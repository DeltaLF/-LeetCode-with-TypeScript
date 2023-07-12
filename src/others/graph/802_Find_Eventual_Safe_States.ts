function eventualSafeNodes(graph: number[][]): number[] {
  /*
    Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
    Output: [2,4,5,6]
    
    1. make bi-direct map
    2. pick the safe place
    3. from those picked safe place find the what node also goes to safe place
    4. 
     */
  const N = graph.length;
  const map: number[][] = []; // bi-direct map
  const isSafe = new Array(N).fill(0); // 0 undefined, 1 safe, 2 unsafe
  const potentialS = new Set<number>();

  for (let i = 0; i < N; i++) {
    map[i] = graph[i].slice();
  }
  for (let i = 0; i < N; i++) {
    for (const adjNode of graph[i]) {
      map[adjNode].push(i); // add a path from adjNode to i
    }
  }
  for (let i = 0; i < N; i++) {
    if (graph[i].length === 0) {
      isSafe[i] = 1;
      for (const adjNode of map[i]) {
        potentialS.add(adjNode);
      }
    }
  }
  function isAllAdjSafe(i: number): boolean {
    for (const adjNode of graph[i]) {
      if (isSafe[adjNode] !== 1) return false;
    }
    return true;
  }
  while (potentialS.size > 0) {
    for (const node of potentialS) {
      potentialS.delete(node);
      // check all adjsafe
      if (isSafe[node] !== 1 && isAllAdjSafe(node)) {
        isSafe[node] = 1;
        // add adj
        for (const adjNode of map[node]) {
          potentialS.add(adjNode);
        }
      }
    }
  }
  const ans: number[] = [];
  for (let i = 0; i < N; i++) {
    if (isSafe[i] === 1) {
      ans.push(i);
    }
  }

  return ans;
}

export { eventualSafeNodes };
