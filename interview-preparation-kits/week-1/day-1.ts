function plusMinus(arr: number[]): void {
    // Write your code here
    let positves: Array<number> = []
    let negatives: Array<number> = []
    let zeros: Array<number> = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0)
            zeros.push(arr[i])
        else if (arr[i] > 0)
            positves.push(arr[i])
        else 
            negatives.push(arr[i])       
    }

    const ratio_positive = (positves.length/arr.length).toFixed(6)
    const ratio_negative = (negatives.length/arr.length).toFixed(6)
    const ratio_zeros    = (zeros.length/arr.length).toFixed(6)

    console.log(ratio_positive)
    console.log(ratio_negative)
    console.log(ratio_zeros)
}

plusMinus([-4, 3, -9, 0, 4, 1])