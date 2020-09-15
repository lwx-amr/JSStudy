//Some Var
var x=10,
    y=5,
    z=500,
    name="Amr",
    Name="Hussien",
    myLastName="\"Mohamed\"";
document.getElementById("first").innerHTML = name + " "+Name+" "+myLastName; //Simple Function

// Conditions
if(myLastName === "Mohamed")
    {
        console.log("Amr is here ");
}
else
    {
        console.log("This is Not Amr");
    }
// Prices
var mainPrice=1500,
    newDiscount=200,
    hadDiscount=false;
document.getElementById("product").innerHTML =mainPrice - newDiscount; //Simple Function
/*if (hadDiscount)
    {
        alert("It has Discount");
    }
else
    {
        alert("it doesnt has discount");
    }*/
var myFavSport=["Football","Backetball","Tennis"],
    yearsOfEdu={primSchool:"ElHorya",secondSchool:"ElOrman"};
document.getElementById("array").innerHTML=myFavSport[0];
document.getElementById("object").innerHTML=yearsOfEdu.primSchool;
var none;//Difault type is undifined
none=["Dark","Amr"];//Consle typeof none= object , x=number
var age1 = "Amr" + 10 + 9 ,//Amr109
    age3 = "Amr" + (10 + 9),//Amr19
    age2 = 10 + 9 + "Amr" ,//19Amr
    age2 = "amr" - 2;// NAN (Not a Number)
console.log(age1);
console.log(age2);

document.getElementById("difference").innerHTML=
    "<p style='color:#12AAA3;display:inline'>My Name is : " + name +"</p>"+ Name+" " +myLastName +"<br>"+
    " My Fav Sport is: "+myFavSport[0]+"<br>"+
    " My Secondary Year is: "+yearsOfEdu.secondSchool;

/*Output Ways
var x=10,
    y=5;
    z="10",
    test=document.getElementById("id")
1- alert(x + y)or alert(z) or alert("10") ---> 10
2- document.write(x + y)or document.write(z) or document.write("10") ----->10 **The right way to use it is to test only and not to change the content **
3- document.getElementById("id").innerHTML=(x + y) or z) or ("10") ------>10
4- test.innerHTML=(x + y) or z) or ("10") ------>10
5- console.log("X is =: "+x) ------> X=10

//Operators
    (=)=Assignment Operator
    (==)=Comparison Operator Ex: 50=="50"----->true
    (===)=Comparison Operator and care with data type Ex:50==="50"------> False
    (!==)Doesn't equal value and type Ex:50!=="50"----->true, 50!==50---> False
*/

 var yourAge=prompt("Please Insert Your Age");// Like cin

if (yourAge<=19)
    {
        document.getElementById("if").innerHTML="<p style='color:red;font-size:20px;font-weight:bold'>Your Age is "+yourAge+"??"+" You're Too Young </p>";
    }
else
    {
        document.getElementById("if").innerHTML="<p style='color:#12AAA3;font-size:20px;font-weight:bold'>Your Age is "+yourAge+ " Welcome Bro, glade that you're here </p>";

        document.getElementById("age").innerHTML="You've Lived: "+(yourAge*365)+" day And "+(yourAge*365*24)+" Hour and "+(yourAge*365*24*60)+" Minute";

    }
