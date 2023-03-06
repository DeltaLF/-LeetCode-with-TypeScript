function findKthPositive(arr: number[], k: number): number {
  /*
    k=5
    [1,3,5,6,10]  10 -5 =5
    k=6

    arr:  1   3   5 6       10 
    i  :  1 2 3 4 5 6 7 8 9 10
          l:0     m:2        r:4
                  
    k=1 
    l=0 r=2 m=1
    2 - 1

    arr:  2 3 4     7        11
    i:  1 2 3 4 5 6 7 8 9 10 11
          l=0 m=2            r=4
      
    */
  function findMissingNum(l: number, r: number): number {
    return arr[r] - arr[l] - (r - l);
  }
  if (k < arr[0]) return k;
  if (arr[arr.length - 1] - arr.length >= k) {
    // kth located inside arr
    let l = 0;
    let r = arr.length - 1;
    let middle = Math.floor((r + l) / 2);
    k -= arr[0] - 1; // remove those missing number on the left of the arr
    while (l + 1 < r) {
      if (findMissingNum(l, middle) < k) {
        // minus how much missing number brtween l and original l
        // betweeen l middle+1
        k = k - findMissingNum(l, middle);
        // k on the right
        l = middle;
      } else if (findMissingNum(l, middle) >= k) {
        r = middle;
      }
      middle = Math.floor((r + l) / 2);
    }
    // k located between r,l (or right of l if r,l are adjacnet)

    return arr[l] + k + (arr[l] === arr[r] - 1 ? 1 : 0);
  } else {
    // kth located outside arr
    // return arr[arr.length - 1] + k - (arr[arr.length - 1] - arr.length);
    return k + arr.length;
  }
}

function findKthPositiveNotOptimized(arr: number[], k: number): number {
  let kth = 0;
  let arrInd = 0;
  let i = 1;
  for (i; i <= 2000; i++) {
    if (arrInd < arr.length) {
      if (arr[arrInd] !== i) {
        kth++;
      } else {
        arrInd++;
      }
    } else {
      kth++;
    }
    if (kth === k) break;
  }
  return i;
}

function findKthPositiveFailed(arr: number[], k: number): number {
  /*
    arr = [2,3,4,7,11], k = 5
    1.
    O(n) simply iterate to k
    2. optimize
    a.arr[arr.length-1] - arr.length>k  check if k located between arr =>  binary search
    b.arr[arr.length-1] - arr.length>k  k outside arr => 

    arrInd:   0 1 2     3         4  5   
    arr:      2 3 4     7        11 12
    i:      1 2 3 4 5 6 7 8 9 10 11 12
    ith     1       2 3   4 5 6      7
     */
  let ith = 0;
  let arrInd = 0;
  let i = 1;
  while (arrInd < arr.length) {
    console.log("ith", ith, "arrInd", arrInd, " ", arr[arrInd], "i", i);
    if (arr[arrInd] !== i) {
      ith++;
      if (ith === k) break;
    } else {
      arrInd++;
    }
    i++;
  }

  if (ith < k) {
    i += k - ith;
  }

  return i;
}

export { findKthPositive };
