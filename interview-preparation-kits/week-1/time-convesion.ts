function timeConversion(s: string): string {
    const meridiem: string = s.substring(s.length - 2)
    let timeConverted: string = s;
    const time = s.replace("PM", "").replace("AM", "")

    if (meridiem == "PM") {
        const hour = +time.slice(0,2)
        let hourStr: string;

        if (hour == 12)
            hourStr = "12";
        else
            hourStr = `${hour + 12}`

        timeConverted = hourStr + time.slice(2,8)
    } else if (meridiem == "AM") {
        const hour = +time.slice(0,2)
        let hourStr: string;

        if (hour == 12)
            hourStr = "00";
        else if (hour < 10)
            hourStr = `0${hour}`
        else 
            hourStr = `${hour}`

        timeConverted = hourStr + time.slice(2,8)
    }
       

    return timeConverted
}

console.log(10 % 2)

console.log(timeConversion("12:40:22PM"))