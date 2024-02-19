// 1. When we use return instead of break in a for loop, while loop or a switch case, The function exits and the further code is not executed in this case. Statements after the loop are also ommited. The return value is a value that a function returns when it compltetes. We can pass a return value within a loop as well as within a block. Whenever the retun statement is called all the further code in the function in ignored and the function exits

//2.
function test(callback){
	callback()
}

function callbackFunc(){
	console.log("Calling callback function")
	return 5;
}
console.log("->Testing test(callbackFunc)");
test(callbackFunc);
console.log("->Testing test(()=>callBackFunc())");
test(()=>callbackFunc());
console.log("->Testing test(callbackFunc())");
test(callbackFunc());

//3. When callback() is returned from the test function test(callbackFunc) and test(()=>callbackFunc()) works without any error.
//4. When callback is returned from the test function test(callbackFunc()) executes without any error.
