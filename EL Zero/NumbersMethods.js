var x=10,
	y=8.568,
	z=0,
	
(x).toString();//"10"
console.log(x);//10
(x).toExponential();//1e+1
(x).toExponential(2);//1.00e+1
(y).toFixed();//9
(y).toFixed(1);//8.6
(y).toFixed(2);//8.57

/* Very Important */

parseInt("100px");//100
parseInt("500 years");//500
parseInt("years 500");//NaN --> Number should appear first;

//Ex: "80 years"/100--> NaN, parseInt("80 years"/100)--->0.8