/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks:number[]):number {
    // sequence doesn't matter
    // key point: every number count can be compose with 2 or 3 combination

    // convert array to hashtable
    const hashmap:{[key:string]:number} = {}
    for(let task of tasks){
        if(!hashmap[task.toString()]){
            hashmap[task.toString()] = 1;
        }else{
            hashmap[task.toString()] += 1;
        }
    }

    let totalRounds = 0;
    /*
    minrounds for single number: 
    n % 3 = 0, 1,  2
    */
    function minRound(num:number):number{
        if(num < 2) return -1;
        let rounds = Math.floor(num / 3);
        if(num % 3 === 0){
            return rounds;
        }else{
            /*
            for % 3 === 1 minus 1 for 3 plus 2 for 2 => +1
            for % 3 === 1 plus 1 for 2 => +1
             */
            return rounds + 1;
        }
    }
    for(let key in hashmap){
        const singleRound = minRound(hashmap[key]);
        if(singleRound === -1) return -1;
        totalRounds += singleRound;
    }
    return totalRounds;
};

export {minimumRounds};