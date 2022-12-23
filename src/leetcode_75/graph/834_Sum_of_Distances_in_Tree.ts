/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var sumOfDistancesInTree = function(n:number, edges:number[][]):number[]{
    /*
    what we want to achieve: not iterate n nodes and find the summation of pathes one by one
    how we can do it: infer summation of path from other root's summation of path
           0
         /   \
        1     2
       /     /   \
      5     3     4
        the sumDistance(0) = 8
    we can infer sumDistance(1) from sumDistance(0) by:
    if we move root from 0 to 1 
    all the distance of 1's subtree are closer by 1
    while all the distance of n - (1's subtree) are farer by 1
    so we can say:
    sumDistance(0) = sumDistance(1) - subTreeCount(1) + (n - subTreeCount(1))
    
    then what we need to get in order to make this infering valid?
    1. sumDistance(1)
    2. subTreeCount(0,1,2,3,4,5) 
    */
   if(n===1) return [0]
   const tree:number[][] = [];
   const subTree:number[] = new Array(n).fill(1);
   const answer:number[] = [];
   // recover the tree
   for(let [node1, node2] of edges){
    if(!tree[node1]){
        tree[node1] = [node2];
    }else{
        tree[node1].push(node2);
    }
    if(!tree[node2]){
        tree[node2] = [node1];
    }else{
        tree[node2].push(node1);
    }
   }
   // find 0 sum
   function dft(root:number, pre:number=-1, layer:number=0):number{
    let sumPath = 0;
    tree[root].forEach(adjNode=>{
       if(pre !== adjNode){ // prevent going back and forward to form an infinite loop
        sumPath += dft(adjNode,root,layer+1);
        subTree[root] += subTree[adjNode];
       }
    })
       return layer + sumPath;
    }
  answer[0] = dft(0);
  // infer other node sumDistance 
  function dftInfer(root:number,pre:number=0){
    tree[root].forEach(adjNode=>{
        if(adjNode !== pre){
            answer[adjNode] = answer[root] - subTree[adjNode] + (n - subTree[adjNode]);
            dftInfer(adjNode, root);
        }
    })
  }
  dftInfer(0);
  
  return answer;
}


var sumOfDistancesInTreeBruteForece = function(n:number, edges:number[][]):number[] {
    /*
    brute force has time complexity O(n^2) so won't pass the test
    */
    if(n===1) return [0]
    const isVisisted:number[] = new Array(n).fill(-1);
    const answer:number[] = new Array(n).fill(0);
    const graph:number[][] = [];
    for(let [node1, node2] of edges){
        if(!graph[node1]){
            graph[node1] = [node2]
        }else{
            graph[node1].push(node2)
        }
        if(!graph[node2]){
            graph[node2] = [node1];
        }else{
            graph[node2].push(node1);
        }
    };
    function dft(root:number, round:number,layer:number=0){
        isVisisted[root] = round;
        answer[round]+=layer;
        graph[root].forEach(adjNode=>{
            if(isVisisted[adjNode] !== round){
                dft(adjNode,round,layer+1);
            }
        })
    }
    for(let i=0; i < n;i++){
        dft(i,i);
    }
    return answer;

};

export {sumOfDistancesInTree}