import { Queue } from "datastructures-js";

function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start: number,
  end: number
): number {
  /*
    Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
    Output: 0.25000
     */

  const graph: Record<number, number>[] = [];
  const possMap: number[] = [];
  for (let i = 0; i < n; i++) {
    graph.push({});
    possMap[i] = 0;
  }
  possMap[start] = 1;
  for (let i = 0; i < edges.length; i++) {
    const [loc1, loc2] = edges[i];
    const prob = succProb[i];
    graph[loc1][loc2] = prob;
    graph[loc2][loc1] = prob;
  }
  const q = new Queue<number>();
  q.enqueue(start);
  while (q.size() > 0) {
    const size = q.size();
    for (let i = 0; i < size; i++) {
      const node = q.dequeue()!;
      for (const [adjNodeStr, succP] of Object.entries(graph[node])) {
        const adjNode = parseInt(adjNodeStr);
        const pathProb = possMap[node] * succP;
        if (possMap[adjNode] < pathProb) {
          possMap[adjNode] = pathProb;
          q.enqueue(adjNode);
        }
      }
    }
  }

  return possMap[end];
}

export { maxProbability };
