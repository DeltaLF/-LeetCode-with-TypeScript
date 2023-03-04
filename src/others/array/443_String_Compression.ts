function compress(chars: string[]): number {
  /*
    chars = ["a","a","b","b","c","c","c"]
             start
                      i
                      count=2
                      curr='a'
     */
  if (chars.length === 1) return 1;
  let start = 0;
  let currC = chars[0].toString();
  let count = 1;
  let countStr = "";
  let i = 1;
  while (i < chars.length) {
    if (chars[i].toString() === currC) {
      count++;
    } else {
      if (count > 1) {
        // start=0, count=3 i=3
        //  [a,a,a,b,b]
        countStr = count.toString();
        start++;
        for (let num of countStr) {
          chars[start] = num;
          start++;
        }
        chars.splice(start, i - start);
        i = start;
      }
      // reset
      count = 1;
      currC = chars[i].toString();
      start = i;
    }
    i++;
  }

  if (count > 1) {
    // start=0, count=3 i=3
    //  [a,a,a,b,b]
    countStr = count.toString();
    start++;
    for (let num of countStr) {
      chars[start] = num;
      start++;
    }
    chars.splice(start, i - start);
  }

  return chars.length;
}
export { compress };
