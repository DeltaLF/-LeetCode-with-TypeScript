/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s:string):boolean {
    const stack:string[] = [];
    for(let c of s){
        if(c === '(' || c==='{' || c==='['){
            stack.push(c);
        }else{
            const top = stack.pop();
            if(c === ')' && top ==='(' || c==='}' && top==='{' || c===']' && top==='['){
                continue;
            }else{
                return false
            }
        }
    }
    if(stack.length===0){
        return true;
    }else{
        return false;
    }
};

export {isValid};