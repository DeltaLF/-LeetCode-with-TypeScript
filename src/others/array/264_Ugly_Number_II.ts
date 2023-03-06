function nthUglyNumber(n: number): number {
  /*
        ugly number: 2^a * 3^b * 5^c
        a,b,c >=0
            2     3     5
            a     b     c
        1:  0     0     0
        2:  1     
        3:        1
        4:  2 
        5:              1
        6:  1     1
        8:  3
        9:        2
    10:  1           1
    12:  2     1

    1. 1*2 2*2 3*2 4*2 5*2...
    2. 1*3 2*3 3*3 4*3 5*3...
    3. 1*5 2*5 3*5 4*5 5*5...

    1 2 3 4 5 6 8 9 10 12 15 
    8*2 6*3 4*5
    1 2 3 4 5 6 8 9 10 12 15 16 18 20
    12*2 9*3 6*5

    [1]   
    x=0 y=0 z=0    
    [1,2] 
    x=1 y=0 z=0    
    [1,2,3]
    x=1 y=1 z=0
    [1,2,3,4]
    x=2 y=1 z=0
    [1,2,3,4,5]
    x=2 y=1 z=1
    [1,2,3,4,5,6]
    x=2 y=2 z=1
    [1,2,3,4,5,6]
    
    

    */
  const uglyArr: number[] = [1];
  let x = 0;
  let y = 0;
  let z = 0;
  while (uglyArr.length < n) {
    console.log(`x:${x},y:${y},z:${z}, ${uglyArr}`);
    uglyArr.push(Math.min(uglyArr[x] * 2, uglyArr[y] * 3, uglyArr[z] * 5));
    if (uglyArr.at(-1) === uglyArr[x] * 2) x++;
    if (uglyArr.at(-1) === uglyArr[y] * 3) y++;
    if (uglyArr.at(-1) === uglyArr[z] * 5) z++;
  }
  return uglyArr[n - 1];
}

function nthUglyNumberTLE(n: number): number {
  /*
      Input: n = 10
      Output: 12
      Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
                       2  3  
                            2^2 5 
                                  2*3 2^3 
                                        3^2
                                           5*2
                                               2^2*3
      prime factor is limited to 2,3,5
  
      2^a * 3 ^b * 5*c
      seems like a DP
  
      */
  let nth = 1;
  let i = 1;
  while (true) {
    // console.log("nth", nth, "i", i);
    if (nth === n) return i;
    i++;
    if (isUglyNumber(i)) nth++;
  }

  function isUglyNumber(num: number): boolean {
    if (num === 1) return true;
    let n = -1;
    while (num > 1) {
      if (n === num) return false;
      n = num;
      if (num % 2 === 0) num /= 2;
      if (num % 3 === 0) num /= 3;
      if (num % 5 === 0) num /= 5;
    }
    return true;
  }
}

export { nthUglyNumber };
