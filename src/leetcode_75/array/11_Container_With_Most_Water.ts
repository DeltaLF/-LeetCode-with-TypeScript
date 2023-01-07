/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height:number[]):number {
    /*
    height = [1,8,6,2,5,4,8,3,7]
    for brutue force: O(n^2):
    try all combinations of any 2 vertical lines
    for optimized solution:
    [1,8,6,2,5,4,8,3,7]
     l               r
    we don't need to try all combinations 
    for example:
    l=height[0] = 1
    r=height[8] = 7
    it's pointless to try the combinations of fix l while shrinking r
    => only make smaller result 
     */
    let left = 0;
    let right = height.length -1;
    let max = -Infinity;
    while(left < right){
        max = Math.max(max,(right - left)*(Math.min(height[left],height[right])));
        if( height[left] > height[right] ){
            // shrink right hand side
            right--;
        }else{
            left++;
        }
    }
    return max;    
};

export {maxArea};