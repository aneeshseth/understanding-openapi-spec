class DateClass {
    private timeZone: string;
    constructor(timeZone: string) {
        this.timeZone = timeZone;
    }
    getTime() {
        const time = new Date();
        return time.getTime()
    }
    getMonth() {
        const time = new Date();
        return time.getMonth()
    }
}

const dateObject = new DateClass("IND")
const response = dateObject.getTime()
console.log(response)