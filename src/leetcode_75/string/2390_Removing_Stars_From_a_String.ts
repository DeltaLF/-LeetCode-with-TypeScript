function removeStars(s: string): string {
  const res: string[] = [];

  for (let char of s) {
    if (char === "*") {
      res.pop();
    } else {
      res.push(char);
    }
  }

  return res.join("");
}

class Node {
  public val: string;
  public next: null | Node = null;
  public prev: null | Node = null;
  constructor(val: string, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

function removeStarsSlow(s: string): string {
  /*
    Input: s = "leet**cod*e"
    Output: "lecoe"
    Input: s = "erase*****"
    Output: ""

    1. transform string to double linked list
    2. start from head to removeStars
    3. recover the string
     */
  // build double linked list
  const head = new Node("#");
  let node: Node | null = head;
  for (let char of s) {
    const newNode = new Node(char);
    node.next = newNode;
    newNode.prev = node;
    node = newNode;
  }

  // remove star
  node = head;
  while (!!node) {
    // node will always be char instead of star
    if (node.next?.val === "*") {
      const prevNode: Node = node.prev!;
      prevNode.next = node.next.next;
      if (node.next.next) {
        node.next.next.prev = prevNode;
      }
      node = prevNode;
    } else {
      node = node.next;
    }
  }
  // recover
  node = head.next;
  let res = "";
  while (!!node) {
    res = res.concat(node.val);
    node = node.next;
  }
  return res;
}

export { removeStars };
