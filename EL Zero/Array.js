/* global console */
var champions= Array( // var champions= new Array( "Amr", "Nada", "Soha", "Nora")
	"Amr",
	"Nada",
	"Sara",
	"Nora"
);
console.log(champions); // ["Amr", "Nada", "Sara", "Nora"]

var friends=[];// Literal way 						var friends=[

friends[0]="Amr";		//  	Equal to		//		"Amr";
friends[1]="Nada";		//    (( === ))			//		"Nada";
friends[2]="Soha";								//		"Soha";
friends[3]="Nora";								//		"Nora";
												//	]
/*var sFriends=friends.toString();

console.log(sFriends);//Amr,Nada,Soha,Nora

friends=friends.join("-");
console.log(friends); //Amr-Nada-Soha-Nora

var myDate=new Date(); // Date is a built in function
/*console.log(myDate);//Tue Dec 19 2017 13:28:33 GMT+0200 (Egypt Standard Time)
	myDate=myDate.toString();
console.log(myDate);//Tue Dec 19 2017 13:28:33 GMT+0200 (Egypt Standard Time)
	*//*myDate=myDate.toLocaleString();
console.log(myDate);//Tue Dec 19 2017*/
/*console.log(friends);// ["Amr", "Nada", "Sara", "Nora"]
console.log(friends.length); //------>5 get array length
friends.length=3;// set array length
console.log(friends)// ["Amr", "Nada", "Sara"]
//Array Check

if (Array.isArray(friends))// if (friend.constructor=== Array)
	{
		console.log("Very good it's array");
	}
else
	{
		console.log("Bad");
	}
*/
// Adding Element to array
console.log(friends.length);//4
friends[friends.length]="3aMoOo or";//friends[4]="3aMoOo or";
console.log(friends.length);//5
console.log(friends);//["Amr", "Nada", "Soha", "Nora", "3aMoOo or"]

friends.push("DarK","Sarah");// Adding Element at the end of Array 
console.log(friends.length);//7
console.log(friends);//["Amr", "Nada", "Soha", "Nora", "3aMoOo or", "DarK", "Sarah"]

friends.unshift("MrDarK");// Adding Element at The begining of Array
console.log(friends.length);//8
console.log(friends);// ["MrDarK", "Amr", "Nada", "Soha", "Nora", "3aMoOo or", "DarK", "Sarah"]

friends.splice(2,3,"3ola","Hoda"); // ArrayName.splice(Starting index,Items to remove,Items to add "Item1", "Item2")
console.log(friends.length);//7
console.log(friends); // ["MrDarK", "Amr", "3ola", "Hoda", "3aMoOo or", "DarK", "Sarah"]

//friends.pop();// Removing last element 
var lastOne=friends.pop();// "Sarah"
console.log(lastOne); 
console.log(friends.length);// 6
console.log(friends);// ["MrDarK", "Amr", "3ola", "Hoda", "3aMoOo or", "DarK"]

//friends.shift();// Removing first element 
var firstOne=friends.shift();// "MrDarK"
console.log(firstOne); 
console.log(friends.length);// 5
console.log(friends);// ["Amr", "3ola", "Hoda", "3aMoOo or", "DarK"]

friends.reverse();// Reverse mean to complement array and not based on rule
console.log(friends); // ["DarK", "3aMoOo or", "Hoda", "3ola", "Amr"]

friends.sort();
console.log(friends); //["3aMoOo or", "3ola", "Amr", "DarK", "Hoda"]

friends.reverse();// Reverse mean to complement array and not based on rule
console.log(friends); //["Hoda", "DarK", "Amr", "3ola", "3aMoOo or"]

var mySlice=friends.slice(2, 4);//"Amr", "3ola"
console.log(mySlice);
    mySlice=friends.slice(-4, -2);
console.log(mySlice);
 
var myNewFriends =[
    "Sayed",
    "Rana",
    "Marwa",
    "Memi",
    "Noha"
];
var fciFriends=[
    "Sadd",
    "Nada",
    "Rana"
];
var allFriends=friends.concat(myNewFriends,fciFriends);// ["Hoda", "DarK", "Amr", "3ola", "3aMoOo or", "Sayed", "Marwa", "Memi", "Noha", "Sadd", "Nada", "Rana"]

console.log(allFriends);

// Array Search

console.log(allFriends.indexOf("Rana"));//Getting element index // indexOf("Name", Starting Index)
console.log(allFriends.lastIndexOf("Rana"));// Search from the end

var myIndex=allFriends.lastIndexOf("Memi",2);

console.log(friends[myIndex]);


