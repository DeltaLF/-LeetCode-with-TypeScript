/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses:number, prerequisites:number[][]):number[] {
    /*
    numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    classDependenies = {
        0:[]
        1:[0]
        2:[0]
        3:[1,2]
    }

    // what if multiple dependencies:
    numCourse = 4, prerequisties = [[4,3],[3,2],[2,1],[1,0]]

    numCourse = 4, prerequisties = [[0,1], [1,2],[2,3],[3,4]]

    */
   // init class dependence object
    const classDep:{[key:string|number]: number[]} = {}
    for(let i=0;i < numCourses;i++){
        classDep[i] = [];
    }
    for(let req of prerequisites){
        classDep[req[0]].push(req[1]);
    }
    const classOrder:number[] = [];
    const visitedObj:{[key:number|string]: 1 | 0 | -1} ={};
    let loopFound = false; 
    function traverseClass(className:string){
        if(visitedObj[className] === 1) return;
        visitedObj[className] = 0;
        for(let depClass of classDep[className]){
            if(visitedObj[depClass] === 0){
                loopFound = true;
                return;
            }
            traverseClass(depClass.toString());
        }
        visitedObj[className] = 1; // visited
        classOrder.push(parseInt(className));
    };
    // 1:visited, 0: visiting
    for(let className in classDep){
        if(visitedObj[className] === 1) continue;
        // iterate through the class dependencies and make the order
        traverseClass(className);
        if(loopFound) return [];
    };
    return classOrder;
    
};

export {findOrder};