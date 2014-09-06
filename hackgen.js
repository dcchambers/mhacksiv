//js file that contains the string arrays
//and the random string generator.

var stringOne = ["Virtual Reality", "Cloud-based", "Open Source", "Gamified", "Adaptive", "Social", "Distuptive"];
var stringTwo = ["Social Networking", "Enterprise", "Android", "iOS", "Windows", "Mac", "Linux", "Windows Phone", "Web", "Artificial Intelligence", "Gen-X"];

function generateRands() {
	document.getElementById("stringOne").innerHTML = stringOne[Math.floor((Math.random() * stringOne.length))];
	document.getElementById("stringTwo").innerHTML = stringTwo[Math.floor((Math.random() * stringTwo.length))];

}