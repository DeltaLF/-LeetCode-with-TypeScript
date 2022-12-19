/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures:number[]):number[]{
    const waitDays:number[] = new Array(temperatures.length).fill(0);
    const stack:number[] = [];
    let i = temperatures.length - 1;
    while(i >=0){
        console.log(i,temperatures, stack,waitDays)
        while(stack.length > 0 && temperatures[stack[stack.length - 1]] <= temperatures[i]){
            stack.pop();
        }
        if(temperatures[stack[stack.length - 1]] > temperatures[i]){
            waitDays[i] = stack[stack.length -1] - i;
        }
        stack.push(i);
        i--;
    };
    return waitDays;
}

var dailyTemperaturesBruteForce = function(temperatures:number[]):number[] {
    /*
    brutue force
    for i=0~n
       for j=i~n

    t = [73,74,75,71,69,72,76,73]
        [1 , 1, 0, 0, 0, 0, 0, 0]
                l
                r
    */
   const ans:number[] = [];
   for(let i=0;i < temperatures.length;i++){
    ans.push(0);
    for(let j=i+1; j < temperatures.length;j++){
        if( temperatures[i] < temperatures[j]){
            ans[i] = j - i;
            break;
        }
    }
   };
   return ans;    
};

export { dailyTemperatures}