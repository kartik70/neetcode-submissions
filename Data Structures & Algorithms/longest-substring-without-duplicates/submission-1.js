class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxP = 0, left = 0, preSet = new Set();
        for(let right = 0; right<s.length; right++){
            while(preSet.has(s[right])){
                preSet.delete(s[left]);
                left++
            }
            preSet.add(s[right]);
            maxP = Math.max(maxP,(right-left)+1)
        }
        return maxP;
    }
}
