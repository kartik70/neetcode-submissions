class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let freqMap = {};
        let have = 0;
        for(let char of t){
            freqMap[char] = (freqMap[char] || 0) + 1;
        }
        let need = Object.values(freqMap).length;
        let resLen = Infinity;
        let resRange = [-1,-1];

        let window = {};
        let left = 0;

        for(let right=0;right<s.length;right++){
            let ch = s[right];
            window[ch] = (window[ch] || 0) + 1;
            if(freqMap[ch] && window[ch]=== freqMap[ch]){
                have++;
            }

            while(have === need){
                if((right-left + 1)< resLen){
                    resLen = right-left + 1;
                    resRange = [left,right];
                }
                const leftChar = s[left];

                window[leftChar]--;
                if(freqMap[leftChar] && freqMap[leftChar] > window[leftChar]){
                    have--;
                }
                left++
            }
        }
        const [start, end] = resRange;
        return resLen === Infinity ? "" : s.slice(start, end + 1);



        
    }
}
