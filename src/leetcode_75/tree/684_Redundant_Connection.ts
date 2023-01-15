class UnionFind {
  public parent: number[] = [];
  public size: number[] = []; // group size
  constructor(n: number) {
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }
  find(i: number): number {
    if (this.parent[i] === i) return i;
    return (this.parent[i] = this.find(this.parent[i]));
  }
  union(a: number, b: number) {
    const aRoot = this.find(a);
    const bRoot = this.find(b);
    if (aRoot === bRoot) return;
    if (this.size[aRoot] < this.size[bRoot]) {
      this.parent[aRoot] = bRoot;
      this.size[bRoot] += this.size[aRoot];
    } else {
      this.parent[bRoot] = aRoot;
      this.size[aRoot] += this.size[bRoot];
    }
  }
}

function findRedundantConnection(edges: number[][]): number[] {
  /*
    Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]] Output: [1,4]

         5 - 1 - 2 
             |   |
             4 - 3
    iterate throough edges and detect cycle
     */
  const uf = new UnionFind(edges.length);
  for (let [edgeA, edgeB] of edges) {
    const aRoot = uf.find(edgeA);
    const bRoot = uf.find(edgeB);
    if (aRoot === bRoot) return [edgeA, edgeB];
    uf.union(edgeA, edgeB);
  }
  return edges[edges.length - 1];
}

export { findRedundantConnection };
