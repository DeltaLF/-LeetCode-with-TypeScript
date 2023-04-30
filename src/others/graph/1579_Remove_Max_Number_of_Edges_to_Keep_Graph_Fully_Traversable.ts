class DisjointSet {
  public parent: number[] = [];
  public size: number[] = [];
  public groupCount: number = 0;
  constructor(n: number) {
    for (let i = 1; i <= n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
    this.groupCount = n;
  }
  find(node: number): number {
    if (this.parent[node] === node) return node;
    return this.find(this.parent[node]);
  }
  unionSet(nodeA: number, nodeB: number): void {
    const rootA = this.find(nodeA);
    const rootB = this.find(nodeB);
    if (rootA === rootB) return; // they are in the same group
    // group count -- whenver a merage happens
    this.groupCount--;
    if (this.size[rootA] > this.size[rootB]) {
      // merge B into A
      this.size[rootA] += this.size[rootB];
      this.parent[rootB] = rootA;
    } else {
      // merge A into B
      this.size[rootB] += this.size[rootA];
      this.parent[rootA] = rootB;
    }
  }
}

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  /*
union find:
3 set
1 for Alice 2 for Bob 

Alice disj  => if there are n groups => we still need n-1 path
Bob   disj  => if there are m groups => we still need m-1 path

*/
  const ajsetA = new DisjointSet(n);
  const ajsetB = new DisjointSet(n);
  let res = 0;
  for (const [pathType, nodeA, nodeB] of edges) {
    if (pathType === 3) {
      if (
        ajsetA.find(nodeA) !== ajsetA.find(nodeB) ||
        ajsetB.find(nodeA) !== ajsetB.find(nodeB)
      ) {
        ajsetA.unionSet(nodeA, nodeB);
        ajsetB.unionSet(nodeA, nodeB);
      } else {
        // useless edge because nodeA,nodeB are alreadly in the same group
        res++;
      }
    }
  }
  // check A
  for (const [pathType, nodeA, nodeB] of edges) {
    if (pathType === 1) {
      if (ajsetA.find(nodeA) !== ajsetA.find(nodeB)) {
        // still need this path
        ajsetA.unionSet(nodeA, nodeB);
      } else {
        // no need this path
        res++;
      }
    }
  }
  for (const [pathType, nodeA, nodeB] of edges) {
    if (pathType === 2) {
      if (ajsetB.find(nodeA) !== ajsetB.find(nodeB)) {
        // still need this path
        ajsetB.unionSet(nodeA, nodeB);
      } else {
        // no need this path
        res++;
      }
    }
  }
  if (ajsetA.groupCount > 1 || ajsetB.groupCount > 1) return -1;
  return res;
}

export { maxNumEdgesToRemove };
