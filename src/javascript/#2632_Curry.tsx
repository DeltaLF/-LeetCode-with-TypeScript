function curry(fn: Function): Function {
  const paramsArr: number[] = [];
  return function curried(...params: number[]) {
    paramsArr.push(...params);
    if (fn.length === paramsArr.length) {
      return fn(...paramsArr);
    } else {
      return curried;
    }
  };
}
