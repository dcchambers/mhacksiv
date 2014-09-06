//js file that contains the string arrays
//and the random string generator.

var stringOne = ["test1", "test2", "test3", "a", "b", "c"];
var stringTwo = ["4", "5", "6", "t", "y", "u"];

function generateRands() {
	document.getElementById("stringOne").innerHTML = stringOne[Math.floor((Math.random() * 6))];
	document.getElementById("stringTwo").innerHTML = stringTwo[Math.floor((Math.random() * 6))];

}