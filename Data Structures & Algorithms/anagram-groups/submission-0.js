class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        console.log(strs)
        let groups = new Map();
        for (let str of strs){
            const freq = new Array(26).fill(0);
            for(let char of str){
                freq[char.charCodeAt(0)- "a".charCodeAt(0)]++
            }
            const key = freq.join("#");
            if(!groups.has(key)){
                groups.set(key,[])
            }
            groups.get(key).push(str);
        }
        return Array.from(groups.values())
    }
}
