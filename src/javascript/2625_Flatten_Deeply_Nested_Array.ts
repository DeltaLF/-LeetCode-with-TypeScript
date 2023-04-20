type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) return arr;
  const newArr: MultiDimensionalArray = [];
  for (let numOrArr of arr) {
    if (typeof numOrArr === "number") {
      newArr.push(numOrArr);
    } else {
      const flattenLayer = flat(numOrArr, n - 1);
      for (let flattenNum of flattenLayer) {
        newArr.push(flattenNum);
      }
      // this cause TLE
      // newArr = newArr.concat( flat( numOrArr, n-1 ) );
    }
  }
  return newArr;
};
