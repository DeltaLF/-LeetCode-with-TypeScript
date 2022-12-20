/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms:number[][]):boolean {
    const isVisited:boolean[] = new Array(rooms.length).fill(false);
    const toVisitStack:number[] = [0];

    while(toVisitStack.length > 0){
        const room = toVisitStack.pop()!;
        if(isVisited[room]) continue
        isVisited[room] = true;
        rooms[room].forEach(key=>{
            toVisitStack.push(key);
        })

    };
    return isVisited.reduce((prev,curr)=>{return prev && curr},true);
};

export {canVisitAllRooms}