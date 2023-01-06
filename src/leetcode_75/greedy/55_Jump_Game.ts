/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJumpGreedy = function(nums:number[]):boolean{
    /**
     * [2,3,1,1,4]
     * length: n
     * start from 4
     * examine n -1: 1 => n - 1 position can reach n
     * this means if we are able to reach n-1 -> we are guaranteed to make it to the end (n)
     * 
     */
    let endPoint = nums.length - 1;
    for(let i = nums.length-2; i >= 0; i--){
        if( nums[i] + i >= endPoint ){
            // from position i is able to reach endPoint:
            endPoint = i;
        }
    }
    return endPoint === 0;
}

var canJump = function(nums:number[]):boolean {
    /**
     * time exceeded
     * nums = [2,3,1,1,4]
     */

    const memoizedArr:boolean[] = [];
    function jump(pos:number = 0):boolean{
        if(memoizedArr[pos] !== undefined) return memoizedArr[pos];
        const maxJump = nums[pos];
        if( maxJump + pos >= nums.length -1 ) return true;
        for(let step = maxJump; step > 0; step--){
            if( jump( pos + step ) ){
                memoizedArr[pos + step] = true;
                return true;
            } else{
                memoizedArr[pos + step] = false;
            }
        }
        memoizedArr[pos] = false;
        return false;
    };

    return jump();
};

var canJumpTimeExceeded = function(nums:number[]):boolean {
    /**
     * time exceeded
     * nums = [2,3,1,1,4]
     */

    const memoizedArr:boolean[] = [];
    function jump(pos:number = 0):boolean{
        if(memoizedArr[pos] !== undefined) return memoizedArr[pos];
        if(pos === nums.length -1) return true;
        const maxJump = nums[pos];
        if(maxJump === 0) return false;
        for(let step =1; step <= maxJump; step++){
            if( jump( pos + step ) ){
                memoizedArr[pos + step] = true;
                return true;
            } else{
                memoizedArr[pos + step] = false;
            }
        }
        memoizedArr[pos] = false;
        return false;
    };

    return jump();
};

export {canJump};