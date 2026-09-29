class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let need = Array(26).fill(0);
        let window = Array(26).fill(0);
        let aCode = 'a'.charCodeAt(0);

        for(let char of s1){
            need[char.charCodeAt(0)-aCode]++;
        }

        for(let i = 0; i<s2.length;i++){
            window[s2[i].charCodeAt(0)-aCode]++;

            if(i>=s1.length){
                window[s2.charCodeAt(i-s1.length)- aCode]--;
            }
            if (arraysEqual(need, window)) return true;
        }

        function arraysEqual(a, b) {
  for (let i = 0; i < 26; i++) if (a[i] !== b[i]) return false;
  return true;
}
return false;
    }

    
}
