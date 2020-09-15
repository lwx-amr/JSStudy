/* 
var myInput=document.getElementById("myInput");

// Function to hide placeholder

myInput.onfocus=function(){
	
	"use strict";
	// store my placeholder, maybe i will use it agian
	this.setAttribute('storedData',this.getAttribute("placeholder"));
	// empty placeholder
	this.setAttribute('placeholder',"");
	
};
myInput.onblur=function(){
	
	"use strict";
	// store my placeholder, maybe i will use it agian
	this.setAttribute('placeholder',this.getAttribute("storedData"));
	// empty placeholder
	this.setAttribute('storedData',"");
	
};*/
// CountDown
var seconds=120,
	
	countDiv=document.getElementById("myDiv")
	
	secondpass,
	
	countDown=setInterval(function(){"use strict";secondpass()},1000);

function secondpass ()
{
	"use strict";
	
	var mintues=Math.floor(seconds/60),
		newSeconds=seconds%60;
	if (seconds<10)
		{
			newSeconds="0"+newSeconds;
		}
	countDiv.innerHTML=(mintues+":"+newSeconds);
	if (seconds>0)
		{
			seconds-=1;
		}
	else{
		clearInterval(countDown);
		countDiv.innerHTML=("You will die now");
	}
}

// Button work
function reDirectMe(url)
{
	"use strict";
	if(url.search(/http/ig)!=-1)	
		window.location=url;
}


// Show or Hide Passowrd
var input=document.getElementById("password"),
	show=document.getElementById("showPassword");

show.onclick=function ()
{
	'use strict';
	if (this.textContent==="Show Password"){
		
		input.setAttribute('type',"text")
		this.textContent=("Hide Password")
	}
	else
	{
		
		input.setAttribute('type',"password")
		this.textContent=("Show Password")
		}
}

// Type Writer Style
var text=document.getElementById("pType").getAttribute('dataText'), 
	i=0,
	myButton=document.getElementById("type"); 

myButton.onclick=function()
{
	"use strict";
	i=0;
	var myTypeWriter=setInterval(function(){
		document.getElementById("pType").textContent+=text[i];
		
	if(i===text.length-1)
		{
			clearInterval(myTypeWriter);
			
		}
		i++;
	},50) 
};

// Scroll Up
var myButton=document.getElementById('goUp');

window.onscroll=function()
{
	"use strict";
	if (window.pageYOffset>=400)
		{
			myButton.style.display='block'
		}
	else 
		{
			myButton.style.display='none'
		}
}

myButton.onclick=function()
{
	window.scrollTo(0,0)
}

var classesArray=["class1","class3","class2","class4"],
	randomKey=Math.floor(Math.random()*classesArray.length);

(function(){
	"use strict";
	document.body.setAttribute('class',classesArray[randomKey]);
	document.body.setAttribute('class',classesArray[randomKey]);
}());

// Live Module
var myTitle=document.getElementById('title'),
	myContent=document.getElementById('content'),
	
	myLiveTitle=document.getElementById('titleLive'),
	myLiveContent=document.getElementById('contentLive');

myTitle.onkeyup=function()
{
	"use strict";
	myLiveTitle.textContent=this.value;
	
}
myContent.onkeyup=function()
{
	"use strict";
	myLiveContent.textContent=this.value;
	
}

// Disable right click
document.addEventListener('contextmenu',function(e)
{
	"use strict";
	e.preventDefault();// Prevent defualt mean to don't do default function of this action
	console.log('Click Right')
	
})

//simple Clock
function showMyTime()
{
	"use strict";
	var now=new Date(),
		hours=now.getHours(),
		mintues=now.getMinutes(),
		seconds=now.getSeconds();
	
	if(hours<10)
		{
			hours="0"+hours;
		}
	if(mintues<10)
		{
			mintues="0"+mintues;
		}
	if(seconds<10)
		{
			seconds="0"+seconds;
		}
	document.getElementById('myClock').textContent=hours+':'+mintues+':'+seconds;
}
window.onload=function(){
	
	'use strict';
	setInterval(showMyTime,500);
}

var textAreaDiv=document.getElementById('max'),
	counter=0,
	myLength=document.getElementById('content').getAttribute('maxlength');

myContent.onkeyup=function(){
	'use strict';
	textAreaDiv.textContent=myLength-this.value.length;
	
	if (textAreaDiv.textContent<0)
		{
			textAreaDiv.style.color='#f00';
		}
	else 
		{
			textAreaDiv.style.color='#ccc';
		}
}

//Checking if my URl Contains hash
/* Method 1 */
if (window.location.hash)
	{
		if(window.location.hash.indexOf('Amr')==1)
			{
				console.log(window.location.hash.indexOf('Amr'));
				console.log('Good there is hash and Amr is found');
				
			}
		else 
			{
				console.log('Good there is hash');
			}
	}
else 
	{
		console.log('Bad there is no hash found');
	}

/* Method 2 */


if (window.location.hash)
{
	var hash =window.location.hash.substring(1);
	
	if (hash=="Amr")
		{
			console.log('Good there is hash and Amr is found');
		}
	else
		{
			console.log('Bad there is no hash found');
		}
	
}

// Generate Serial Number Randomly 

function generateSerial()
{
	"use strict";
	var characters='0123456789ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz',
		serialLength=8,
		randomSerial="",
		randomNumber,
		i;
	for (i=0;i<serialLength;i+=1)
		{
			randomNumber=Math.floor(Math.random() * characters.length);
			randomSerial+=characters[randomNumber];
		}
	document.getElementById("serial").innerHTML=(randomSerial.toString());
}