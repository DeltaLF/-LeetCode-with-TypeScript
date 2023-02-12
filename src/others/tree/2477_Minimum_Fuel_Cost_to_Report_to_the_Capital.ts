function minimumFuelCost(roads: number[][], seats: number): number {
  /*
    Input: roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2
    Output: 7
    
                        3
                     /     \
                    1       2
                    \
                     0
                   /   \
                  4      5
                 /
                6 
 */
  const n = roads.length + 1;
  const graph: number[][] = [];
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [node1, node2] of roads) {
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  let cost = 0;
  function dft(node: number, prev: number = -1): number {
    // return people count
    let people = 1;
    for (let adjNode of graph[node]) {
      if (adjNode !== prev) {
        people += dft(adjNode, node);
      }
    }
    if (node !== 0) {
      cost += Math.ceil(people / seats);
    }
    return people;
  }

  dft(0);
  return cost;
}

function minimumFuelCostTLE(roads: number[][], seats: number): number {
  /*
    Input: roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6]], seats = 2
    Output: 7
    
                        3
                     /     \
                    1       2
                    \
                     0
                   /   \
                  4      5
                 /
                6 
    think: 
    BFS from 0
    step 1: 
    1, 4 ,5 => cost 3 litters
    step 2:
    4-6  1-3 => cost 2 litters
    step 3:
    3-2      => cost 1 + but seat is 2 + 1

    
    
    Input: roads = [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6],[3,7]]
                        3   
                     /   \  \ 
                    1     2  7
                    \
                     0
                   /   \
                  4      5
                 /
                6 
    [[3,1],[3,2],[1,0],[0,4],[0,5],[4,6],[3,7]]
    if somehow from the outerest node:
    2, 7 ,6 ,5 -> go inside 5
    46-0, 273-1 -> 2
    1237-0  -> 2


    BFS from 0 => not works, hard to know the co-dirve situation
    step 1: 
    1, 4 ,5 => cost 3 litters
    step 2:
    4-6  1-3 => cost 2 litters
    step 3:
    3-2, 3-7 => cost 1 + but seat is 2 => + 2-3, 7-3 + 27-1 + 3-1 + 31-0, 27-0

     */

  const n = roads.length + 1;
  const graph: number[][] = [];
  const outGoingGraph: number[] = new Array(n).fill(0);
  const people: number[] = new Array(n).fill(1); // people on the noe

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [node1, node2] of roads) {
    outGoingGraph[node1]++;
    outGoingGraph[node2]++;
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  let cost = 0;
  let clearOutgoing: number[] = [];
  while (true) {
    // go through out going graph
    for (let i = 1; i < n; i++) {
      // start from 1
      if (outGoingGraph[i] === 1) {
        // find outmost node
        outGoingGraph[i]--;
        cost += Math.ceil(people[i] / seats);
        const peopleToTransfer = people[i];
        people[i] = 0;
        const adjNode = graph[i].pop()!;
        people[adjNode] += peopleToTransfer; // people from outmost to adjacent node
        // outGoingGraph[adjNode]--;
        clearOutgoing.push(adjNode);
        graph[adjNode] = graph[adjNode].filter((node) => node != i);
      }
    }
    for (let adjNode of clearOutgoing) {
      outGoingGraph[adjNode]--;
    }
    clearOutgoing = [];
    if (outGoingGraph[0] === 0) {
      break;
    }
  }
  return cost;
}

export { minimumFuelCost };
