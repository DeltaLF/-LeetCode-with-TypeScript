/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

var validPath = function(n:number, edges:number[][], source:number, destination:number):boolean {
    // Disjoint Set Union;
    // init: every node is in different set
    const parent:number[] = [];
    for(let i=0; i<n ;i++){
        parent[i] = i;
    }

    // find set => find the root element, the root element represents the set 
    function findSet(a:number):number{
        if( parent[a] === a){
            return a;
        }
        return findSet(parent[a]);
    }
    // unionSet input two set a,b 
    // union them by append b to a
    function unionSet(a:number,b:number){
        const aAncestor = findSet(a);
        const bAncestor = findSet(b);
        if(aAncestor !== bAncestor){
            // append b to a;
            parent[bAncestor] = aAncestor;
        }
    }
    for(let [node1, node2] of edges){
        unionSet(node1, node2);
    };
    // if the source and destination are in the same set => the path is valid
    return findSet(source) === findSet(destination);
};

var validPathDFT = function(n:number, edges:number[][], source:number, destination:number):boolean {
    // transform graph
    const graph:number[][] = []
    const isVisited:boolean[] = new Array(n).fill(false);
    for(let i=0;i < n;i++){
        graph.push([]);
    }
    for(let [node1, node2] of edges){
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    //iterate if no more edge or back to source => break 
    (function dft(node:number){
        isVisited[node] = true;
        for(let adjNode of graph[node]){
            // iterate through adjacent ndoes and vist those who hasn't been visited
            if(!isVisited[adjNode]){
                dft(adjNode);
            }
        }
    })(source)
    return isVisited[destination];
};

export {validPath}