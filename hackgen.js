//js file that contains the string arrays
//and the random string generator.

var stringOne = ["Virtual Reality", "Cloud-based", "Open Source",
 "Gamified", "Adaptive", "Social", "Distuptive", "Automated", "Back-end", "Front-end",
 "Collaborative", "Scalable"];
var stringTwo = ["Social Networking", "Enterprise", "Android", "iOS",
 "Windows", "Mac", "Linux", "Windows Phone", "Web", "Artificial Intelligence", "Gen-X"
 , "Big Data", "Solution", "E-commerce", "Big Data", "Networking"];

function generateRands() {

	var tempOne = stringOne[Math.floor((Math.random() * stringOne.length))];
	var tempTwo = stringTwo[Math.floor((Math.random() * stringTwo.length))];

	document.getElementById("stringOne").innerHTML = tempOne;
	document.getElementById("stringTwo").innerHTML = tempTwo;

}