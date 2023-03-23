function makeConnected(n: number, connections: number[][]): number {
  if (n > connections.length + 1) return -1;
  // recover the map
  const map: number[][] = [];
  const visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    map[i] = [];
  }
  for (let [node1, node2] of connections) {
    map[node1].push(node2);
    map[node2].push(node1);
  }

  // dft untill all node is visited
  function dft(node: number): void {
    visited[node] = true;
    for (let adjNode of map[node]) {
      if (!visited[adjNode]) {
        visited[adjNode] = true;
        dft(adjNode);
      }
    }
  }
  let isolatedGroup = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      isolatedGroup++;
      dft(i);
    }
  }
  return isolatedGroup - 1;
}

function makeConnectedWithDisjointSetUnion(
  n: number,
  connections: number[][]
): number {
  /*
    Input: n = 4, connections = [[0,1],[0,2],[1,2]]
    Output: 1

    0-1  3
    | /
    2

    Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
Output: 2

   0- 1
   |\/|  4 5
   2  3

   
   0- 1   4 - 5
   |\/|   | \/
   2  3   6   7       8 9

   to connect n node it requires at least n - 1 cables

   for the case that cables are enough 
   1. find isolated group
   2. return the count of isolated group - 1

   n = 5[[0,1],[0,2],[3,4],[2,3]]

   0 -1   3-4
   |
   2-3

   [0,0,0,3,3]
   1. solution1 sort
   2. use pointer

   
     */
  if (n > connections.length + 1) return -1;
  const djSet = new DisjointSet(n);
  for (let [node1, node2] of connections) {
    djSet.unionSets(node1, node2);
  }
  const groupSet = new Set<number>();
  for (let group of djSet.parent) {
    groupSet.add(djSet.findSet(group));
  }
  return groupSet.size - 1;
}

class DisjointSet {
  public parent: number[] = [];
  public size: number[] = [];
  constructor(public n: number) {
    // n: size of the nodes
    for (let i = 0; i < n; i++) {
      // seperate nodes into different sets
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }
  makeSet(a: number): void {
    this.parent[a] = a;
    this.size[a] = 1;
  }
  findSet(a: number): number {
    if (this.parent[a] === a) {
      return a;
    }
    return (this.parent[a] = this.findSet(this.parent[a]));
  }
  unionSets(a: number, b: number): void {
    const aAncestor = this.findSet(a);
    const bAncestor = this.findSet(b);
    if (aAncestor === bAncestor) return;
    // append smaller set to larger set
    if (this.size[aAncestor] < this.size[bAncestor]) {
      this.parent[aAncestor] = bAncestor;
      this.size[bAncestor] += this.size[aAncestor];
    } else {
      this.parent[bAncestor] = aAncestor;
      this.size[aAncestor] += this.size[bAncestor];
    }
  }
}
export { makeConnected };
