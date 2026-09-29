class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let resMap = new Map();
        let res = [];
        for(let i = 0; i<nums.length;i++){
            if(resMap.has(target - (target - nums[i]))){
                res =  [resMap.get(target - (target - nums[i])),i]
            }else{
                resMap.set(target- nums[i],i)
            }
        }
        return res;
    }
}
