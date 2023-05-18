function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  /*
        4 
        ^  <-
    0-> 1 <- 2
        ^
        3
    
    Input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
    Output: [0,2,3]

    inward  +1
    -> find all vertex without inward
     */
  const nodes = Array(n).fill(0);
  for (const [edge1, edge2] of edges) {
    nodes[edge2]++;
  }
  const ans: number[] = [];
  for (let i = 0; i < n; i++) {
    if (nodes[i] === 0) ans.push(i);
  }
  return ans;
}

export { findSmallestSetOfVertices };
