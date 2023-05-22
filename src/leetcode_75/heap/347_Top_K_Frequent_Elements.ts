function topKFrequent(nums: number[], k: number): number[] {
  /*
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
    Input: nums = [1], k = 1
    Output: [1]
     */
  const map = new Map<number, number>();
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num)! + 1);
    }
  }
  const mapArr: number[][] = [];
  for (const [key, value] of map) {
    mapArr.push([key, value]);
  }
  mapArr.sort((a, b) => {
    return b[1] - a[1];
  });

  const ans: number[] = [];
  for (let i = 0; i < k; i++) {
    ans.push(mapArr[i][0]);
  }
  return ans;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentOld = function (nums: number[], k: number): number[] {
  // create a hash map
  const map: { [key: string]: number } = {};
  nums.forEach((num) => {
    const numStr = num.toString();
    if (!!map[numStr]) {
      map[numStr] += 1;
    } else {
      map[numStr] = 1;
    }
  });

  let answer: number[] = [];
  // try to optimize with bucket
  const bucket: number[][] | undefined[] = [];
  for (let key in map) {
    // bucket index = number count (sorted automatically)
    if (bucket[map[key]]) {
      bucket[map[key]] = [
        parseInt(key) as number,
        ...(bucket[map[key]] as number[]),
      ];
    } else {
      bucket[map[key]] = [parseInt(key)];
    }
  }
  for (let i = bucket.length; i >= 0; i--) {
    if (!!bucket[i]) {
      answer = [...answer, ...(bucket[i] as number[])];
    }
    if (answer.length === k) {
      return answer;
    }
  }
  return answer;

  /*
    // brute force iterte k times to find the kth number
    for(let i=0;i<k;i++){
        let topKey:string='';
        let topCount = 0;
        for(let key in map){
          if(map[key] > topCount){
            topKey = key
            topCount = map[key];
          }
        }
        answer.push(parseInt(topKey))
        map[topKey] =0; //prevent duplication
    }
    return answer*/
};

export { topKFrequent };
