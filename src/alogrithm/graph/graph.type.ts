class Node<T>{
    constructor(public val:T,public neighbors:Node<T>[] = []){
        this.val = val;
        this.neighbors = neighbors;
    }
}

export {Node};