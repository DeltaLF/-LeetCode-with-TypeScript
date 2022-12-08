/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

import { Node } from "./graph.type";
/**
 * @param {Node} node
 * @return {Node}
 */


 var cloneGraph = function(node:Node|null):Node|null {
    if(!node) return null;
    // traversal node graph and clone it
    /*
    issue: when a current visiting 4 how do I access cloned node 2,3
    0 - 1 - 2 -5
        |   |
        3 - 4

    visit 0
    0 (should I build all neghbiors now?)
    visit 1
    0 - 1 
    */

    const cloneList:Node[] = [];
    // try dft
    const dft = (node:Node)=>{
        // create a cloneList without neighbors
        if(!!cloneList[node.val]) return;
        cloneList[node.val] = new Node(node.val);
        node.neighbors.forEach(neighborNode=>{
            if(!cloneList[neighborNode.val]){
                dft(neighborNode)
            }
        })
    }
    dft(node)  // make clone node without edges (neighbors)
    const dftAddNeighbors = (node:Node) => {
        if(cloneList[node.val].neighbors.length > 0) return;
        node.neighbors.forEach(neighborNode=>{
            cloneList[node.val].neighbors.push(cloneList[neighborNode.val]);
            if(cloneList[neighborNode.val].neighbors.length === 0){
                dftAddNeighbors(neighborNode)
            }
        });
    };
    dftAddNeighbors(node);

    return cloneList[node.val];
    
};

export {cloneGraph};