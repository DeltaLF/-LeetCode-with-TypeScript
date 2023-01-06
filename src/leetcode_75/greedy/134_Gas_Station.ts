/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit = function(gas:number[], cost:number[]):number{
    let total = 0;
    for(let i=0; i < gas.length;i++){
        total += gas[i] - cost[i];
    }
    if( total < 0) return -1;
    total = 0;
    let ans = 0;
    for(let i=0; i < gas.length; i++){
        total += gas[i] - cost[i];
        if( total < 0){
            total = 0;
// the location between i is not going to be answer so update the ans
            ans = i + 1;
        }
    }
    return ans;
}


var canCompleteCircuit = function(gas:number[], cost:number[]):number {
    /**
     * gas = [1,2,3,4,5], cost = [3,4,5,1,2]
     * brutual force: iterate cost to check every starting point
     * time complexity: O(n^2)
     * diff = [-2, -2, -2, 3, 3]
     * 
     * gas = [2,3,4], cost = [3,4,3]
     * diff = [-1, -1, 1]     * 
     */
    const n = gas.length;
    // evaluate from 0
    let gasLeft:number;
    let j =0; // so outerloop can access j
    let failingPoint:number = -1;
    /**
     * 
     *  a x x x x x x  fail
     * start from point a and fail at point fail
     * should we test point between a and fail?
     * ex: a+1?  no a+1 because a>=0 if we start from a+1, then the amoumt before fail is decrase by point a
     * 
     */
    for(let i =0; i < n; i++){
        gasLeft = 0;
        if( failingPoint > i) i = failingPoint;
        for(j=0; j < n; j++){
            const location = i + j >= n ? i + j - n : i + j;
            gasLeft += gas[location] - cost[location];
            if( gasLeft < 0 ){
                failingPoint = location;
                break;
            }
        }
        if(j === n) return i;
    }
    return -1;
};

export {canCompleteCircuit};