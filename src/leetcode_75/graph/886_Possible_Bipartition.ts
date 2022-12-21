/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */


var possibleBipartition = function(n:number, dislikes:number[][]):boolean {
    // resume graph
    if(dislikes.length === 0) return true;
    const graph:number[][] = [];
    for(let i=0;i <= n;i++){
        graph.push([]);
    }
    for(let [hater1,hater2] of dislikes){
        graph[hater1].push(hater2);
        graph[hater2].push(hater1);
    }
    // assign groups
    const visitedList:boolean[] = [];
    const visitStack:number[] = [];
    // init
    let firstToVisist:number = -1;
    for(let i=0; i <= n;i++){
        if(graph[i].length === 0){
            visitedList[i] = true; // peace lover don't need to be in group
        }else{
            firstToVisist = i      // 
        }
    } 
    const group:{[key:string]:number} = {};
    visitStack.push(firstToVisist);
    while( visitStack.length > 0){
        const hater = visitStack.pop()!;
        if(visitedList[hater]) continue
        visitedList[hater] = true;
        if(!group[hater]){
            group[hater] = 1;
        }
        const hatedGroup = group[hater] === 1 ? 2 : 1;
        for(let hated of graph[hater]){
            if(!group[hated]){
                group[hated] = hatedGroup
            }
            if(group[hated] !== hatedGroup) return false;                
            visitStack.push(hated);
        }
    }
    return true;
    
};


var possibleBipartitionTimeExceeded = function(n:number, dislikes:number[][]):boolean{
    if(dislikes.length === 0) return true;
    /*
    fail with time exceeded: 
    in the worse case this approach has time complexity O(n^2)
    becasue the progress of a loop is based on some one (hater, hated) has been record. 

    Input: n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
    {
        1:1,3,5
        2:2,4
    }
    */
   const group:{[key:string]: number} = {[dislikes[dislikes.length-1][0]]: 1,[dislikes[dislikes.length-1][1]]:2 };
   dislikes.pop();
   let stack:number[][] = [];
   while(dislikes.length > 0 || stack.length > 0){
    if(dislikes.length === 0){
        dislikes = stack;
        stack = [];
    }
    const [hater, hated] = dislikes.pop()!;
    if(group[hated] === group[hater] && group[hated] === undefined){
        stack.push([hater,hated]);
        continue;
    }
    if(group[hated] === group[hater] && group[hated] !== undefined) return false;
    if(!!group[hater]){
        group[hated] = group[hater] === 1 ? 2 : 1;
    }
    if(!!group[hated]){
        group[hater] = group[hated] === 1? 2: 1;
    }
   }
   return true; 
};

export {possibleBipartition}