/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */



var canFinish = function(numCourses:number, prerequisites:number[][]):boolean{
    // init 2 array one for record depedencies another for recording checking status
    const courseDep:number[][] = [];
    for(let i =0;i<numCourses;i++){
        courseDep.push([])
    }
    prerequisites.forEach(depPair=>{
        const [course, preReqCourse] = depPair;
        courseDep[course].push(preReqCourse);
    });
    const courseStatus:(1|0|-1)[] = new Array(numCourses).fill(0);
    /*
    If there is a course under checking condition while we checking course i, this means
    that they are mutal depeneded.  
    1. checked
    0. hasn't been checked
    -1. checking
     */
    function checkCourse(courseId:number):boolean{
        console.log("checkcourse",courseDep,courseStatus, "currentCourse",courseId)
        // false means mutal depedenies found
        if(courseStatus[courseId] === -1) return false;
        if(courseStatus[courseId] === 1) return true;
        courseStatus[courseId] = -1; // checking in progress
        for(let requiredCourse of courseDep[courseId]){
            if(!checkCourse(requiredCourse)) return false;
        }
        courseStatus[courseId] = 1; // finish check 
        return true;
    };
    for(let i =0; i<numCourses;i++){
        // check all coures
        if(!checkCourse(i)) return false;
    }
    return true;
};

var canFinishInefficient = function(numCourses:number, prerequisites:number[][]):boolean {
    //brute force exceeds time limit
    /*
    It is not wise to record every course status in coruse object seperately
    this makes the updating unefficient
    rather: use extra sapce to record it
     */
    const courseReqArray:({[key:string]:boolean}|undefined)[] = new Array(numCourses).fill(undefined);
    prerequisites.forEach((req)=>{
        const [course, reqCourse] = req;
        if(!courseReqArray[course]){
            // hasn't add any dependencies
            courseReqArray[course] = { [reqCourse]: false };
        }else{
            courseReqArray[course]![reqCourse] = false;
        }
    })



    function courseCheck():boolean{
        let allCheck = true;
        for(let courseInd in courseReqArray){
            if(!!courseReqArray[courseInd]){
                let coruseFinish = true;
                for(let key in courseReqArray[courseInd]){
                    if( !courseReqArray[parseInt(key)]){
                        // if dependency is taken (undefined) -> the current dependency is gone (true)
                        courseReqArray[courseInd]![key] = true;
                    }
                    // if any of dependency hasn't been fulfilled, course is not finished
                    coruseFinish = coruseFinish && courseReqArray[courseInd]![key]
                }
                if(coruseFinish){courseReqArray[courseInd] = undefined};
            }
            // if any course still not finish -> allCheck is false
            allCheck = allCheck && !courseReqArray[courseInd] 
        }
        return allCheck
    }

    for(let i=0; i < numCourses;i++){
        if(courseCheck()) return true
    }
    return false

    

    /*
    numCourses: define nodes 
    prequisites: edges (path)

    when we cannot finish a class? A loop between coures

    2 [[0,1], [1,0]]
    0 <-> 1



    a loop means: from A to B there are more then one way (not sure)
       0 - 2 - 3
      /    | 
     1  -  4 - 5 
     |
     6
      0  1  2  3  4  5
    0 0  1  1  2  2  3
    1 1  0  2  3  1  2 
    2
    3
    4
    5

     */
};

export {canFinish};