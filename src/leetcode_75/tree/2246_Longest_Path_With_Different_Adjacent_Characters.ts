function longestPath(parent: number[], s: string): number {
  /*
      Input: parent = [-1,0,0,1,1,2], s = "abacbe"
  Output: 3
  by the definition from parent, the tree is not unique
                    0a
                  /   \
                 1b   2a
               /  \    /
              3c  4b  5e
      for brutue force solution:
      iterate through node and dft() 
      time complexity: O(n^2)
      or
      dft post-order and return longest string
  
  
         cb  + a  + (ea or a)
             /      \
      return 'bc'  'ea'                
          c+b+b     e+a
           /  \     /
          c    b   e
       */

  // 1. recover the graph
  if (s.length <= 1) return s.length;
  const graph: number[][] = [[]];
  for (let i = 1; i < parent.length; i++) {
    graph[i] = [];
  }
  for (let i = 1; i < parent.length; i++) {
    graph[parent[i]].push(i);
  }
  // 2. create hashMap
  /*
    the direction doesn't matter so we define the first letter is the adjacnet letter
   
     */
  let maxLength = 0;
  // 3. dft post-order
  function dft(node: number): string {
    let currMaxStr = s[node];
    let maxStrFromChild = 0;
    for (let adjNode of graph[node]) {
      const strFromChild = dft(adjNode);
      // make sure adjacent is different
      if (s[node] !== strFromChild[0]) {
        maxLength = Math.max(
          maxLength,
          maxStrFromChild + 1 + strFromChild.length
        );
        maxStrFromChild = Math.max(maxStrFromChild, strFromChild.length);
        if (strFromChild.length > currMaxStr.length - 1) {
          currMaxStr = s[node] + strFromChild;
        }
      }
    }
    maxLength = Math.max(maxLength, currMaxStr.length);
    return currMaxStr;
  }
  dft(0);
  return maxLength;
}

export { longestPath };
