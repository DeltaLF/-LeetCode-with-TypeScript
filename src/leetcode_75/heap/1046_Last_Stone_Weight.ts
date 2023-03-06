function lastStoneWeight(stones: number[]): number {
  /*
    [2,7,4,1,8,1]
            2
          /   \
         7     4
        / \    /
       4   1   1

       0
      / \
     1   2
     left child: 2n +1
     right child: 2n + 2
     parent: Math.floor( (n-1)/2 )
     */
  function maxheapify(arr: number[], i: number): void {
    let parent = Math.floor((i - 1) / 2);
    while (parent >= 0) {
      if (arr[parent] < arr[i]) {
        // float large number
        [arr[parent], arr[i]] = [arr[i], arr[parent]];
      }
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }
  function heapDown(arr: number[], i: number): void {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let temp: number;
    while (left < arr.length) {
      temp = i;
      if (arr[left] > arr[i]) {
        temp = left;
        if (arr[right] !== undefined && arr[right] > arr[left]) {
          temp = right;
        }
      } else if (arr[right] > arr[i]) {
        temp = right;
      }
      if (temp === i) break;
      [arr[i], arr[temp]] = [arr[temp], arr[i]];
      i = temp;
      left = 2 * i + 1;
      right = 2 * i + 2;
    }
  }
  function getHeap(arr: number[]): number | null {
    if (arr.length < 1) return null;
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    const maxVal = arr.pop();
    heapDown(arr, 0);
    return maxVal!;
  }
  // max maxheapify
  for (let i = 0; i < stones.length; i++) {
    maxheapify(stones, i);
  }
  while (stones.length > 1) {
    const y = getHeap(stones)!;
    const x = getHeap(stones)!;
    if (y > x) {
      stones.push(y - x);
      maxheapify(stones, stones.length - 1);
    }
  }
  return stones.length === 1 ? stones[0] : 0;
}

function lastStoneWeightSort(stones: number[]): number {
  /*[2,7,4,1,8,1]
    7 ,8 => 1 [2,4,1,1,1]
    4, 2 => 2 [1,1,1,2]
    2, 1 => 1[1,1,1]
    1, 1 => null [1]

    [10,4,3,2]
    10, 4 => [6,3,2]
     */
  stones.sort((a, b) => b - a);
  let i = 0;
  while (i <= stones.length) {
    console.log(stones, i);
    if (i === stones.length - 1) return stones[stones.length - 1];
    // y >= x
    const y = stones[i];
    const x = stones[i + 1];
    if (y > x) {
      const leftStone = y - x;
      let j = i + 2;
      while (j < stones.length) {
        if (leftStone >= stones[j]) {
          stones.splice(j, 0, leftStone);
          j++;
          break;
        }
        j++;
      }
      if (j === stones.length) {
        stones.push(leftStone);
      }
    }
    i += 2;
  }
  return 0;
}
export { lastStoneWeight };
