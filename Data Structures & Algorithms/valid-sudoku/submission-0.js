class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const n = board.length
        console.log(board.length)
        const [row,col,box] = [Array(board.length).fill(null).map(()=> []),Array(board.length).fill(null).map(()=> []),Array(board.length).fill(null).map(()=> [])];
        for(let i = 0;i<n;i++){
            // console.log("1st")
            for(let j=0;j<n;j++){
                let num = board[i][j];
                // console.log("2nd")
                if(num==='.'){
                    continue;
                }
                if(row[i].includes(num)){
                    console.log("row",num)
                    return false;
                }
                row[i].push(num);
                if(col[j].includes(num)){
                    console.log("col",num,i,j,col[j])
                    return false;
                }
                col[j].push(num);
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                console.log(boxIndex);
                if(box[boxIndex].includes(num)){
                    console.log("box",num)
                    return false;
                }
                box[boxIndex].push(num)
            }
        }
        return true; 
    }
}
