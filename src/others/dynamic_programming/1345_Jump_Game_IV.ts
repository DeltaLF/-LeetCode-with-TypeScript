import { Queue } from "datastructures-js";
function minJumps(arr: number[]): number {
  if (arr.length === 1) return 0;
  const map: { [key: string]: number[] } = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = [i];
    } else {
      map[arr[i]].push(i);
    }
  }
  const visist = new Array(arr.length).fill(false);
  const queue = new Queue<number>();
  queue.enqueue(0);
  visist[0] = true;
  let layer = 0;
  while (queue.size() > 0) {
    const size = queue.size();
    for (let i = 0; i < size; i++) {
      const nodeInd = queue.dequeue();
      if (nodeInd === arr.length - 1) return layer;
      for (let neighborInd of map[arr[nodeInd]]) {
        if (!visist[neighborInd]) {
          queue.enqueue(neighborInd);
          visist[neighborInd] = true;
        }
      }
      if (nodeInd + 1 < arr.length && !visist[nodeInd + 1]) {
        queue.enqueue(nodeInd + 1);
        visist[nodeInd + 1] = true;
      }
      if (nodeInd - 1 > 0 && !visist[nodeInd - 1]) {
        queue.enqueue(nodeInd - 1);
        visist[nodeInd - 1] = true;
      }
      map[arr[nodeInd]] = []; // key point of optimization to prevent TLE
    }
    layer++;
  }
  return -1;
}

function minJumpsTLE(arr: number[]): number {
  /*
    Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
    Output: 3
    0 -> 4 -> 3 -> 9

    make map 
    {
        val: [ind]
    }
     */
  const n = arr.length;
  const isVisited: number[] = new Array(n).fill(n);
  const map: { [key: string]: number[] } = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === undefined) {
      map[arr[i]] = [i];
    } else {
      map[arr[i]].push(i);
    }
  }

  function jmp(ind = 0, step = 0) {
    // return momvement count
    if (ind < 0 || ind >= n || isVisited[ind] <= step) return;
    isVisited[ind] = step;
    if (ind === n - 1) return 0; //end case
    // try jmp
    if (map[arr[ind]].length > 1) {
      for (let jmpInd of map[arr[ind]]) {
        jmp(jmpInd, step + 1);
      }
    }
    // try forward back
    jmp(ind + 1, step + 1);
    jmp(ind - 1, step + 1);
  }
  jmp(0, 0);
  return isVisited[n - 1];
}

export { minJumps };
