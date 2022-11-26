import { TreeNode } from "./tree.type";

const testCaseII = [-240,-500,-476,87,-783,-960,964,779,-317,532,190,-140,763,606,591,-202,-863,null,317,697,-943,811,-301,null,null,439,-56,-516,-586,670,-62,null,760,null,595,null,-929,808,null,null,862,-590,222,993,240,-895,-882,956,-301,909,null,742,537,null,null,273,228,null,null,-512,-357,null,null,-324,-797,-143,-784,324,null,null,-487,null,null,null,null,996,367,604,96,528,-127,-885,932,-51,464,null,null,608,-801,569,null,562,-412,-385,-451,579,368,null,null,null,null,-657,56,54,-506,null,425,null,null,933,76,-957,null,751,916,-988,182,247,817,-631,62,89,-297,937,32,null,null,null,null,null,888,null,null,-350,null,489,null,423,null,null,855,191,null,344,209,null,-521,-235,-148,-207,null,null,null,null,null,null,null,929,592,null,99,null,978,836,381,-664,-119,null,-84,null,null,null,null,null,-266,null,-603,303,-698,null,null,-94,null,null,null,null,null,null,null,null,null,null,-870,null,null,856,138,null,null,null,null,-456,null,null,null,null,null,null,4,null,null,null,null,null,884,-606,null,-139,905,null,174,null,302,-489,null,null,-208,-347,219,-457,null,null,null,-692,null,565,null,null,260,908,null,null,null,null,null,304,null,null,null,null,null,-237,529,-217,485,null,null,null,null,null,942,null,-248,null,null,-703,-872,818,-71,null,null,null,null,null,null,null,null,null,null,null,-160,null,null,null,null,null,null,-119,null,null,null,null,null,null,-762,null,249,null,-983,null,null,null,null,null,null,-842,null,567,null,null,null,null,null,null,493]
const testCase = [1,2,3,null,5,null,7]
const treeTransfer = (arr:(number|null)[]):TreeNode => {

    if(!arr || !arr?.[0]) return new TreeNode();
    const queue:TreeNode[] = []
    const root = new TreeNode(arr.shift()!)
    queue.push( root );
    while(queue.length > 0){
        const node = queue.shift()!;
        const left = arr.shift();
        const right = arr.shift();
        if(Number.isInteger(left)){
            node.left = new TreeNode(left as number)
            queue.push(node.left)
        }
        if(Number.isInteger(right)){
            node.right = new TreeNode(right as number);
            queue.push(node.right)
        }
    }

    console.log(root)
    return root
}

treeTransfer(testCase)