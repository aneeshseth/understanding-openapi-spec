class DateClass {
    constructor() {

    }
    getTime() {
        return 1;
    }
}

const dateObject = new DateClass()
const response = dateObject.getTime()
console.log(response)