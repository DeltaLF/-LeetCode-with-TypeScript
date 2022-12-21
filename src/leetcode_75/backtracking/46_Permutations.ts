/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums:number[]):number[][]{
    /*
    we want to break permute problem into sub-problem
    ex:
    [1,2,3] => 
    3 sub-problems
    1. we select 1 as value of first permutation [1,x,x] => permue([2,3])
    2. we select 2 as value of first permutation [2,x,x] => permue([3,1])
    3. we select 3 as value of first permutation [3,x,x] => permue([1,2])

    for base case:
    [1] => return [[1]]
    */

    const answer:number[][] = [];
    // for base case
    if(nums.length === 1) return [[nums[0]]];
    for(let i=0; i < nums.length;i++){
        // how long current nums is, how many subproblems can be divided
        const n = nums.shift()!;
        const subPerms = permute(nums);
        for(let subPerm of subPerms){
            subPerm.push(n);
            answer.push(subPerm);
        }
        nums.push(n);
    }
    return answer;

}

var permuteRecursive = function(nums:number[]):number[][] {    
    /*



      numbers are unique
      the answer.length: !nums.length
    */
   const answer:number[][] = [];
   function swap(i:number,j:number){
    [nums[i], nums[j]] = [nums[j], nums[i]]
   }

   function helper(arr:number[], ind:number){
    if(ind >= nums.length){
        answer.push(arr.slice())
        return;
    }
    for(let i=ind; i < nums.length;i++){
        swap(ind,i)
        helper(arr, ind+1);
        swap(ind,i)
    }

   }
   helper(nums,0);


   return answer
};

export { permute };