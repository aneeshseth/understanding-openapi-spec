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
    expensiveOperation() {
        const startTime = new Date().getTime()
        let ctr = 1;
        for (let i = 0; i<10000; i++) {
            ctr++;
        }
        const endTime = new Date().getTime()
        console.log(endTime - startTime)
    }
}

const dateObject = new DateClass("IND")
const response = dateObject.getMonth()
console.log(response)