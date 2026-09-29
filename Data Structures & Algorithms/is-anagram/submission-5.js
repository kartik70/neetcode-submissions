class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let occurences = new Map();
        if(s.length !== t.length){
            return false;
        }else{
            for(let i=0;i<s.length;i++){
                occurences.set(s[i],(occurences.get(s[i])||0)+1)
                occurences.set(t[i],(occurences.get(t[i])||0)-1)
            }
            return Array.from(occurences.values()).every(ele => ele === 0);
        }
    }
}
