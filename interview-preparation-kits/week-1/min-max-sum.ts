function miniMaxSum(arr: number[]): void {
    const arrSorted: number[] = arr.sort((n1,n2) => n1 - n2);
    console.log(arrSorted)
    let minSum = 0
    let maxSum = 0 

    for (let index = 0; index < arrSorted.length; index++) {
        if (index > 0)
            maxSum = maxSum + arrSorted[index]
        if (index < arrSorted.length - 1)
            minSum = minSum + arrSorted[index]
    }

    console.log(`${minSum} ${maxSum}`)
}

miniMaxSum([5,4,3,2,1])