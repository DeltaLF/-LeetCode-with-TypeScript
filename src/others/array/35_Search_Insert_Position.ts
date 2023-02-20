function searchInsert(nums: number[], target: number): number {
  /*
      Input: nums = [1,3,5,6], target = 5
      Output: 2
      l=0,r=3, m=1  target =5 nums[1]<target
      l=2 r=3 m=2 
      [1,2] target =1
      l=0,r=1 m=0 return0
      [1,2] target =2
      l=0 r=1 m=0 => r=1 m=1
      [1,3] 2
      l=0 r=1 target=2 target>nums[0]
      =>l=1 r=1 target=1 break
  
       */
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let l = 0;
  let r = nums.length - 1;
  let m = Math.floor((r + l) / 2);
  while (r > l) {
    if (target > nums[m]) {
      // move left pointer
      l = m + 1;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      break;
    }
    m = Math.floor((r + l) / 2);
  }
  if (target > nums[m]) {
    m++;
  }
  return m;
}

export { searchInsert };
