/*
    ["KthLargest", "add", "add", "add", "add", "add"]
    [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
    Output
    [null, 4, 5, 5, 8, 8]
    
    Explanation
    KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    kthLargest.add(3);   // return 4
    kthLargest.add(5);   // return 5
    kthLargest.add(10);  // return 5
    kthLargest.add(9);   // return 8
    kthLargest.add(4);   // return 8
     */

class KthLargest {
  private nums: number[];
  private k: number;
  constructor(k: number, nums: number[]) {
    // large -> samll
    nums.sort((a, b) => b - a).splice(k); // we only need to keep k numbers
    this.nums = nums;
    this.k = k;
  }

  add(val: number): number {
    if (this.nums[this.k - 1] === undefined || val > this.nums[this.k - 1]) {
      console.log("vla", val, this.nums);
      let i = 0;
      while (this.nums[i] > val) {
        i++;
      }
      this.nums.splice(i, 0, val);
      if (this.nums.length > this.k) this.nums.pop();
    }
    return this.nums[this.k - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

export { KthLargest };
