import { canVisitAllRooms } from "../841_Keys_and_Rooms";

it('tests canVisitAllRooms or not',()=>{
    expect(canVisitAllRooms([[]])).toBe(true);
    // 2
    expect(canVisitAllRooms([[],[]])).toBe(false);
    expect(canVisitAllRooms([[1],[]])).toBe(true);
    // 3
    expect(canVisitAllRooms([[1,2,3],[],[],[]])).toBe(true);
    expect(canVisitAllRooms([[1,2],[3],[],[]])).toBe(true);
    expect(canVisitAllRooms([[1],[2],[3],[]])).toBe(true);
    expect(canVisitAllRooms([[1],[2],[],[3]])).toBe(false);
    expect(canVisitAllRooms([[1],[2],[],[1,2,3]])).toBe(false);

    
})