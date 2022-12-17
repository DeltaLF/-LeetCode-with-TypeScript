/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function(tokens:(string)[]):number {
    const stack:number[] = [];
    let i=0;
    while(i < tokens.length){
        if( isNaN(parseInt(tokens[i]))){
            let right = stack.pop()!;
            let left = stack.pop()!;
            let result:number =left;
            switch(tokens[i]){
                case '+':
                    result = left + right;
                    break;
                case '-':
                    result = left - right;
                    break;
                case '*':
                    result = left * right;
                    break;
                case '/':
                    result =  (left / right) > 0? Math.floor(left/right) : Math.ceil(left/right);
                    break;
            }
            stack.push(result);

    }else{
        stack.push(parseInt(tokens[i]));
    }

    i++;
}
return stack.pop()!
}


var evalRPNRescursive = function(tokens:(string|number)[]):any {
    // exceed 
    if(tokens.length===1) return tokens[0]
    for(let i=0; i < tokens.length;i++){
        if( isNaN(parseInt(tokens[i] as string))){
            const left = parseInt(tokens[i-2] as string);
            const right = parseInt(tokens[i-1] as string);
            switch(tokens[i]){
                case '+':
                    tokens[i-2] = left + right;
                    break;
                case '-':
                    tokens[i-2] = left - right;
                    break;
                case '*':
                    tokens[i-2] = left * right;
                    break;
                case '/':
                    tokens[i-2] =  (left / right) > 0? Math.floor(left/right) : Math.ceil(left/right);
                    break;
            }
            return evalRPNRescursive(tokens.slice(0,i-1).concat(tokens.slice(i+1)));

    }
}}
var evalRPN_ = function(tokens:(string|number)[]):number {
    // 10 * 6 / (9+3)*-11 + 17 + 5
    let l=-1;
    let r=0;
    let operator=0;
    let resetRight = false;
    while(operator < tokens.length){
        console.log(tokens)
        if( isNaN(parseInt(tokens[operator] as string))){
            if(l===-1) l = operator -2;
            if(resetRight){ 
                r = operator - 1
            }else{
                r = l;
                l = l -1;
            };
            const left = parseInt(tokens[l] as string)
            const right = parseInt(tokens[r] as string)
            switch(tokens[operator]){
                case '+':
                    tokens[l] = left + right;
                    break;
                case '-':
                    tokens[l] = left - right;
                    break;
                case '*':
                    tokens[l] = left * right;
                    break;
                case '/':
                    tokens[l] = Math.floor(left / right);
                    if(tokens[l] < 0) tokens[l] = tokens[l] as number + 1;
                    break;
            }
            console.log("token after operator",left,tokens[operator],right, tokens[l])
            resetRight = false;
        }
        else{
            resetRight = true;
        }
        operator++;
    }
    return tokens[0] as number;

   };

   export {evalRPN};