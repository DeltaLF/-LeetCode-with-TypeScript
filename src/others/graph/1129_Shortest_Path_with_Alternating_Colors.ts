import { Queue } from "@datastructures-js/queue";
function shortestAlternatingPaths(
  n: number,
  redEdges: number[][],
  blueEdges: number[][]
): number[] {
  /*
    3, redEdges = [[0,2],[1,2]],  blueEdges = [[2,1],[1,2]]
    answer: [0,2,1]

    1. recover red, blue
    2. start from 0 go BFS with condiering color

     */
  function recoverGraph(edges: number[][]): number[][] {
    const graph: number[][] = [];
    for (let i = 0; i < n; i++) {
      graph.push([]);
    }
    for (let [node1, node2] of edges) {
      graph[node1].push(node2);
    }
    return graph;
  }
  const redGraph: number[][] = recoverGraph(redEdges);
  const blueGraph: number[][] = recoverGraph(blueEdges);
  const answerR: number[] = new Array(n).fill(Infinity); // answer start with Red
  const answerB: number[] = new Array(n).fill(Infinity); // answer start with Blue
  answerR[0] = 0;
  answerB[0] = 0;
  // bfs
  function bft(answer: number[], isStartRed: boolean): void {
    const queue = new Queue<number>();
    queue.enqueue(0);
    const redVisit: boolean[] = [true];
    const blueVisit: boolean[] = [true];
    let isRed = isStartRed;
    let step = 0;
    while (queue.size() > 0) {
      const len = queue.size();
      for (let i = 0; i < len; i++) {
        const node = queue.dequeue();
        const graph = isRed ? redGraph : blueGraph;
        const visit = isRed ? redVisit : blueVisit;
        for (let adjNode of graph[node]) {
          if (!visit[adjNode]) {
            visit[adjNode] = true;
            // smaller answer[adjNode] means already visited
            answer[adjNode] = Math.min(answer[adjNode], step + 1);
            queue.enqueue(adjNode);
          }
        }
      }
      isRed = !isRed; // swithcing color in every step
      step++;
    }
  }
  bft(answerR, true);
  bft(answerB, false);
  for (let i = 0; i < n; i++) {
    answerR[i] = Math.min(answerR[i], answerB[i]);
    answerR[i] = Number.isFinite(answerR[i]) ? answerR[i] : -1;
  }

  return answerR;
}

export { shortestAlternatingPaths };
