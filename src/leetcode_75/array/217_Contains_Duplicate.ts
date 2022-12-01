/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums:number[]):boolean {
    nums.sort((a,b)=>{return a - b});
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] === nums[i+1]) return true
    }
    return false
}


 var containsDuplicateSet = function(nums:number[]):boolean {
    let set = new Set<number>();
    for(let num of nums){
        if(set.has(num)) return true;
        set.add(num)
    }
    return false}
 

 var containsDuplicateMap = function(nums:number[]):boolean {
    const hashMap:{[key:string]:boolean} = {};
    for(let num of nums){
        if(hashMap[num.toString()]){
            return true
        }else{
            hashMap[num.toString()] = true;
        }
    }
    return false
    
};

export {containsDuplicate}