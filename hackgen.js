//js file that contains the string arrays
//and the random string generator.

var stringOne = ["Virtual Reality", "Cloud-based", "Open Source",
 "Game-ified", "Adaptive", "Social", "Distuptive", "Automated", "Back-end", "Front-end",
 "Collaborative", "Scalable", "Educational", ];
var stringTwo = ["Social Networking", "Enterprise", "Android", "iOS",
 "Windows", "Mac", "Linux", "Windows Phone", "Web", "Artificial Intelligence", "Gen-X"
 , "Big Data", "Solution", "E-commerce", "Big Data", "Networking"];

function generateRands() {

	var inspireString = "You should make ";
	var tempOne = stringOne[Math.floor((Math.random() * stringOne.length))];
	var tempTwo = stringTwo[Math.floor((Math.random() * stringTwo.length))];

	var firstChar = tempOne.charAt(0);
	if (firstChar == ('A') || firstChar == ('E') || firstChar == ('I') || 
		firstChar == ('O') || firstChar == ('U')){
		//document.getElementById("aORan").innerHTML = "an";
		inspireString = inspireString.concat("an ");
	}
	else {
		//document.getElementById("aORan").innerHTML = "a";
		inspireString = inspireString.concat("a ");
	}
	inspireString = inspireString.concat(tempOne+" ");
	inspireString = inspireString.concat(tempTwo);
	inspireString = inspireString.concat(" app!");

	//document.getElementById("stringOne").innerHTML = tempOne;
	//document.getElementById("stringTwo").innerHTML = tempTwo;
	document.getElementById("firstButton").style.display='none';
	document.getElementById("secondButton").style.display='block';

	document.getElementById("inspire").innerHTML = inspireString;
	document.getElementById("inspire").style.display='block';

}
