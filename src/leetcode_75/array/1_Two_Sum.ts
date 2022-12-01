

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function (nums:number[], target:number):number[]|undefined {
    const hashMap:{[key:string]:number} = {};
    // making map 
    nums.forEach((num,ind)=>{
        hashMap[num.toString()] = ind
    })
    console.log(hashMap)
    for(let i=0;i<nums.length;i++){
        const diff = target - nums[i];
        if(hashMap.hasOwnProperty(diff.toString())){
            if(i === hashMap[diff.toString()]) continue
            return [i,hashMap[diff.toString()]]
        }
    }


  };

  var twoSumBruteForce = function (nums:number[], target:number):number[]|undefined {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i === j) continue;
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }   

  };

  export {twoSum}