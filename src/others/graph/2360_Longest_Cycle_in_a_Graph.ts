function longestCycle(edges: number[]): number {
  const n = edges.length;
  const travelDistance: number[] = [];
  let maxCycle = -1;
  function dft(node: number, step = 0): void {
    if (node === -1 || edges[node] === undefined || edges[node] === -1) {
      return;
    }
    if (travelDistance[node] > 0) {
      maxCycle = Math.max(maxCycle, step - travelDistance[node]);
      return;
    }
    travelDistance[node] = step;
    dft(edges[node], step + 1);
    edges[node] = -1; // clean visited nodes
  }
  for (let i = 0; i < n; i++) {
    dft(i);
  }
  return maxCycle;
}

function longestCycleFailedAgain(edges: number[]): number {
  /*

           how about do dft and record how far does each node eventually meets a visited node
           we need keep track: 1. current step  2. every node's starts step
watch out those nodes outside cycle

*/
  const travelDistance: number[] = [];
  // const visited = Array(edges.length).fill(false);
  function dft(node: number, currStep = 0): number {
    if (node === -1 || travelDistance[node] !== undefined) {
      if (node === -1 || travelDistance[node] < 0) return 0;
      return currStep;
    }
    travelDistance[node] = currStep;
    const finalTravelDistance = dft(edges[node], currStep + 1);
    if (finalTravelDistance === 0) {
      travelDistance[node] = -1;
      return 0;
    }
    travelDistance[node] = travelDistance[node] - finalTravelDistance; // on puporse to make answer negative
    return finalTravelDistance;
  }
  for (let i = 0; i < edges.length; i++) {
    dft(i);
  }
  const max = -Math.min(...travelDistance);
  return max === 1 ? -1 : max;
}

function longestCycleFailed(edges: number[]): number {
  /*
    each node has at most one outgoing
      1 \ >
      0 -> 3
           |  <
           V   \ 
           2 -> 4
    
           set ingoing :1 outgoing: -1
           those node with negative summation should be eliminated (never participate in cycle)
           those node without outgoing should also be eliminated
           error: if there are more than one circle, this algorithm cannot tell

           how about do dft and record how far does each node eventually meets a visited node
           we need keep track: 1. current step  2. every node's starts step
     */
  const graph = new Map<string, number>();
  for (let i = 0; i < edges.length; i++) {
    graph.set(i.toString(), 0);
  }
  for (let i = 0; i < edges.length; i++) {
    if (edges[i] < 0) {
      // no outgoing
      graph.set(edges[i].toString(), -Infinity);
    } else {
      graph.set(i.toString(), graph.get(i.toString())! - 1);
      const ingoingNode = edges[i].toString();
      graph.set(ingoingNode, graph.get(ingoingNode)! + 1);
    }
  }
  console.log(graph);
  let stillNegative = true;
  while (stillNegative) {
    stillNegative = false;
    for (let key of graph.keys()) {
      const value = graph.get(key)!;
      if (value < 0) {
        //delete those summation is less than 0
        stillNegative = true;
        // before deleting, the target of it desition should also be modified
        const target = edges[parseInt(key)];
        if (target >= 0) {
          graph.set(target.toString(), graph.get(target.toString())! - 1);
        }
        graph.delete(key);
      }
    }
  }

  return graph.size;
}

export { longestCycle };
