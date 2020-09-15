/* global console */
/* Regular Expression

	/pattern/attributes
	search|Match|replace|test|split
	
	Attributes list
	[ i ]=> Case Insensitive (Capital or Small)
	[ G ]=> Global search (Search till end)
	[ M ]=> Multiline search (If my string is exceded 1 line )
	
	Brackets
	[char] Character
	[^char] not this Character
	[ a-d] Character in this range ( a,b,c,d ) ex:	myString.replace(/[A-Z]/g,"@")-->Replace all capital characters
	[^ 0-5] all Characters Except in this range ( 6, 7, 8, 9)
	[A-g] Range [A-Z] and Range [a-g]
	[0-9a-z] Double Rang [0-9] and [a-z]
	
	Quantifiers
	letter+= word contain One letter
	letter{number}= word contain Number of letter
	letter{number, number}= word contain number of letter or number of letter
	letter{number,}= word contain at least number of letter
*/
var myString ="I Love Elzero Web School",
	//result = myString.replace(/l/,"@"),//I Love E@zero Web School
	//result = myString.replace(/l/gi,"@"),//I @ove E@zero Web Schoo@
	//result = myString.replace(/[^l]/gi,"@"),//@@L@@@@@l@@@@@@@@@@@@@@l
	result = myString.replace(/[a-c]/gi,"@");//I Love Elzero We@ S@hool
console.log(result);

var myNewString="Comeee Heeeere right Now ",
	//result = myNewString.replace(/e/gi,"@");//Com@@ H@r@ right Now
	//result = myNewString.replace(/e+/gi,"@");//Com@ H@r@ right Now
	//result = myNewString.replace(/e{3}/gi,"@");//Com@ H@ere right Now
	result = myNewString.replace(/e{3,}/gi,"@");//Com@ H@re right Now	
console.log(result);
/*
	Time and Date
	
new Date(); Print Current time and date
new Date(Millseconds 10000=10 Seconds); //Print Millseconds from UTC 1 Jan 1970 00:00::00
new Date(DateString("month day, year 00:00:00")); // Add any date string 
new Date(Year, Month, Day,Hour, Minutes, Seconds,Millseconds)//
new Date("yyy-mm-dd hh-mm-ss tzd")
	
*/
//var theDate=new Date(1000);//Thu Jan 01 1970 02:00:01 GMT+0200 (Egypt Standard Time)
//var theDate=new Date("June 22, 1998 12:12:50" );//Mon Jun 22 1998 12:12:50 GMT+0200 (Egypt Standard Time)
//var theDate=new Date(1998, 5,22,12,12,12,1000);//Mon Jun 22 1998 12:12:13 GMT+0200 (Egypt Standard Time)

var theDate=new Date("1998 06 22 12:12:12+1:00");//Mon Jun 22 1998 13:12:12 GMT+0200 (Egypt Standard Time)


/* Date Funcions */
/*
getDate();// Day of Month 1-31
getDay();// Day of week 0-6
getFullYear();// The Full year
getHours();// Get Hours
getMinutes();// Get Minutes 
getSeconds();// Get Seonds 
getMillSeconds();// Get MillSeconds From 0-999
getTime();// Number of Mill Secons from 1970 or Specific date 
getTimzoneOffset();// Get Def between UTC& Your local time in mintues 


setFullYear(Year[Req],Month[opt],day[opt]);
setMonth(Month[Req],day[opt])
setDay(day[Req]);// Day of week 0-6
setHours(hours[Req],min[opt],sec[opt],millseconds[opt]);
setMinutes(min[req],sec[opt],millseconds[opt]);
setSeconds(seconds[Req],millseconds[opt]); 
setMillSeconds(6000000);

// any set or get i can use it for UTC like getUTCDate, setUTCHours

now(); //get millseconds from 1970 to now
Parse(" myDate [req]"); //get millseconds from 1970 to myDate
toDateString(); //sat apr 09 2016
toTimeString();// 12:12:30  GMT + 0300
*/




console.log(theDate);
