class UnionFind {
  public parent: number[] = [];
  public rank: number[] = [];
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }
  find(i: number): number {
    if (this.parent[i] === i) return i;
    return (this.parent[i] = this.find(this.parent[i]));
  }
  union(a: number, b: number): void {
    const aParent = this.find(a);
    const bParent = this.find(b);
    if (aParent === bParent) return;
    if (this.rank[aParent] < this.rank[bParent]) {
      this.parent[aParent] = bParent;
      this.rank[bParent] += this.rank[aParent];
    } else {
      this.parent[bParent] = aParent;
      this.rank[aParent] += this.rank[bParent];
    }
  }
}
function numberOfGoodPaths(vals: number[], edges: number[][]): number {
  /*
     vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]] Output: 6
                 1
               /   \
             3       2
                   /   \
                  1     3
    can this be done by one iteration?
    */

  const valHashMap: { [key: string]: number[] } = {};
  for (let i = 0; i < vals.length; i++) {
    if (valHashMap[vals[i]] === undefined) {
      valHashMap[vals[i]] = [i];
    } else {
      valHashMap[vals[i]].push(i);
    }
  }
  const valKeys = Array.from(new Set(vals)).sort((a, b) => a - b);
  const tree: number[][] = [];
  for (let i = 0; i < vals.length; i++) {
    tree[i] = [];
  }
  for (let [edge1, edge2] of edges) {
    tree[edge1].push(edge2);
    tree[edge2].push(edge1);
  }
  const uf = new UnionFind(vals.length);
  let res = 0;
  for (let valKey of valKeys) {
    // how many unique val from small to large
    for (let node of valHashMap[valKey]) {
      // how many node with specific val
      for (let adjNode of tree[node]) {
        // adj of those nodes
        if (vals[adjNode] <= valKey) {
          uf.union(node, adjNode);
        }
      }
    }
    const count: { [key: string]: number } = {};
    // we need to find out how many val are in each union
    /*
        we are now at valKey =3
        ex: for union 1 :[3,3,1,1] => make up 3 good path
            for union 2: [3,2]     => make up 1 good path
            
        for  [3]:    path: 1
            [3,3]:   path: 2 + 1 
            [3,3,3]: path: 3 + 3
            [3,3,3,3]:path: 4+ 6
         */
    for (let node of valHashMap[valKey]) {
      if (!count[uf.find(node)]) {
        count[uf.find(node)] = 1;
      } else {
        count[uf.find(node)] += 1;
      }
      res += count[uf.find(node)];
    }
  }
  return res;
}

function numberOfGoodPathsBruteForce(
  vals: number[],
  edges: number[][]
): number {
  /*
vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]] Output: 6
                 1
               /   \
             3       2
                   /   \
                  1     3
    single node 5
    4 nodes: 1
    total: 6
    brute force:
    iterate through every nodes and dft for every node o(n^2)
 */
  const tree: number[][] = [];
  for (let i = 0; i < vals.length; i++) {
    tree[i] = [];
  }
  // reconstruct the tree
  for (let [node1, node2] of edges) {
    tree[node1].push(node2);
    tree[node2].push(node1);
  }
  /*
                 1
               /   \
             3       2
                   /   \
                  1     3
         node 1 prev-1 start 1 isValid: true
         goodPath++ (1to1)
         for adjNode:
         3invalid, 2invalid: return 1
         node 3 prev-1 start 3 isValid true
         goodPath++ (3to3)
         -> 1 -> 2 ->3 
   */
  function dft(
    node: number,
    prev: number,
    start: number,
    isPathStillVild: boolean
  ): number {
    if (start === 3)
      console.log("node:", node, "prev:", prev, "start:", 3, isPathStillVild);
    if (!isPathStillVild) return 0;
    let goodPath = 0;
    if (vals[node] === vals[start]) {
      // pathValid + startNode === endNode
      goodPath++;
    }
    for (let adjNode of tree[node]) {
      if (adjNode !== prev) {
        goodPath += dft(adjNode, node, start, vals[adjNode] <= vals[start]);
      }
    }
    return goodPath;
  }
  let totalGoodPaths = 0;
  for (let i = 0; i < vals.length; i++) {
    // use i as starting, dft the tree and collect good paths
    const goodPaths = dft(i, -1, i, true);
    totalGoodPaths += goodPaths;
    /*
                    0:1
                   /   \ 
                 1:3   2:2
                       /  \
                     3:1   4:3
     */
  }
  // every length > 1 path is count twice
  return (totalGoodPaths - vals.length) / 2 + vals.length;
}

export { numberOfGoodPaths };
