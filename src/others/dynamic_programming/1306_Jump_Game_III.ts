function canReach(arr: number[], start: number): boolean {
  const visited: boolean[] = new Array(arr.length).fill(false);
  function visit(curr: number): boolean {
    if (curr < 0 || curr >= arr.length || visited[curr]) return false;
    visited[curr] = true;
    const back = visit(curr + arr[curr]);
    const front = visit(curr - arr[curr]);
    return back || front || arr[curr] === 0;
  }
  return visit(start);
}
function canReachNoOptimized(arr: number[], start: number): boolean {
  /*
      Input: arr = [4,2,3,0,3,1,2], start = 0
      Output: true 
  */
  const visited: boolean[] = new Array(arr.length).fill(false);
  const targets: number[] = [];
  arr.forEach((val, ind) => {
    if (val === 0) {
      targets.push(ind);
    }
  });
  if (targets.length === 0) return false;

  function visit(curr: number): void {
    if (curr < 0 || curr >= arr.length || visited[curr]) return;
    visited[curr] = true;
    visit(curr + arr[curr]);
    visit(curr - arr[curr]);
  }
  visit(start);
  for (let target of targets) {
    if (visited[target]) {
      return true;
    }
  }
  return false;
}

export { canReach };
