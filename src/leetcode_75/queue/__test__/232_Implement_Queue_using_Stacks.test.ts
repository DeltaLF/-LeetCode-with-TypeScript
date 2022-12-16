import { MyQueue } from "../232_Implement_Queue_using_Stacks";

it('queue implemeted by stack',()=>{
    const queue =  new (MyQueue as any)();
    expect(queue.stack).toEqual([]);
    expect(queue.empty()).toBe(true);
    queue.push(1);
    expect(queue.stack).toEqual([1]);
    expect(queue.empty()).toBe(false);
    expect(queue.pop()).toBe(1);
    expect(queue.stack).toEqual([]);
    expect(queue.empty()).toBe(true);

    
    expect(queue.empty()).toBe(true);
    // push
    queue.push(1);
    expect(queue.empty()).toBe(false);
    expect(queue.stack).toEqual([1]);
    queue.push(2);
    expect(queue.empty()).toBe(false);
    expect(queue.stack).toEqual([1,2]);
    queue.push(3);
    expect(queue.empty()).toBe(false);
    expect(queue.stack).toEqual([1,2,3]);
    // peek and pop
    expect(queue.peek()).toBe(1);
    expect(queue.pop()).toBe(1);
    expect(queue.stack).toEqual([2,3]);
    expect(queue.peek()).toBe(2);
    expect(queue.pop()).toBe(2);
    expect(queue.stack).toEqual([3]);
    expect(queue.peek()).toBe(3);
    expect(queue.pop()).toBe(3);
    expect(queue.stack).toEqual([]);


})