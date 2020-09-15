var x=200,
	newX=x.toString();//==string(x)
console.log(typeof(x));
console.log(newX);
console.log(typeof(newX));

var myString="I'm in love with the shape of you and i'm in Love with you",
	result=myString.indexOf("love",10),//45 ---> case ("love",0)=7
	otherResult=myString.lastIndexOf("love",50);// 45 case 44 or less = 7;
	//myString.search(); will bring the fisrt one

console.log(myString.split(" "));//["I'm", "in", "love", "with", "the", "shape", "of", "you", "and", "i'm", "in", "love", "with", "you"]
console.log(myString.split(" ",5));//["I'm", "in", "love", "with", "the"]

console.log(myString.slice(0,25));//I'm in love with the shap
console.log(myString.slice(-15));//n love with you

console.log(myString.substr(7));//love with the shape of you and i'm in love with you
console.log(myString.substr(7, 5));//love -- start from 7 and take only 5 digits	

console.log(myString.substring(7,20));//love with the
console.log(myString.substring(20,7));//love with the
// when start bigger than end, substring will make swap

console.log(myString.charAt(21));//s
console.log(myString.charCodeAt(21));//115 Unique number off s at meta Charset (unicode.com)

var number=120,
	string=number.toString().replace("2","3").split("");// Chain
console.log(string);	

var	myNewString=myString.replace(/love/gi,"Buff");
console.log(myNewString);

var myUniName=String.fromCharCode(65,77,82);// (AMR)
	mySecondName="Hussien",
	myFullName="My Name is ".concat(myUniName.concat(" ",mySecondName," ","Mohamed")," and you're welcome here");
console.log(myFullName);

console.log(mySecondName.toLowerCase());
console.log(mySecondName.toUpperCase());

var spaceString="			Amr 		Hussien 		",
	newSpaceString=spaceString.trim(),
	google="Google";
console.log("Click here to go to "+google.link("http://www.google.com"));
console.log(newSpaceString);//"Amr 		Hussien"