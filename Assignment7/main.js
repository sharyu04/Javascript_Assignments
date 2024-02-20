// 1.
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
let copy = JSON.parse(JSON.stringify(obj))
copy.address.details[0] = "5"
console.log("Original object: ",obj)
console.log("Copy object: ",copy)
// Output
// Original object:  {
//   name: 'Harry Potter',
//   age: 12,
//   address: {
//     details: [ '4', 'Privet Drive' ],
//     area: 'Little Whinging',
//     city: 'Surrey',
//     state: 'England'
//   }
// }
// Copy object:  {
//   name: 'Harry Potter',
//   age: 12,
//   address: {
//     details: [ '5', 'Privet Drive' ],
//     area: 'Little Whinging',
//     city: 'Surrey',
//     state: 'England'
//   }
// }

// 2.
obj = {
 a:"Apple",
 b:["Basketball","Baseball"],
 c: {
  call: "cellphone"
 },
 d: "Dog"
}
function filterObj(obj){
	let resObj = {}
	let valuesArray = Object.entries(obj)
	valuesArray.forEach((arr)=>{
		if (typeof(arr[1]) != "object"){
			resObj[arr[0]] = arr[1]
		}
	})
	return resObj
}
console.log("FilterObj : ",filterObj(obj))
