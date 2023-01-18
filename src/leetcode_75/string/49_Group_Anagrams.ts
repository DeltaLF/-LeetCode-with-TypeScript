/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs:string[]):string[][] {
    // transform str to alphabet count array then transform alphabet count array into string as hashmap key
    let alphabetArr = new Array(26).fill(0);
    // use let in order not to create lots of useless array
    const hashmap:{[key:string]:string[]} = {};
    for(let str of strs){
        for(let i=0;i < str.length;i++){
            alphabetArr[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        // transform array to string so we can use as hashmap key
        const alphabetStr = alphabetArr.join('_');
        alphabetArr = new Array(26).fill(0);
        if(!hashmap[alphabetStr]){
            hashmap[alphabetStr] = [str];
        }else{
            hashmap[alphabetStr].push(str);

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