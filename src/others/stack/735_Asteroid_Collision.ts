function asteroidCollision(asteroids: number[]): number[] {
  /*
    Input: asteroids = [5,10,-5]
    Output: [5,10]
     */
  let l = 0;
  let r = 1;
  function collision(arr: number[], left: number, right: number): void {
    if (right + left === 0 || left < 0 || right > 0) return;
    if (Math.abs(right) > Math.abs(left)) {
      arr.push(right);
    } else {
      arr.push(left);
    }
  }
  function checkTop(arr: number[]) {
    while (
      arr.length > 1 &&
      arr[arr.length - 1] < 0 &&
      arr[arr.length - 2] > 0
    ) {
      const right = arr.pop()!;
      const left = arr.pop()!;
      collision(arr, left, right);
    }
  }
  const res: number[] = [];
  for (const ast of asteroids) {
    if (res.length === 0 || res[res.length - 1] < 0 || ast > 0) {
      // no collision
      res.push(ast);
    } else {
      // collison
      const lastAst = res.pop()!;
      collision(res, lastAst, ast);
    }
    checkTop(res);
  }
  return res;
}

export { asteroidCollision };
