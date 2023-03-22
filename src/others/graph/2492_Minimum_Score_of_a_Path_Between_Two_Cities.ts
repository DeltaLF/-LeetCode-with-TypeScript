import { Queue } from "datastructures-js";

function minScore(n: number, roads: number[][]): number {
  /*
    Input: n = 4, roads = [[1,2,2],[1,3,4],[3,4,7]]
    Output: 2
    Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 1 -> 3 -> 4. The score of this path is min(2,2,4,7) = 2.

    since 1 to n must be connected, we only need to find the minimum distance of all the nodes that connected to 1
     */
  /*
    graph:
    [0:x,
         // distance between 1,2 is 3,   between 1,4 is 10
     1: [ [2,3] , [4,10]],
     2: [ [1,3] , ]
    ]
    */
  const graph: number[][][] = [];
  for (let i = 0; i <= n; i++) {
    graph[i] = [];
  }
  for (const [from, dest, dist] of roads) {
    graph[from].push([dest, dist]);
    graph[dest].push([from, dist]);
  }
  const queue = new Queue<number>();
  const visited = Array(n + 1).fill(false);
  let min = Infinity;
  queue.enqueue(1);
  visited[1] = true;
  while (queue.size() > 0) {
    const size = queue.size();
    for (let i = 0; i < size; i++) {
      const node = queue.dequeue();
      for (let [adjNode, dist] of graph[node]) {
        min = Math.min(min, dist);
        if (!visited[adjNode]) {
          visited[adjNode] = true;
          queue.enqueue(adjNode);
        }
      }
    }
  }
  return min;
}

export { minScore };
