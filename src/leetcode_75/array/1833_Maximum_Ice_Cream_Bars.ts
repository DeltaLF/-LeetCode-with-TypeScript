/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs:number[], coins:number):number {
    costs.sort((a,b)=>a-b);
    let i =0;
    while( coins > 0){
        if( costs[i] <= coins){
            coins -= costs[i];
            i++;
        }else{
            break;
        }
    }    
    return i;
};

export {maxIceCream};