function fizzBuzz(n: number): void {
    const list: number[] = []
    
    for (let i = 1; i <= n; i++) {
        list.push(i)
    }
    
    list.forEach(element => {
        if (isMultipleOfThreeAndFive(element)) {
            console.log("FizzBuzz")
        } else if(isMultipleOfOnlyThree(element)) {
            console.log("Fizz")
        } else if(isMultipleOfOnlyFive(element)) {
            console.log("Buzz")
        } else {
            console.log(element)
        }
    });
}

function isMultipleOfThreeAndFive(n: number): boolean {
    return n % 3 == 0 && n % 5 ==0
}

function isMultipleOfOnlyThree(n: number): boolean {
    return n % 3 == 0 && n % 5 != 0
}

function isMultipleOfOnlyFive(n: number): boolean {
    return n % 3 != 0 && n % 5 ==0
}

fizzBuzz(15)