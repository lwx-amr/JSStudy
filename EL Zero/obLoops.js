/* global console, document */

var myNewCar = {
    color:"White With To Red Lines",
    model:"2017",
    type:"Mazda 3",
    price:"550000"
};
console.log( myNewCar.color ) ;
console.log(myNewCar["model"]);

for (var element in myNewCar){//
	if (myNewCar.hasOwnProperty(element)){// to escape un wanted properties
		console.log(element+": "+myNewCar[element])
		}
}

function selectCreater(start,end)
{
	"use strict";
	document.write("<select>");
	var years=start;
	while (years<=end)
	{
		if (years%2===0){
				document.write("<option value=\""+years+"\">"+years+"</option>");
		}
		else
			{
				document.write("<option value=\""+years+"\" disabled>"+years+"</option>");
			}
		years=years+1
	}
	document.write("</select>");
	
}
selectCreater(2010,2018);

BigLoop:// Label ---> This Name to loop 
for (var i=1;i<5;i+=1)
{	ChildLoop:
	for (var j=15;j<18;j+=1)
		{
			if(j==16)
			{
				continue ChildLoop;
			}
			console.log(i+"-->"+j);
		}
}

var myMath=Math.ceil(4.1);//5
	console.log(myMath);
	myMath=Math.floor(4.9);//4
	console.log(myMath);
	myMath=Math.round(4.9);//5
	console.log(myMath);
	myMath=Math.round(4.1);//4
	console.log(myMath);
var x=Math.max(10,20,20.5,15,14,18,12),//20.5
	y=Math.min(10,20,20.5,15,14,18,12),//10
	z=Math.random();// Variable Changing every reload
console.log(Math.floor(Math.round(x)+10.5));//32
console.log(z*10);	
console.log(Math.ceil(z*10));
