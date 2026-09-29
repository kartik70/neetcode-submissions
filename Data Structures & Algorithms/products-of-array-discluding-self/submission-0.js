class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //[1,2,3,4]
        const n = nums.length;
        const output = Array(n).fill(1);

        let leftProduct = 1;
        for(let i = 0; i<n;i++){
            output[i] = leftProduct;
            leftProduct *= nums[i]
        }
        //

        let rightProduct = 1;
        for(let i = n-1;i>=0;i--){
            output[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        return output;
    }
}
