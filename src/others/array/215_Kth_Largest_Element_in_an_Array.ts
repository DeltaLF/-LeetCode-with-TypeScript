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

function findKthLargestVerbose(nums: number[], k: number): number {
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
    */
  const n = nums.length;
  let left = 0;
  let right = nums.length - 1; // right is included pivot
  function quickSelect(l: number, r: number): number {
    // return the pivot index
    let pivot = l;
    for (let i = l; i < r; i++) {
      if (nums[i] < nums[r]) {
        [nums[i], nums[pivot]] = [nums[pivot], nums[i]];
        pivot++;
      }
    }
    [nums[pivot], nums[r]] = [nums[r], nums[pivot]];
    return pivot;
  }

  for (let i = 0; i < nums.length; i++) {
    const pivot = quickSelect(left, right);
    if (pivot === n - k) break;
    if (pivot > n - k) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }
  return nums[n - k];
}

function findKthLargestNLogN(nums: number[], k: number): number {
  /*
    Input: nums = [3,2,1,5,6,4], k = 2
    [1,2,3,4,5,6]
    Output: 5
    Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
    [1,2,2,3,3,4,5,5,6]
    Output: 4

    must solve in O(n)
    
     */
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}

export { findKthLargest };
