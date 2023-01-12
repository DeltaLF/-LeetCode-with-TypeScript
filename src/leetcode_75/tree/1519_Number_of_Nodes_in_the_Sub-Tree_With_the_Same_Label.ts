/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (
  n: number,
  edges: number[][],
  labels: string
): number[] {
  /*
    Input: n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], labels = "abaedcd"
Output: [2,1,1,1,1,1,1]
                      0a
                    /    \
                  1b      2a
                 /  \    /  \
                4d  5c  3e  6d
                dft() post order => return a obj map {}
                for dft(1b): retrun { b:1, d:1, c:1 }
                for dft(2a): return { a:1, e:1, d:1}
                for dft(0a): return { a:2, ..}
     */
  // recover the tree
  const tree: number[][] = [];
  for (let i = 0; i < n; i++) {
    tree[i] = [];
  }
  for (let [node1, node2] of edges) {
    tree[node1].push(node2);
    tree[node2].push(node1);
  }
  const result: number[] = [];
  // implement dft with a hashMap that keeps record of letter count in subtree
  function dft(node: number, prev: number): { [key: string]: number } {
    const letterCountObj: { [key: string]: number } = { [labels[node]]: 1 };
    for (let adjNode of tree[node]) {
      if (adjNode !== prev) {
        const childLetterCountObj = dft(adjNode, node);
        for (let letter in childLetterCountObj) {
          if (!!letterCountObj[letter]) {
            letterCountObj[letter] += childLetterCountObj[letter];
          } else {
            letterCountObj[letter] = childLetterCountObj[letter];
          }
        }
      }
    }
    result[node] = letterCountObj[labels[node]];
    return letterCountObj;
  }
  dft(0, -1);
  return result;
};

export { countSubTrees };
