class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let right = height.length - 1, left = 0, water = 0,leftMax = 0,rightMax = 0;
        
        while(left<right){
            if(height[left] < height[right]){
                if(height[left] >= leftMax){
                    leftMax = height[left];
                }
                water += (leftMax - height[left])
                left++;
            }else{
                if(height[right] >= rightMax){
                    rightMax = height[right];
                }
                water += (rightMax - height[right])
                right--;
            }
        }
        return water;
    }
}
