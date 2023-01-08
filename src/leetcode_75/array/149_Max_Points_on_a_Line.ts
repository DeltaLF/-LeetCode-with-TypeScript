/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points:number[][]):number {
    /*
    [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
     |
     |  f
     |   e   c
     |     b
     | a     d
      _______________

      how to represent a line form by a,b?
      (a0 + t (b0 - a0),a1 + t(b1 - a1))
      any points satisfied the condtion lined on the line    

      but how do we know the two line are equal?
      (x0+ ty0, x1 + ty1)
      (a0+ tb0, a1 + tb1)
      1. y1 / y0 === b0 / b1 // same slope -> avoid ratio: b0 * y0 = y1 * b1
      2. given x=0 find wether y positions are the same 

      Or we can normalize the expression of a line:
      we regulate that the line must passed either 
      (0 + 1t, y1 + mt)
      or
      (1t, 0 + mt)

      brute force:
      iterate through any two points and write down the lines in the normalized expression(string) at haspmap
    */
      if( points.length === 1) return 1;
      const linesHashMap:{[key:string]:Set<number>} = {};
   let max = 0;
   // iterate through any two points once 
   for(let i =0;i < points.length -1; i++){
    for(let j=i+1;j < points.length;j++){
        const [a0,a1] = points[i];
        const [b0,b1] = points[j];
        /* normalized lineExpression:
        'a0,a1+'+slope.toFixed(0);
        a0 for x coordinate
        a1 for y coordinate
        one of a0,a1 must be 0;
         */
        let lineExpression:string = '';
        if( a0 === b0){
            // vertical line (not necessary pass y=0)
            // but must pass (a0,0) with slope === Infinity
            lineExpression = a0.toString()+',0+Infinity'
        }else if (a1 === b1)
        {
            // horizontal line (not necessary pass x=0)
            // but must pass (0,a1) with slope 0
            lineExpression = '0,' + a1.toString() + '+0';
        }else{
            // slope !== 0, Infinity
            /*
            line equations: (a0+t, a1+slope*t)
            if x coordinate is 0
            t = -a0
            y coordinate is a1 + slope * (-a0)
             */
            const slope = ((b1 - a1)/(b0 - a0));
            const yCoordinate = a1 - slope *(a0);
            lineExpression = '0,' + yCoordinate.toFixed(10) + '+' + slope.toFixed(10);  
        }
        if( !!linesHashMap[lineExpression] ){
        }else{
            linesHashMap[lineExpression] = new Set();
        }
        linesHashMap[lineExpression].add(i);
        linesHashMap[lineExpression].add(j);
        max = Math.max(max, linesHashMap[lineExpression].size)
    }
   }
    return max;
};

export {maxPoints};