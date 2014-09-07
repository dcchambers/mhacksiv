//js file that contains the string arrays
//and the random string generator.

var stringOne = ["Virtual Reality", "Cloud-based", "Open Source",
 "Game-ified", "Adaptive", "Social", "Distuptive", "Automated", "Back-end", "Front-end",
 "Collaborative", "Scalable", "Educational", "Crowd-sourced"];
var stringTwo = ["Social Networking", "Enterprise", "Android", "iOS",
 "Windows", "Mac", "Linux", "Windows Phone", "Web", "Artificial Intelligence", "Gen-X"
 , "Big Data", "Solution", "E-commerce", "Big Data", "Networking", "Music"];

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

var apiList = ["Google Maps", "Twitter", "Flickr", "last.fm", "Google App Engine",
"Foursquare", "Bing", "Box", "Salesforce", "Bit.Ly", "PayPal", "Quixey", "Bloomberg",
"Parse", "Facebook", "Uber", "Nest", "Firebase", "Ziggeo", "indeed", "Venmo", "Twilio"];
var apiHref = ["https://developers.google.com/maps/", "https://dev.twitter.com/docs", 
"http://www.flickr.com/services/api/", "http://www.last.fm/api", "API Homepagehttps://developers.google.com/appengine/",
"https://developer.foursquare.com/", "http://www.bing.com/dev/en-us/dev-center", 
"http://developers.box.com/docs/", "http://developer.force.com/", "http://dev.bitly.com/get_started.html",
"https://developer.paypal.com/", "https://www.quixey.com/developers/", "http://www.bloomberglabs.com/api/about/",
"https://parse.com/docs/api_libraries", "https://developers.facebook.com/", "https://developer.uber.com/",
"https://developer.nest.com/", "https://www.firebase.com/", "https://www.ziggeo.com/",
"http://www.indeed.com/jsp/apiinfo.jsp", "https://developer.venmo.com/", "http://www.twilio.com/api"];

function generateRandAPI() {
	var tempNum = Math.floor((Math.random() * apiList.length))
	var tempApi = apiList[tempNum];
	var tempHref = apiHref[tempNum];
	var apiString = "You could try <a href=\""+tempHref+"\">"+tempApi+"</a> API!";

	document.getElementById("api").innerHTML = apiString;
	document.getElementById("api").style.display='block';
	document.getElementById("randAPI").style.display='none';
	document.getElementById("randAPI2").style.display='block';
}