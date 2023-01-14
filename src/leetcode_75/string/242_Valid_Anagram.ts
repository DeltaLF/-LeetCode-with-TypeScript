/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s:string, t:string):boolean {
    if(s.length !== t.length) return false;
    const hashMap:{[key:string]:number} = {};
    for(let letter of s){
        if(!hashMap[letter]){
            hashMap[letter] = 1;
        }else{
            hashMap[letter] ++;
        }
    }
    // check
    for(let letter of t){
        if(!hashMap[letter]){
            return false;
        }else{
            hashMap[letter] --;
        }
    }
    return true;
};

export {isAnagram};