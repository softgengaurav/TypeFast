window.onload=function(){
var str=window.location.toString();
//var n=str[str.length-1];
//alert("hello");
min="";
sec="";
speed="";
for(i=11;i>=7;i--)
	speed=speed+str[str.length-i];
for(i=5;i>=4;i--)
	min=min+str[str.length-i];
for(i=2;i>=1;i--)
	sec=sec+str[str.length-i];
document.getElementById("speed").innerHTML=speed;
document.getElementById("time").innerHTML=min+":"+sec;
}