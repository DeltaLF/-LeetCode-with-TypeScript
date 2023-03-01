function findKthLargest(nums: number[], k: number): number {
  /*
      [3,2,1,5,6,4]
      l        r
      use quick select
      
      1. choose pivot 4 (here we pick the right most number)
      2. iterate thorugh put smaller number on the left larger on the right
      [3,2,1,4,5,6]
             |
           sorted
             k->solved
         k->redo select on the left hand side
                k-> redo select on the right hand side
      the pivot location is sorted 
      
      question:
      <= should be put in left or right?
      [3,4,2,1,5,6,4]
      left:
      [3,4,2,1,4,6,5]
      v right
      [3,2,1,4,4,6,5]

      Time Complexity:
      ideally we choose pivot at middle
      n + n/2 + n/4 ... = 2n time loops: O(2n)
      worse case:
      we choose the pivot on the side (eliminate one number a time)
      n + (n-1) + (n-2).... O(n^2)
      Space Complexity: O(1)
      */
  const n = nums.length;
  function quickSelect(l: number = 0, r: number = n - 1): number {
    // return the pivot index
    let pivot = l;
    for (let i = l; i < r; i++) {
      if (nums[i] < nums[r]) {
        [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
        pivot++;
      }
    }
    [nums[pivot], nums[r]] = [nums[r], nums[pivot]];
    if (pivot === n - k) return pivot;
    if (pivot < n - k) {
      return quickSelect(pivot + 1, r);
    } else {
      return quickSelect(l, pivot - 1);
    }
  }

  return nums[quickSelect()];
}
