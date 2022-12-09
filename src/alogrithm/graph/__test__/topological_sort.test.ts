import { topologicalSort } from "../topological_sort";

it('tests topologicalSort of graph without cycle',()=>{
    expect(topologicalSort({A:[],B:['A']})).toEqual(['B','A']);
    expect(topologicalSort({A:['B'],B:[]})).toEqual(['A','B']);
    expect(topologicalSort({A:['C','D'],B:['E','C'],C:['D',],D:[],E:['A','C']})).toEqual(['B','E','A','C','D']);
});

it('tests topologicalSort of graph with cycle',()=>{
    expect(()=>{topologicalSort({A:['B'],B:['A']})}).toThrow(new Error('Cycle detected'));
    expect(()=>{topologicalSort({A:['B'],B:['A'],C:[],D:[]})}).toThrow(new Error('Cycle detected'));
    expect(()=>{topologicalSort({A:['C','D'],B:['E','C'],C:['D',],D:['E'],E:['A','C']})}).toThrow(new Error('Cycle detected'));
});