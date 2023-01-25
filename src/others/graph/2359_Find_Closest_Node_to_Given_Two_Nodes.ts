function closestMeetingNode(
  edges: number[],
  node1: number,
  node2: number
): number {
  /*
    Input: edges = [2,2,3,-1], node1 = 0, node2 = 1
    Output: 2
       0 -> 2 <- 1
            |
            3
    [4, 3, 0, 5, 3, -1] 4, 0
    
    2 -> 0 -> 4
              |   
              v
         1 -> 3 -> 5
         
     */
  const n = edges.length;
  const node1VisitPath: number[] = Array(n).fill(-1);
  const node2VisitPath: number[] = Array(n).fill(-1);
  function traversal(node: number, pathRecord: number[], distance = 0): void {
    // prevent circle
    if (pathRecord[node] > -1) return;
    // add record ex: start from 3 pathRecord[3] = 0;
    pathRecord[node] = distance;
    if (edges[node] !== -1) {
      traversal(edges[node], pathRecord, distance + 1);
    }
  }
  traversal(node1, node1VisitPath, 0);
  traversal(node2, node2VisitPath, 0);

  let minDist = Infinity;
  let targetNode = -1;
  for (let i = 0; i < edges.length; i++) {
    const dist1 = node1VisitPath[i];
    const dist2 = node2VisitPath[i];
    if (dist1 > -1 && dist2 > -1 && Math.max(dist1, dist2) < minDist) {
      minDist = Math.max(dist1, dist2);
      targetNode = i;
    }
  }
  return targetNode;
}
export { closestMeetingNode };
