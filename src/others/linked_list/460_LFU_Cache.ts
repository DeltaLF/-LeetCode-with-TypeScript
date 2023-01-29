/*
use double linked-list + 2 * hashMap
hsahMap[key] = node of double linked-list
freqHashMap[freq] = Double Linked-list

hashMap for get key value pair in O(1)
double linked-list for removing the least frequency used in O(1)

*/

class Node {
  public val: null | number = null;
  public key: null | number = null;
  public next: null | Node = null;
  public prev: null | Node = null;
  public freq: number = 1;
  constructor(key: number | null = null, val: number | null = null) {
    this.key = key;
    this.val = val;
  }
}

class DoubleLinkedList {
  public head: Node = new Node();
  public tail: Node = new Node();
  public size: number = 0;
  constructor() {
    this.head.prev = this.tail;
    this.tail.next = this.head;
  }
  addNode(newNode: Node) {
    // add node to head
    const oldNewestNode = this.head.prev!;
    newNode.prev = oldNewestNode;
    newNode.next = this.head;
    oldNewestNode.next = newNode;
    this.head.prev = newNode;
    this.size++;
  }
  deleteNode(node: Node) {
    // delete node with key
    const prevNode = node.prev!;
    const nextNode = node.next!;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.size--;
  }
}

class LFUCache {
  public hashMap: { [key: string]: Node } = {};
  public count: number = 0;
  public minFreq: number = 1;
  /*
  freqHashMap[1] stores Double linked list of node with freq 1
  freqHashMap[2] stores Double linked list of node with freq 2
  ....  
  */
  public freqHashMap: { [key: string]: DoubleLinkedList } = {
    1: new DoubleLinkedList(),
  };

  constructor(public capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    if (!this.hashMap[key]) {
      return -1;
    }
    const node = this.hashMap[key];
    // add freq
    this.updateNodeFreq(node);
    return node.val!;
  }

  updateNodeFreq(node: Node) {
    const dLinkedList = this.freqHashMap[node.freq];
    dLinkedList.deleteNode(node);
    // if the deleted node is at minFreq
    if (this.minFreq === node.freq && dLinkedList.size === 0) {
      this.minFreq++;
    }
    node.freq++;
    let nextDLinkedList: undefined | DoubleLinkedList =
      this.freqHashMap[node.freq];
    if (!nextDLinkedList) {
      nextDLinkedList = new DoubleLinkedList();
      this.freqHashMap[node.freq] = nextDLinkedList;
    }
    nextDLinkedList.addNode(node);
  }

  put(key: number, value: number): void {
    if (!!this.hashMap[key]) {
      const node = this.hashMap[key];
      node.val = value;
      this.updateNodeFreq(node);
    } else {
      // if node not yet exists
      const node = new Node(key, value);
      this.hashMap[key] = node;
      const dLinkedList = this.freqHashMap[1];
      dLinkedList.addNode(node);
      // make sure the capacity is not exceed
      if (this.capacity === this.count) {
        // remove node
        const minFreqLinkedList = this.freqHashMap[this.minFreq];
        const leastFreqNode = minFreqLinkedList.tail.next!;
        minFreqLinkedList.deleteNode(leastFreqNode);
        delete this.hashMap[leastFreqNode.key!];
      } else {
        this.count += 1;
      }
      this.minFreq = 1; // 1 is the minFreq
    }
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export { LFUCache, Node };
