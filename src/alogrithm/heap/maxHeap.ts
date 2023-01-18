/*
max heap: 
a complex binary tree which child node should always smaller then parent node
               10
             /    \
            4      9
           / \    / \
          1   3  7   2

      ps:
                0
              /   \
             1     2
       parentNode = Math.floor((n - 1)/2)
       left child node = n*2 + 1
       right child node = n*2 + 2
*/

function maxHeapify(numArr: number[]): number[] {
  // make input array a max heap array
  /*
  [ 5, 6, 7, 3, 2, 1, 9 ]
              5
            /   \
           6     7
          / \   / \
         3   2 1   9  
  */
  // itrate through the array from head to end
  for (let i = 0; i < numArr.length; i++) {
    let node = i;
    let parentNode = Math.floor((node - 1) / 2);
    while (node > 0) {
      if (numArr[parentNode] < numArr[node]) {
        [numArr[parentNode], numArr[node]] = [numArr[node], numArr[parentNode]];
        node = parentNode;
        parentNode = Math.floor((node - 1) / 2);
      } else {
        break;
      }
    }
  }
  return numArr;
}

class MaxHeap {
  public stack: number[] = [];
  delete(): void {}
  Insert(): void {}
}

export { maxHeapify };
