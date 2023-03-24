function minReorder(n: number, connections: number[][]): number {
  /*
        n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]  output:3
              2
              |
              V
        0->1->3
        ^
        |
        4 -> 5    
    
        Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]] output:2
        1->0
         \V
        3-> 2
        |
        V
        4
        Input: n = 3, connections = [[1,0],[2,0]]  output:0
    
        1. make bi-direction node map with weight 1: for current order  -1: reverse order
        2. start dft from 0
        3. if the weight > 0 => reorderCount ++    // weight > 0 means the road it depart from city 0
    
        map: [ [[dest,+-1],[dest,+-1]], [[dest,+-1]] ]
         */
  const map: number[][][] = [];
  for (let i = 0; i < n; i++) {
    map[i] = [];
  }
  for (let [from, dest] of connections) {
    map[from].push([dest, 1]); // current direction
    map[dest].push([from, -1]); // oppsite direction
  }
  let reorderCount = 0;
  function dft(node: number, from = -1): void {
    for (let [adjNode, direction] of map[node]) {
      if (adjNode !== from) {
        if (direction > 0) reorderCount++;
        dft(adjNode, node);
      }
    }
  }
  dft(0);
  return reorderCount;
}

function minReorderVisitedArr(n: number, connections: number[][]): number {
  /*
    n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]  output:3
          2
          |
          V
    0->1->3
    ^
    |
    4 -> 5    

    Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]] output:2
    1->0
     \V
    3-> 2
    |
    V
    4
    Input: n = 3, connections = [[1,0],[2,0]]  output:0

    1. make bi-direction node map with weight 1: for current order  -1: reverse order
    2. start dft from 0
    3. if the weight > 0 => reorderCount ++    // weight > 0 means the road it depart from city 0

    map: [ [[dest,+-1],[dest,+-1]], [[dest,+-1]] ]
     */
  const map: number[][][] = [];
  const visisted = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    map[i] = [];
  }
  for (let [from, dest] of connections) {
    map[from].push([dest, 1]); // current direction
    map[dest].push([from, -1]); // oppsite direction
  }
  let reorderCount = 0;
  function dft(node: number): void {
    visisted[node] = true;
    for (let [adjNode, direction] of map[node]) {
      if (!visisted[adjNode]) {
        visisted[adjNode] = true;
        if (direction > 0) reorderCount++;
        dft(adjNode);
      }
    }
  }
  dft(0);
  return reorderCount;
}

export { minReorder };
