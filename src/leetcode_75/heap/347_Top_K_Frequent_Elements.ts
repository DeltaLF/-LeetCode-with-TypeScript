/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums:number[], k:number):number[] {
    // create a hash map
    const map:{[key:string]:number} ={};
    nums.forEach(num=>{
        const numStr = num.toString();
        if(!!map[numStr]){
            map[numStr] += 1;
        }else{
            map[numStr] = 1;
        }
    });

    let answer:number[]= []
    // try to optimize with bucket
    const bucket:number[][] | undefined[] = []
    for(let key in map){
        // bucket index = number count (sorted automatically)
        if( bucket[map[key]] ){
            bucket[map[key]] = [parseInt(key) as number, ...bucket[map[key]] as number[]];        
        }else{
            bucket[map[key]] = [parseInt(key)]
        }
    }
    for(let i =bucket.length;i>=0;i--){
        if(!!bucket[i]){
            answer = [...answer,...(bucket[i] as number[])];
        }
        if(answer.length === k){
            return answer
        }
    }
    return answer

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

export {topKFrequent}