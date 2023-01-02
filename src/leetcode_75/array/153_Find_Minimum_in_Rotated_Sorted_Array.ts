/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums:number[]):number {
    /*
    in order to finish in O(logn) time => binary search
    but the array is rotated
    a  0 1 2 3 4 5
    b  5 0 1 2 3 4
    b  4 5 0 1 2 3
    c  3 4 5 0 1 2
    c  2 3 4 5 0 1
    c  1 2 3 4 5 0
    left    middle     right 
    4 conditions: (there is no equal case)
    a. l < m, r > m  // min on the left
    b. l > m, r > m  // min on the left
    c. l < m, r < m  // min on the right 
    d. l > m, r < m  // never gonna happen
    // double check
    a 0 1 2 3 4
    b 4 0 1 2 3
    b 3 4 0 1 2
    c 2 3 4 0 1
    c 1 2 3 4 0
    */
   let l = 0;
   let r = nums.length - 1;
   let middle = Math.floor((l + r)/2);
   let min = Math.min(nums[l], nums[middle], nums[r] );
   while(r > l && r !== middle && l !== middle){
    min = Math.min(min,nums[l], nums[middle], nums[r] );
    if( nums[l] < nums[middle] && nums[r] < nums[middle] ){
        // min on the right hand side
        l = middle;
    }else{
        // min on the left hand side
        r = middle;
    }
    middle = Math.floor((l + r)/2)
   }
   return min;
};

export {findMin}