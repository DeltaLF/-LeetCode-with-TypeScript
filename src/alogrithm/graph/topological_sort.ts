/*
Order a directed graph
*/

function topologicalSort(directedGraph: { [key: string]: string[] }): string[] {
  /*
    what is a topologicalSort:
    The topological sort algorithm takes a directed graph and returns an array
     of the nodes where each node appears before all the nodes it points to.

    note: cyclic graphs don't have valid topological orderings.
    directedGraph
    {
        a: ['b']
    }  
    a -> b
    */

  // make a indegree hashMap
  let nodeCount = 0;
  const indegreeMap: { [key: string]: number } = {};
  for (let node in directedGraph) {
    // iterate through the dependence
    nodeCount++;
    if (indegreeMap[node] === undefined) indegreeMap[node] = 0;
    for (let neighborNode of directedGraph[node]) {
      // add indegree count for the neighbors of curent node
      if (indegreeMap[neighborNode] > 0) {
        indegreeMap[neighborNode]++;
      } else {
        indegreeMap[neighborNode] = 1;
      }
    }
  }
  const zero_dep_node: string[] = [];
  for (let node in indegreeMap) {
    if (indegreeMap[node] === 0) {
      zero_dep_node.push(node);
    }
  }
  const resultList: string[] = [];
  while (zero_dep_node.length > 0) {
    const node = zero_dep_node.pop()!;
    resultList.push(node);
    // remove node -> decrease the indegree of node's neighbor
    directedGraph[node].forEach((neighborNode) => {
      indegreeMap[neighborNode]--;
      if (indegreeMap[neighborNode] === 0) zero_dep_node.push(neighborNode);
    });
  }
  if (resultList.length === nodeCount) return resultList;
  throw new Error("Cycle detected");
}

export { topologicalSort };
