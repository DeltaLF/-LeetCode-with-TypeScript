/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var findMinHeightTrees = function(n:number, edges:number[][]):number[]{
    if(n===1) return [0];
    const graph:{[key:string]: number[]} ={}
    for(let [node1, node2] of edges){
        graph[node1] ? graph[node1].push(node2) : graph[node1] = [node2];
        graph[node2] ? graph[node2].push(node1) : graph[node2] = [node1];
    }
    // trim down the leaves
    let leaves:number[] =[];
    for(let key in graph){
        if(graph[key].length === 1){
            leaves.push(parseInt(key));
        }
    }
    while(n > 2){
        n = n - leaves.length;
        const leavesToTrim:number[] = [];
        while(leaves.length > 0){
            const leaf =leaves.pop()!;
            const node = graph[leaf][0];
            graph[node] = graph[node].filter(n=>n!==leaf);
            delete graph[leaf];
            if(graph[node].length === 1) leavesToTrim.push(node);
            delete graph[leaf];
        }
        leaves = leavesToTrim;
    }
    const result:number[] = [];
    for(let key in graph){
        result.push(parseInt(key));
    }
    return  result;
};

var findMinHeightTreesUnoptimized = function(n:number, edges:number[][]):number[]{
    if(n===1) return [0];
    const graph:{[key:string]: number[]} ={}
    for(let [node1, node2] of edges){
        graph[node1] ? graph[node1].push(node2) : graph[node1] = [node2];
        graph[node2] ? graph[node2].push(node1) : graph[node2] = [node1];
    }
    // trim down the leaves
    while(n > 2){
        const leavesToTrim:number[] = [];
        for(let key in graph){
            // we don't want to change object while iterating through it
            if(graph[key].length === 1){
                leavesToTrim.push(parseInt(key));
            }
        }
        for(let leave of leavesToTrim){
            // remove leaves
            const node = graph[leave][0];
            graph[node] = graph[node].filter(n=>n!==leave);
            delete graph[leave];
        }
        n = n - leavesToTrim.length;
    }
    const result:number[] = [];
    for(let key in graph){
        result.push(parseInt(key));
    }
    return  result;
};

var findMinHeightTreesTLE = function(n:number , edges: number[][]):number[] {
    if(n===1) return [0];
    /*
    by brute forece 
    write dft with record the height
    minHeight:number
    iterate through nodes
    {
        treeHeightI: [ node1, node4,..]
        treeHeightII: [node3, node5]   
    }

    though II: 
    the max height possible: edges.length + 1
    whenver a ndoe connect more then two edge: height --
    the min height : 2
     */
    const graph:{[key:string]: number[]} ={}
    for(let [node1, node2] of edges){
        graph[node1] ? graph[node1].push(node2) : graph[node1] = [node2];
        graph[node2] ? graph[node2].push(node1) : graph[node2] = [node1];
    }
    const heightCount:{[key:number]:number[]} = {};
    // iterate through all root
    /*
    {
        0:[1]
        1:[2,4]
        2:[3]
    }
    [1 ,1 ,1,0]
    
    */
    let minHeight = Infinity
    for(let i =0; i < n; i++){
        const visited:boolean[] = new Array(n).fill(false);
        const height = (function traverse(node:number):number{
            if(visited[node]) return 0; 
            visited[node] = true;
            let maxHeight = 0;
            for(let adjNode of graph[node]){
                maxHeight = Math.max(maxHeight, traverse(adjNode));
            }
            return maxHeight + 1;
        })(i);
        minHeight = Math.min(minHeight, height);
        heightCount[height] ? heightCount[height].push(i) : heightCount[height] = [i];
    }
    return heightCount[minHeight];

};


export { findMinHeightTrees };