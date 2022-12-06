/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s:string, k:number):number {
    const alphabetArray = new Array(26).fill(0);
    let max = 0;
    let maxLetterCount =0;
    let start = 0;  // start of sliding window
    for(let end=0; end < s.length; end++){
        // positon of current letter + 1
        const currentLetterCount = alphabetArray[ s[end].charCodeAt(0) - 'A'.charCodeAt(0)]+=1;
        // maxLetterCount of alphabetArray
        maxLetterCount = Math.max(maxLetterCount, currentLetterCount)
        if( maxLetterCount + k < end - start + 1 ){
            // slide window is expanded too wide
            alphabetArray[s[start].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            start++;
        }
        // find the widest sliding window while making sure slide window is always valid
        max = Math.max(max, end - start + 1);
    }
    return max;
};

export {characterReplacement}