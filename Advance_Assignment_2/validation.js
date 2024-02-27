
class isValidClass {

    constructor(require, minVal, maxVal, str) {
        this.minVal = minVal
        this.maxVal = maxVal
        this.require = require
        this.isValid = true
        this.str = str

        this.checkRequire()
        this.checkMax()
        this.checkMin()

    }

    checkRequire() {
        if (this.require) {
            if (this.str == "") {
                this.isValid = false
            }
        }
    }
    checkMin() {
        if (this.str.length < this.minVal)
            this.isValid = false
    }
    checkMax() {
        if (this.str.length > this.maxVal)
            this.isValid = false
    }
}


const checkValidity = (e) => {
    e.preventDefault()
    const str = e.target.value;
    console.log(str)
    const checkOutput = new isValidClass(true,4,10,str)
    console.log(checkOutput)
    if (!checkOutput.isValid) {
        console.log("In if")
        document.getElementById("Output").innerHTML = "Invalid String"
    }
    else {
        document.getElementById("Output").innerHTML = "Valid String"
    }
}

document.getElementById("stringInput").addEventListener("change", checkValidity)
