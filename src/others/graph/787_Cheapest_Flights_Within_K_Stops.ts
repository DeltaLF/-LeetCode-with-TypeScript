function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const graph: { [key: string]: number }[] = [];
  for (let i = 0; i < n; i++) {
    graph[i] = {};
  }
  for (let [source, destination, cost] of flights) {
    graph[source][destination.toString()] = cost;
  }
  const costs: number[] = Array(n).fill(Infinity);
  costs[src] = 0;
  // store the node to visit  (node, price)
  const queue: number[][] = [[src, 0]];
  while (queue.length > 0 && k >= 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      // in the same k layer
      const [node, price] = queue.shift()!;
      for (let adjNode in graph[node]) {
        const adjNodeNum = parseInt(adjNode);
        if (costs[adjNodeNum] > price + graph[node][adjNodeNum]) {
          costs[adjNodeNum] = price + graph[node][adjNodeNum];
          queue.push([adjNodeNum, costs[adjNodeNum]]);
        }
      }
    }

    k--;
  }
  return Number.isFinite(costs[dst]) ? costs[dst] : -1;
}

function findCheapestPriceDFT(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  /*
    n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
            100
         0  ->   > 1
          \    /
           > 2    500
        100
    
    */
  // recover the graph [ { anotherNode: cost}, ]
  const graph: { [key: string]: number }[] = [];
  for (let i = 0; i < n; i++) {
    graph[i] = {};
  }
  for (let [source, destination, cost] of flights) {
    graph[source][destination.toString()] = cost;
  }
  const memoizedObj: { [key: string]: number } = {};
  // travsersal the graph and record the cheapest flight wtih k stops
  function dft(node: number, from: number = -1, stopLeft: number = k): number {
    console.log(
      graph,
      `node:${node}, from:${from}, stopLeft:${stopLeft} `,
      memoizedObj
    );
    if (memoizedObj[`${node}_${from}_${stopLeft}`] !== undefined)
      return memoizedObj[`${node}_${from}_${stopLeft}`];
    if (node === dst) return 0;
    let cost = Infinity;
    for (let adjNode in graph[node]) {
      const numAdjNode = parseInt(adjNode);
      if (numAdjNode !== from && stopLeft > -1) {
        cost = Math.min(
          cost,
          graph[node][adjNode] + dft(numAdjNode, node, stopLeft - 1)
        );
      }
    }
    // if cost === 0 means no way to go and unable to reach dest
    memoizedObj[`${node}_${from}_${stopLeft}`] = cost;

    return cost;
  }
  const answer = dft(src, -1, k);
  return Number.isFinite(answer) ? answer : -1;
}

export { findCheapestPrice };
