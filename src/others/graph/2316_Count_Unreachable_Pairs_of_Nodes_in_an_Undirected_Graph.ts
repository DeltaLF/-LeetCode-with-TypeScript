function countPairs(n: number, edges: number[][]): number {
  /*
    Input: n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
    Output: 14
    0-2
    | |
    5-4
    
    3   1-6
    
     */
  const graph: number[][] = [];
  const group: number[][] = [];
  const visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [node1, node2] of edges) {
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  function dft(node: number, nodeGroup: number[]): void {
    visited[node] = true;
    for (let adjNode of graph[node]) {
      if (!visited[adjNode]) {
        nodeGroup.push(adjNode);
        dft(adjNode, nodeGroup);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      group.push([i]);
      dft(i, group[group.length - 1]);
    }
  }
  let count = 0;
  let nodeLeft = n;
  for (let groupArr of group) {
    nodeLeft -= groupArr.length;
    count += nodeLeft * groupArr.length;
  }
  return count;
}

export { countPairs };
