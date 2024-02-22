
// 1.
let obj1 = {
    "object1": {
        "a": 1,
        "b": 2
    },
    "Object2": {
        "a": 1,
        "b": 2
    }
}

let obj2 = {
    "object1": {
        "a": 1,
        "b": 2
    },
    "Object2": {
        "a": 1,
        "b": 2
    }
}


function compareObj(obj1, obj2) {


    if (typeof(obj1) !== "object" || typeof(obj2) !== "object") {



        return obj1 === obj2
    }
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length != obj2.length) {

            return false
        }
        for (let i = 0; i < obj1.length; i++) {
            if (!compareObj(obj1[i], obj2[i])) {

                return false
            }
        }

        return true
    }
    let objArray1 = Object.entries(obj1)
    let objArray2 = Object.entries(obj2)

    if (objArray1.length != objArray2.length) {

        return false
    }
    for (let i = 0; i < objArray2.length; i++) {
        if (!compareObj(objArray1, objArray2)) {

            return false
        }
    }

    return true

}

console.log(compareObj(obj1, obj2))

// 2.
function createClone(obj){
   
    newObj = JSON.stringify(obj)
    newObj = JSON.parse(newObj)
    return newObj
}
console.log("Obj 1 clone: ",createClone(obj1))

// 3.
let obj = {
  name:"Harry Potter",
  age: 12,
  address: {
  details: ["4", "Privet Drive"],
  area:"Little Whinging",
  city: "Surrey",
  state: "England"
  } 
}
function getNestedKey(obj, str){
    arr = str.split(".")
    var item = obj
    arr.forEach((x)=>{
        if(!isNaN(x)){
            x = Number(x)
        }
        item = item[x]
    })
    return item
}
console.log("getNestedKey(obj,'address.details.1'): ",getNestedKey(obj,"address.details.1"))
