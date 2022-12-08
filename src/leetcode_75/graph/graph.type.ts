class Node{
    constructor(public val:number, public neighbors:Node[] = []){
        this.val = val;
        this.neighbors = neighbors;
    }
}


export {Node};