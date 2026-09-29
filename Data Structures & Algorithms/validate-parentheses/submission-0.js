class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const bMap = {'}':'{',']':'[',')':'(',}
        for(let bracket of s){
            if("([{".includes(bracket)){
                stack.push(bracket);
            }else{
                if(!stack.length || stack[stack.length - 1] !== bMap[bracket]){
                    console.log('here')
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;

    }
}
