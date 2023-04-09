import { Queue } from "datastructures-js";

function largestPathValue(colors: string, edges: number[][]): number {
  /*
    Input: colors = "abaca", edges = [[0,1],[0,2],[2,3],[3,4]]
    Output: 3
    a->a->c->a
    |
    v
    b
    {
        0:{ a:3,b:1,c:1 }
        1:{b:1},
        2:{a:2,c:1}
        3:{c:1,a:1}
        4:{a:1}  
    }

    a->b
    |  ^
    c->d

    1. recover graph
    2. indegree arr
    3. [[color],[color]... node counts]
    4. start from ndoes with 0 indegree
    
    
     */
  const n = colors.length;
  const nodesColor: number[][] = [];
  const graph: number[][] = [];
  const indegrees: number[] = [];
  const zeroIndegrees = new Queue<number>();
  let processedCount = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    indegrees.push(0);
    nodesColor.push(Array(26).fill(0));
    graph.push([]);
  }
  for (let [from, to] of edges) {
    graph[from].push(to);
    indegrees[to] += 1;
  }
  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) zeroIndegrees.enqueue(i);
  }

  while (zeroIndegrees.size() > 0) {
    processedCount += 1;
    const zeroIndegree = zeroIndegrees.dequeue();
    nodesColor[zeroIndegree][
      colors.charCodeAt(zeroIndegree) - "a".charCodeAt(0)
    ] += 1;
    count = Math.max(
      count,
      nodesColor[zeroIndegree][
        colors.charCodeAt(zeroIndegree) - "a".charCodeAt(0)
      ]
    );

    for (const adjNode of graph[zeroIndegree]) {
      // decrease indegree of adjNode
      indegrees[adjNode] -= 1;
      if (indegrees[adjNode] === 0) zeroIndegrees.push(adjNode);
      // update color
      for (let colorInd = 0; colorInd < 26; colorInd++) {
        nodesColor[adjNode][colorInd] = Math.max(
          nodesColor[adjNode][colorInd],
          nodesColor[zeroIndegree][colorInd]
        );
      }
    }
  }

  return processedCount === n ? count : -1;
}

export { largestPathValue };
