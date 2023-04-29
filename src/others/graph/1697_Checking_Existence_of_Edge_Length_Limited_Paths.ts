class DisjointSet {
  public parent: number[] = [];
  public groupSize: number[] = [];
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.groupSize[i] = 1;
    }
  }
  findSet(node: number): number {
    if (this.parent[node] === node) return node;
    return this.findSet(this.parent[node]);
  }

  unionSet(nodeA: number, nodeB: number): void {
    const rootA = this.findSet(nodeA);
    const rootB = this.findSet(nodeB);
    if (rootA === rootB) return; // they already in the same group
    if (this.groupSize[rootA] > this.groupSize[rootB]) {
      // merge into groupA
      this.groupSize[rootA] += this.groupSize[rootB];
      this.parent[rootB] = rootA;
    } else {
      this.groupSize[rootB] += this.groupSize[rootB];
      this.parent[rootA] = rootB;
    }
  }
}

function distanceLimitedPathsExist(
  n: number,
  edgeList: number[][],
  queries: number[][]
): boolean[] {
  /*
    Input: n = 3, edgeList = [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries = [[0,1,2],[0,2,5]]
     */

  const queriesInd: number[] = [];
  // 0-> queries[0]  ,.. i -> queries[i]
  for (let i = 0; i < queries.length; i++) {
    queriesInd[i] = i;
  }
  queriesInd.sort((a, b) => {
    // if queries[i][2] is large => it should be moved to right
    return queries[a][2] - queries[b][2];
  });
  edgeList.sort((a, b) => {
    return a[2] - b[2];
  });
  let alreadyUnionInd = -1;
  const res: boolean[] = [];
  const djSet = new DisjointSet(n);
  let currLimit = 0;
  for (let queryInd of queriesInd) {
    const [srcNode, targetNode, limit] = queries[queryInd];
    //   for (let [srcNode, targetNode, limit] of queries) {
    if (currLimit !== limit) {
      // update djSet
      currLimit = limit;
      for (let i = alreadyUnionInd + 1; i < edgeList.length; i++) {
        /* 
        we don't need to iterate through edgeList every time
        since edgeList is sorted by dist
        we only need to union those path with dist < limit "once"
        */
        const [nodeA, nodeB, dist] = edgeList[i];
        //   for (let [nodeA, nodeB, dist] of edgeList) {
        // this can be optimzed by sort first
        if (dist < limit) {
          alreadyUnionInd = i;
          djSet.unionSet(nodeA, nodeB);
        } else {
          break;
        }
      }
    }
    res[queryInd] = djSet.findSet(srcNode) === djSet.findSet(targetNode);
  }
  return res;
}

export { distanceLimitedPathsExist };
