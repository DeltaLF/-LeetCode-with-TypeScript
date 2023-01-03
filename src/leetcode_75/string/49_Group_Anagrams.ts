/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs:string[]):string[][] {
    // transform str to alphet count array then transform alphet count array into string as hashmap key
    let alphbetArr = new Array(26).fill(0);
    // use let in order not to create lots of useless array
    const hashmap:{[key:string]:string[]} = {};
    for(let str of strs){
        for(let i=0;i < str.length;i++){
            alphbetArr[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        // transform array to string so we can use as hashmap key
        const alphbetStr = alphbetArr.join('_');
        alphbetArr = new Array(26).fill(0);
        if(!hashmap[alphbetStr]){
            hashmap[alphbetStr] = [str];
        }else{
            hashmap[alphbetStr].push(str);

        }
    }
    // very inefficient
    //  return Object.values(hashmap)

    const answer:string[][] = []
    for(let key in hashmap){
        answer.push(hashmap[key]);
    }
    return answer
};

export {groupAnagrams};