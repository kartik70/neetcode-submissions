class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        const res = []
        for(let num of nums){
            freq.set(num,(freq.get(num)|| 0)+1);
        }
        const bucket = Array(nums.length + 1).fill(null).map(()=> []);
        for(let [num,count] of freq.entries()){
            bucket[count].push(num);
        }
        
        for(let i = bucket.length - 1;i>=0 && res.length < k;i--){
            // console.log(bucket[i]);
            if(bucket[i].length > 0){
                console.log(bucket[i]);
                for(let ele of bucket[i]){
                    res.push(ele);
                    if(res.length === k){
                    return res;
                }
                }
            }
            
        }
        return res;
    }
}
