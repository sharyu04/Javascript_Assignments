// 1.
let i = 5;
console.log("++i : ", ++i);
i = 5;
console.log("i++ : ", i++);
// ++i :  6 -> ++i increments the value of i and returns incremented value of i
// i++ :  5 -> i++ increments the value of i but returns original value of i

// 2.
let str = "Sharyu"
console.log("Index out of range : ", str[10]);
console.log("Negative index : ", str[-3]);
// Index out of range :  undefined
// Negative index :  undefined

// 3.
let arr = ["string",21,false]
console.log("JSON.stringify for array : ",JSON.stringify(arr));
let nestedObj = {
	name : "Sharyu",
	address : {
		city : "Nashik",
		state : "Maharashtra"
	}
}
console.log("JSON.stringify for nested object : ",JSON.stringify(nestedObj));
let num = 21
console.log("JSON.stringify for nested object : ",JSON.stringify(num));
let str1 = "string"
console.log("JSON.stringify for string : ",JSON.stringify(str1));
let undefinedVar = undefined
console.log("JSON.stringify for undefined : ",JSON.stringify(undefinedVar));
let nullVar = null
console.log("JSON.stringify for null : ",JSON.stringify(nullVar));
// JSON.stringify for array :  ["string",21,false]
// JSON.stringify for nested object :  {"name":"Sharyu","address":{"city":"Nashik","state":"Maharashtra"}}
// JSON.stringify for nested object :  21
// JSON.stringify for string :  "string"
// JSON.stringify for undefined :  undefined
// JSON.stringify for null :  null

// 4.
let jsonString = `{"name":"sharyu","age":21}`
console.log("Json.parse valid string : ",JSON.parse(jsonString));
jsonString = `{name:"sharyu",age:21,}`
console.log("Json.parse invalid string : ",JSON.parse(jsonString));
// Json.parse valid string :  { name: 'sharyu', age: 21 }
// For invalid string an error is receieved
// undefined:1
// {name:"sharyu",age:21,}
//  ^
// SyntaxError: Unexpected token n in JSON at position 1
