class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0, maxLen = 0,maxFreq = 0;
        let freqMap = {}
        for(let right = 0; right<s.length; right++){
            freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;
            maxFreq = Math.max(maxFreq,freqMap[s[right]]);
            while ((right - left + 1) - maxFreq > k) {
      freqMap[s[left]]--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
    
}
