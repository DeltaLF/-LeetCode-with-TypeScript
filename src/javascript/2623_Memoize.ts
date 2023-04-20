type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const memoMap = new Map<string, number>();
  return function (...args) {
    let key = "";
    if (args.length === 1) {
      key = args[0].toString();
    } else {
      key = `${args[0]}_${args[1]}`;
    }
    if (!memoMap.has(key)) memoMap.set(key, fn(...args));
    return memoMap.get(key);
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
