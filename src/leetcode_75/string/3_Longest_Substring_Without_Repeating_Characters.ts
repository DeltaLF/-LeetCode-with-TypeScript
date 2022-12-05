/**
 * @param {string} s
 * @return {number}
 */
/*   d v d f
   | 0 1 
     | 
*/
 var lengthOfLongestSubstring = function(s:string):number{
    const hashMap: {[key:string]:number} = {};
    let maxLength =0;
    let index = -1;
    for(let i=0; i < s.length;i++){
        if(hashMap[s[i]] > index){
            index = hashMap[s[i]];
            hashMap[s[i]] = i;
        }else{
            hashMap[s[i]] = i;
            maxLength = Math.max(maxLength, i - index);
        }

    }

    return maxLength
 }

 var lengthOfLongestSubstringLessEff = function(s:string):number {
    // use hashMap to record index of unique letters 
    // once duplicated, clear the hashMap and start from the index+1 of the duplciated number
    let hashMap:{[key:string]:number} = {};
    let counter = 0;
    let maxLength = 0;
    // iterate through the string to find longest substring
    for(let i=0;i < s.length ; i++){
        if(hashMap[s[i]] >= 0){
            // duplication found
            const oldIndex = hashMap[s[i]];
            hashMap = {};
            i = oldIndex ; // re-iterate from the duplicated position + 1
            counter = 0;
        }else{
            hashMap[s[i]] = i; 
            counter+=1
            maxLength = Math.max(maxLength, counter)
        }
    }

    return maxLength;

};

export {lengthOfLongestSubstring};