class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let result = 0;
        let right = heights.length - 1, left = 0;
        while(left < right){
            let width = right - left;
            maxArea =  (Math.min(heights[right],heights[left])) * width;
            result = Math.max(maxArea,result);
            if(heights[left] < heights[right]){
                left++
            }else{
                right--
            }
        }
        return result;
    }

}
