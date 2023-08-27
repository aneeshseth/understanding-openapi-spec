import {once} from 'helpful-decorators'
class DateClass {
    private timeZone: string;
    constructor(timeZone: string) {
        this.timeZone = timeZone;
    }
    @once
    getTime() {
        const time = new Date();
        console.log("hi from get time")
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
        console.log("total time is ms", endTime - startTime)
        //decorators solve this
    }
}

const dateObject = new DateClass("IND")
const response = dateObject.getMonth()
const response2 = dateObject.expensiveOperation()
console.log(response)