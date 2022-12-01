
class ListNode<T>{
    public next: ListNode<T> | null = null;
    constructor(public val:T){
        this.val = val;
    }
}

export {ListNode}