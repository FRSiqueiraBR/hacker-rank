/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(index: number, arr: number[][]): number {
    let firstDiagonal: number = 0
    let secondDiagonal: number = 0

    for (let i = 0; i < index; i++) {
        firstDiagonal = firstDiagonal + arr[i][i]
        secondDiagonal = secondDiagonal + arr[i][Math.abs(i+1-index)]
    }
    
    return Math.abs(firstDiagonal - secondDiagonal)
}


//TODO remover quando o teste der ok
var multi: number[][] = [[11,2,4],[4,5,6],[10,8,-12]]  
const index: number = 3
// var multi: number[][] = [[1,2,3],[4,5,6],[9,8,9]]  

const result: number = diagonalDifference(index, multi)
// const result: number = diagonalDifference(arr);

console.log(result)