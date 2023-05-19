function isBipartite(graph: number[][]): boolean {
  /*
    Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
    Output: false
    
    Input: graph = [[1,3],[0,2],[1,3],[0,2]]
    Output: true
    
    0 - 3
    |   |
    1 - 2

    every node is either in set A or set B
    we can randomly pick 0 as set A then => every connected nodes must be set B
    then we check all the others nodes follow the same pattern
    if not => is not biartite

    we can not simply iterate from 0 to n-1
    because in such order some nodes might not be assigned into to set
    => use DFT instead
     */
  const sets = [new Set<number>(), new Set<number>()];
  const visited = Array(graph.length).fill(false);
  sets[0].add(0);

  // set 0->a 1->b
  function dft(node = 0, set = 0): boolean {
    if (visited[node]) return true;
    visited[node] = true;
    const oppositeSet = set === 0 ? 1 : 0;
    let isValid = true;
    for (const adjNode of graph[node]) {
      if (sets[set].has(adjNode)) return false; // adjNode must in the different
      sets[oppositeSet].add(adjNode);
      isValid = isValid && dft(adjNode, oppositeSet);
    }
    return isValid;
  }
  for (let i = 0; i < graph.length; i++) {
    // iterate through because not all nodes are connected
    if (visited[i]) continue;
    const result = dft(i, 0);
    if (!result) return false;
  }
  return true;
}

export { isBipartite };
