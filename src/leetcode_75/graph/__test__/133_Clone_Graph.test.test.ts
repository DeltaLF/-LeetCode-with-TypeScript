import { cloneGraph } from "../133_Clone_Graph";
import {Node} from "../graph.type"

it('tests cloneGraph function', ()=>{
    // epmty
    expect(cloneGraph(null)).toEqual(null);
    // one
    const one = new Node(1);
    expect(cloneGraph(one)).toEqual(new Node(1));

    function node4(){
        const node1 = new Node(1);
        const node2 = new Node(2);
        const node3 = new Node(3);
        const node4 = new Node(4);
        node1.neighbors = [node2, node4];
        node2.neighbors = [node1, node3];
        node3.neighbors = [node2, node4];
        node4.neighbors = [node2, node1];
        return node1;
    }
    const node = node4();
    const cloneNode = node4();
    expect(cloneGraph(node)).toEqual(cloneNode);
    


});