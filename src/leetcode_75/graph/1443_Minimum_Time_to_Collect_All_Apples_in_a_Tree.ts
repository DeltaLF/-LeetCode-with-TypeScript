/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n:number, edges:number[][], hasApple:boolean[]):number {
    /*
     n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false]
            0
          /   \
         1     2
        / \   / \
       4   5 3   6
       dft can be used to find the total amount of time
       but how to find minimum of time if there is no apple?
       try:
         if there is no apple in the subnode -> elminate the time spent on child node

       issue: how to find the head of the tree? 0 is the head


       consider
       only node 2 contiains apple
       we start from 3:
        for child node:
          2, 4
          the time spent from 3->2 should be record at 3 or 2?
          think:3
          2: appple:true => return 1
          4: apple: false => return -1
          for 3: 1(to2) + 1(from2) + 1(to4) + -1(from4) > 0 => visited 3 is necessary
          return 2 + 0 + 1(from3 back to x)
          x
          |
         3:f
        /   \
      2:t   4:f
    */
   // transform graph
    if(n <=1 ) return 0;
    const graph:number[][] = [];
    for(let i=0;i<n;i++){
        graph[i] = [];
    }
    for(let [node1, node2] of edges){
        graph[node1].push(node2);
        graph[node2].push(node1);
    } 
    // tree traversal and evaluate the time
    function dft(node:number=0,prev:number=-1):number{
        let time = 0;
        for(let childNode of graph[node]){
            if( childNode !== prev ){
                time++;
                time +=  dft(childNode,node);
            }
        }
        if(time === 0){
            // no subtree or subtree no worth to be visited
            if( hasApple[node] ){
                // no subtree but current node is worth to be visited
                return 1; // time to travel back to parent
            }else{
                return -1;
            }
        }
        /* subtree or current tree worth to be visited
            time: time spent on visiting subTree
            1: we need to travel back to parent tree
        */
        return time + 1;
        }
        const result = dft() - 1;
        return result < 0 ? 0 : result;
   };


   export {minTime};