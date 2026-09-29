class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const resStack = []
        for(let token of tokens){
            if(!isNaN(Number(token))){
                resStack.push(token);
            }else{
                const l = Number(resStack.pop());
                const r = Number(resStack.pop());
                console.log(r,l)
                switch(token){
                    case '+':
                        resStack.push(l+r)
                        break;
                    case '-':
                        resStack.push(r-l)
                        break;
                    case '*':
                        resStack.push(l*r)
                        break;
                    case '/':
                        resStack.push(Math.trunc(r/l))
                        break;
                    
                }
                console.log(resStack)
            }
        }
        return resStack.pop();
    }
}
