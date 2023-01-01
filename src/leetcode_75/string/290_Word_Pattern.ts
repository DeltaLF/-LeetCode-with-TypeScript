/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern:string, s:string):boolean {
    const splitStrArr = s.split(' ');
    if( splitStrArr.length !== pattern.length) return false;
    const hashMap:{[key:string]:string} = {};
    const record:{[key:string]:string} = {}; // make sure no duplciated
    for(let i=0;i < pattern.length; i++){
        if( !hashMap[pattern[i]] ){
            hashMap[pattern[i]] = splitStrArr[i];
            // if a new pattern word is duplicated to record
            if( !!record[splitStrArr[i]]) return false;
            record[splitStrArr[i]] = pattern[i];
        }

        if( hashMap[pattern[i]] !== splitStrArr[i] ){
            return false;
        }
    }
    return true;
};

export {wordPattern};