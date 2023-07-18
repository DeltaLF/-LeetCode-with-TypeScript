class LRUCacheTS {
  private head: DoubleLinkedlistNode;
  private tail: DoubleLinkedlistNode;
  private capacity: number;
  private map = new Map<string, DoubleLinkedlistNode>();
  constructor(capacity: number) {
    this.head = new DoubleLinkedlistNode("head", -1);
    this.tail = new DoubleLinkedlistNode("tail", -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.capacity = capacity;
  }

  get(key: number): number {
    const node = this.map.get(key.toString());
    if (node === undefined) return -1;
    this.movToHead(node);
    return node.val;
  }
  movToHead(node: DoubleLinkedlistNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;

    node.next = this.head.next;
    node.next!.prev = node;
    node.prev = this.head;
    this.head.next = node;
  }

  put(key: number, value: number): void {
    const oldNode = this.map.get(key.toString());
    if (oldNode === undefined) {
      const newNode = new DoubleLinkedlistNode(key.toString(), value);
      this.map.set(key.toString(), newNode);
      newNode.next = this.head.next;
      this.head.next!.prev = newNode;
      newNode.prev = this.head;
      this.head.next = newNode;
      if (this.map.size > this.capacity) {
        const depricatedNode = this.tail.prev;
        this.map.delete(depricatedNode!.key);
        this.tail.prev!.prev!.next = this.tail;
        this.tail.prev = this.tail.prev!.prev;
      }
    } else {
      this.movToHead(oldNode);
      oldNode.val = value;
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class DoubleLinkedlistNode {
  public prev: DoubleLinkedlistNode | null = null;
  public next: DoubleLinkedlistNode | null = null;
  constructor(public key: string, public val: number) {
    this.key = key;
    this.val = val;
  }
}

/**
 * @param {number} capacity
 */

var LRUCache = function (capacity: number) {
  this.capacity = capacity;
  this.hashMap = {} as { [key: string]: DoubleLinkedlistNode };
  this.count = 0;
  this.left = new DoubleLinkedlistNode("left", -1);
  this.right = new DoubleLinkedlistNode("right", -1);
  this.left.next = this.right;
  this.right.prev = this.left;
} as any;

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key: number): number {
  if (!!this.hashMap[key]) {
    this.updateRank(key);
    return this.hashMap[key].val;
  } else {
    return -1;
  }
};

LRUCache.prototype.updateRank = function (key: number, val?: number): void {
  // for both put and get
  if (val !== undefined) {
    this.hashMap[key].val = val;
  }
  /*
    left -> 1 -> 2 -> 3 -> right
    1. connect node.prev, ndoe.next
    2. put node to the top
     */
  if (this.hashMap[key] === this.right.prev) return;
  const node = this.hashMap[key];
  // connect node.prev, node.next
  node.prev.next = node.next;
  node.next.prev = node.prev;
  // move node to the rightest
  const oldNewestNode = this.right.prev;
  oldNewestNode.next = node;
  node.prev = oldNewestNode;
  node.next = this.right;
  this.right.prev = node;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key: number, value: number): void {
  if (this.hashMap[key] !== undefined) {
    // key exisit
    this.updateRank(key, value);
    return;
  }
  const node = new DoubleLinkedlistNode(key.toString(), value);
  if (this.count < this.capacity) {
    const oldNewestNode = this.right.prev;
    this.right.prev = node;
    node.next = this.right;
    node.prev = oldNewestNode;
    oldNewestNode.next = node;
    this.hashMap[key] = node;
    this.count++;
  } else {
    // replace oldestNode with new node and then update rank
    const oldOldestNode = this.left.next;
    this.left.next = node;
    node.prev = this.left;
    oldOldestNode.next.prev = node;
    node.next = oldOldestNode.next;
    delete this.hashMap[oldOldestNode.key];
    this.hashMap[key] = node;
    this.updateRank(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export { LRUCache, LRUCacheTS };
