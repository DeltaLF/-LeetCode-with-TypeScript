function singleNonDuplicate(nums: number[]): number {
  /*
    Input: nums = [1,1,2,3,3,4,4,8,8]
    Output: 2
    time:O(logn) space:O(1)=> binary search
    one num is not pair => odd 
    [0,1,1,2,2,3,3]   l =0  r=6  m=3=> we can find the middle point: 2
          | |
     0     3     6
        3     3
    [0,1,1,2,2,3,3,4,4]
            | |
     0       4       8
        4        4
    if m is odd => we should go with the oppside to another paired
    if m is even => we should go with 
    then we can observe are 2 pair? if not => answer
    if paired, then the paired is on the right hand side or left hand side
    for m=3 case another pair is on the right hand side => we want to search left
     */
  let l = 0;
  let r = nums.length - 1;
  let m = (l + r) / 2; // must be intger
  /*
[1,1,2] l=0 r=2 m=1 => l=2 r=2 m=2
[1,2,2] l=0 r=2 m=1 => l=0 r=0 m=0
  */
  while (l < r) {
    // check is middle paired
    if (nums[m - 1] !== nums[m] && nums[m + 1] !== nums[m]) return nums[m];
    // now middle is paired,determine should we look left or right
    if (m % 2 === 0) {
      if (nums[m - 1] === nums[m]) {
        // another pair on the left hand side=> we should go left
        r = m - 2;
      } else {
        l = m + 2;
      }
    } else {
      if (nums[m - 1] === nums[m]) {
        // another pair on the left hand side=> we should go right
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    m = (l + r) / 2;
  }
  return nums[m];
}

export { singleNonDuplicate };
