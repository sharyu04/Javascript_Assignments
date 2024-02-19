let age = 25;
console.log("If else")
if (child<=12){
	console.log("Child")
}
else if(chile<=18){
	console.log("Teen")
}
else{
	console.log("Adult")
}
console.log("Switch Case")
switch age{
	case age<=12:
		console.log("Child")
		break;
	case age<=18:
		console.log("Teen")
		break;
	default:
		console.log("Adult")
}
console.log("For Loop")
let arraySize = 25;
let arr = [];
for(int i=0; i<arraySize;i++){
	arr.push(i+1);	
}
console.log("array: ",arr);
arr = []
let i = 1;
while(i<=arraySize){
	arr.push(i);
	i++;
}
console.log(arr);
