// implement set with graph

class DisjointSet{
    public parent:number[] = [];
    public size:number[] = [];
    constructor(public n:number){
        // n: size of the nodes
        for(let i=0; i<n;i++){
            // seperate nodes into different sets
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }
    makeSet(a:number):void{
        this.parent[a] = a;
        this.size[a] = 1;
    };
    findSet(a:number):number{
        if( this.parent[a] === a){
            return a;
        }
        return this.parent[a] = this.findSet(this.parent[a]);
    }
    unionSets(a:number, b:number):void{
        const aAncestor = this.findSet(a);
        const bAncestor = this.findSet(b);
        if(aAncestor === bAncestor) return;
        // append smaller set to larger set
        if( this.size[aAncestor] < this.size[bAncestor]){
            this.parent[aAncestor] = bAncestor;
            this.size[bAncestor] += this.size[aAncestor]
        }else{
            this.parent[bAncestor] = aAncestor;
            this.size[aAncestor] += this.size[bAncestor]
        }
    }
}


export {DisjointSet}