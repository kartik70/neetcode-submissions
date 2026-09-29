class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for(let str of strs){
            encoded += (str.length + '#' + str)
        }
        console.log(encoded)
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const res = [];
        while(i<str.length){
            let j = i;
            while(str[j] !== "#") j++;
            const length = parseInt(str.slice(i,j));
            res.push(str.slice(j+1,j+1+length));
            i = j + 1 + length;
        }
        return res;
    }
}
