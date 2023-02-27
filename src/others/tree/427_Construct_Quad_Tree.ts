//  Definition for node.
class Node {
  val: boolean;
  isLeaf: boolean;
  topLeft: Node | null;
  topRight: Node | null;
  bottomLeft: Node | null;
  bottomRight: Node | null;
  constructor(
    val?: boolean,
    isLeaf?: boolean,
    topLeft?: null | Node,
    topRight?: null | Node,
    bottomLeft?: null | Node,
    bottomRight?: null | Node
  ) {
    this.val = val === undefined ? false : val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight = topRight === undefined ? null : topRight;
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight = bottomRight === undefined ? null : bottomRight;
  }
}
function construct(grid: number[][]): Node | null {
  /*
    time: O(n^2) 
    optimzed by first construct child node so we don't have to iterate through grid logn times
    space: O(logn)
    */
  if (grid.length === 0) return null;
  if (grid.length === 1) return new Node(grid[0][0] === 1, true);
  const n = grid.length;
  const bottom = grid.splice(n / 2);
  const top = grid;
  const topLeft: number[][] = [];
  const topRight: number[][] = [];
  const bottomLeft: number[][] = [];
  const bottomRight: number[][] = [];
  for (let i = 0; i < n / 2; i++) {
    topRight.push(top[i].splice(n / 2));
    topLeft.push(top[i]);
    bottomRight.push(bottom[i].splice(n / 2));
    bottomLeft.push(bottom[i]);
  }
  const tlNode = construct(topLeft)!;
  const trNode = construct(topRight)!;
  const blNode = construct(bottomLeft)!;
  const brNode = construct(bottomRight)!;
  if (
    tlNode.isLeaf &&
    trNode.isLeaf &&
    blNode.isLeaf &&
    brNode.isLeaf &&
    tlNode.val === trNode.val &&
    trNode.val === blNode.val &&
    blNode.val === brNode.val
  ) {
    return new Node(tlNode.val, true);
  }
  return new Node(false, false, tlNode, trNode, blNode, brNode);
}

function constructNotOptimized(grid: number[][]): Node | null {
  /*
      isLeaf:true for all 1's or 0's all val: current grid, child:null
      different in grid: isLeaf:false val:any divide current to sub-grids
      [0,1] [1,1] [0,1] [1,1] [1,0] null null null null [1,0] [1,0] [1,1] [1,1]
      
      BFT: iterate thorugh all to determine the first 4 nodes
          |
       ---|---
          |
      DFT: first focus on the top-left corner 
      if no efficient consideration: O(n^2*logn)  
      n^2 for making the tree in the same level
      logn for there will be logn level 
      
       */
  const n = grid.length;
  if (n === 0) return null;
  const sum = grid.reduce((prevSum, currArr) => {
    return prevSum + currArr.reduce((preVal, currVal) => preVal + currVal, 0);
  }, 0);
  const isLeaf = sum === 0 || sum === n * n;
  const val = !(sum === 0); // only 0 leaf we set val as 0
  if (isLeaf) {
    return new Node(val, isLeaf);
  } else {
    const bottom = grid.splice(n / 2);
    const top = grid;
    const topLeft: number[][] = [];
    const topRight: number[][] = [];
    const bottomLeft: number[][] = [];
    const bottomRight: number[][] = [];
    for (let i = 0; i < n / 2; i++) {
      topRight.push(top[i].splice(n / 2));
      topLeft.push(top[i]);
      bottomRight.push(bottom[i].splice(n / 2));
      bottomLeft.push(bottom[i]);
    }
    return new Node(
      val,
      isLeaf,
      construct(topLeft),
      construct(topRight),
      construct(bottomLeft),
      construct(bottomRight)
    );
  }
}
