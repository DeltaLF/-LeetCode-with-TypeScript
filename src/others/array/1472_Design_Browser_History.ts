class Node {
  public val: string;
  public prev: Node | null = null;
  public next: Node | null = null;
  constructor(val: string) {
    this.val = val;
  }
}
class BrowserHistory {
  public node: Node;
  constructor(homepage: string) {
    this.node = new Node(homepage);
  }

  visit(url: string): void {
    this.node.next = new Node(url);
    this.node.next.prev = this.node;
    this.node = this.node.next;
  }

  back(steps: number): string {
    for (let i = 0; i < steps; i++) {
      if (this.node.prev) {
        this.node = this.node.prev;
      }
    }
    return this.node.val;
  }

  forward(steps: number): string {
    for (let i = 0; i < steps; i++) {
      if (this.node.next) {
        this.node = this.node.next;
      }
    }
    return this.node.val;
  }
}

class BrowserHistoryStack {
  public stack: string[] = [];
  public homePage: string = "";
  public currInd = 0;
  constructor(homepage: string) {
    this.homePage = homepage;
    this.stack.push(homepage);
  }

  visit(url: string): void {
    // clear the history > curr
    if (this.currInd < this.stack.length - 1) {
      this.stack.splice(this.currInd + 1);
    }
    // if (this.stack[this.currInd] !== url) {
    // not sure what to do if current url === visist url
    this.stack.push(url);
    this.currInd += 1;
    console.log("visit", url, this.stack, this.currInd);
    // }
  }

  back(steps: number): string {
    this.currInd = this.currInd - steps >= 0 ? this.currInd - steps : 0;
    return this.stack[this.currInd];
  }

  forward(steps: number): string {
    this.currInd =
      this.currInd + steps > this.stack.length - 1
        ? this.stack.length - 1
        : this.currInd + steps;
    return this.stack[this.currInd];
  }
}

export { BrowserHistory };
