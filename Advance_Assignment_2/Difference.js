// Difference between regular functions and arrow functions

// 1. Duplicate named parameters are accepted in regular functions where as arrow functions do not allow duplicated named parameters

function exampleFunc(a,b,a){
    console.log(a,b)
}
// Accepted

exampleArrow = (a,b,a) => {
    console.log(a,b)
}
// Not accepted

// 2. Regular functions can be accessed and called even before they are declared where as arrow functions cannot be accessed before they are initialized

regularFunction()

function regularFunction(){
    console.log("Regular Function")
}
// Accepted

arrowFunction()

const arrowFunction =() => {
    console.log("Arrow Function")
}
// Not accepted

// 3. Regular functions can be used as constructors where as arrow functions cannot be used as constructors

function regularConst(a,b){
    this.a = a
    this.b = b
    console.log(a,b)
}

regularConst(1,2)
// Accepted

const arrowConst = (a,b) => {
    this.a = a
    this.b = b
    console.log(a,b)
}

arrowConst(1,2)
// Not accepted
