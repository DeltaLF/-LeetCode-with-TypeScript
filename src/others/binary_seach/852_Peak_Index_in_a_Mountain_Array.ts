function peakIndexInMountainArray(arr: number[]): number {
  /*
    Input: arr = [0,2,1,0]
    Output: 1
     */
  const N = arr.length;
  let l = 0;
  let r = N - 1;
  let m = Math.floor((l + r) / 2);
  while (l < r) {
    if (arr[m] > arr[m - 1] && arr[m] > arr[m + 1]) return m;
    // peak left
    if (arr[m] > arr[m - 1] && arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
    m = Math.floor((l + r) / 2);
  }
  return -1;
}

export { peakIndexInMountainArray };
