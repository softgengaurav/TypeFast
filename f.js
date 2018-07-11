function changeFunc()
{
var lesson=document.getElementById("num");
var selectedvalue="0";
selectedvalue=lesson.options[lesson.selectedIndex].value;
//alert(selectedvalue);
//readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/one.txt");
/*switch(selectedvalue)
{
	case "l1":
	readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/one.txt");
break;
case "l2":
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/two.txt");
break;
case "l3":
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/three.txt");
break;
case "l4":

readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/four.txt");
break;
case "l5":
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/five.txt");
break;
	
}*/
//if(selectedvalue!="0")
	//alert("successfully selected");
//window.location.href="prac_type_project1.html";

setTimeout(function(){
window.open("prac_type_project1.html?"+selectedvalue,'_blank');
},1000);
}