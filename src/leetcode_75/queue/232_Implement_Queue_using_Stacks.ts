
var MyQueue = function() {
    this.stack = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x:number) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function():number {
    const backUp = [];
    const length = this.stack.length;
    for(let i =0;i < length;i++){
        backUp.push(this.stack.pop());
    }
    const result = backUp.pop();
    for(let i=length-2;i>=0;i--){
        this.stack.push(backUp.pop())
    }

    return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function():number {
    return this.stack[0];    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function():boolean {
    console.log(this.stack, this.stack.length)
    return this.stack.length === 0;    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

export {MyQueue}