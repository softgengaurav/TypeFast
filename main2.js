var allText;
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                //alert(allText);
				
            }
        }
    }
    rawFile.send(null);
}
var str=window.location.toString();
var n=str[str.length-1];
switch(n)
{
case '1':
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/lesson/one.txt");
break;
case '2':
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/lesson/two.txt");
break;
case '3':
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/lesson/three.txt");
break;
case '4':
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/lesson/four.txt");
break;
case '5':
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/lesson/five.txt");
break;
}
//readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/foo.txt");
/*function changeFunc()
{
var lesson=document.getElementById("num");
var selectedvalue=lesson.options[lesson.selectedIndex].value;
alert(selectedvalue);
//readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/one.txt");
switch(selectedvalue)
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
	
}
}*/
/*New Code 2nd July*/
/*var n=prompt("Enter the lesson no.");
switch(n)
{
case '1':
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/one.txt");
break;
case '2':
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/two.txt");
break;
case '3':
readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/three.txt");
break;
}*/
//newcode ends




window.onload=function()
{
document.getElementById("head").innerHTML=allText;
}

var c1=0;
var caps=0;
var shift=0;
var nw=0;
function change()
{


startTimer();
var span1=document.getElementById("head");
var text=span1.innerHTML;
var n=text.length;
//document.bgColor="yellow";
var arr=new Array(2);
arr[0]=new Array(1000);
arr[1]=new Array(1000);
for(i=0;i<=text.length-1;i++)
{
arr[0][i]=text[i];
arr[1][i]=0;
}
document.getElementById("b1").disabled=true;
document.getElementById("b1").className="clicked";
var alpha=" ";
window.addEventListener('keydown', function(event){
//alert(text[c1]);
//if(event.keyCode==13)
//alert("hello "+event.keyCode+" "+alpha.charCodeAt(0));	
var temp="";
if(text[c1].charCodeAt(0)==event.keyCode)
{
if(text[c1].charCodeAt(0)<=90&&text[c1].charCodeAt(0)>=65)
{
if(caps==1||shift==1)
{
arr[1][c1]=1;
}
else
{
arr[1][c1]=-1;
}
}
else
{
arr[1][c1]=1;
}

if(event.keyCode==32)
{
nw+=1;
//alert(nw);
}
shift=0;
c1+=1;
}
else if(text[c1].charCodeAt(0)==event.keyCode+32)
{
if(caps==0&&shift==0)
arr[1][c1]=1;
else
arr[1][c1]=-1;

shift=0;
c1+=1;
}
else if(event.keyCode==16)
shift=1;
else if(event.keyCode==20)
{caps=(caps+=1)%2;shift=0;}
else if(event.keyCode==191)
{
	if(text[c1]=="/"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else if(text[c1]=="?"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==188)
{
	if(text[c1]==","&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else if(text[c1]=="<"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==190)
{
if(text[c1]=="."&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else if(text[c1]==">"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==219)
{
	if(text[c1]=="["&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else if(text[c1]=="{"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==221)
{
	if(text[c1]=="]"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="}"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==186)
{
	if(text[c1]==";"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]==":"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==187)
{
	if(text[c1]=="="&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="+"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==189)
{
	if(text[c1]=="-"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="_"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==48)
{
	if(text[c1]=="0"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]==")"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==49)
{
	if(text[c1]=="1"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="!"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==50)
{
	if(text[c1]=="2"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="@"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==51)
{
	if(text[c1]=="3"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="#"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==52)
{
	if(text[c1]=="4"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="$"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==53)
{
	if(text[c1]=="5"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="%"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==54)
{
	if(text[c1]=="6"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="^"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==55)
{
	if(text[c1]=="7"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="&"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==56)
{
	if(text[c1]=="8"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="*"&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==57)
{
	if(text[c1]=="9"&&shift==0)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
else if(text[c1]=="("&&shift==1)
	{
	arr[1][c1]=1;
	shift=0;
	c1+=1;
	}
	else
	{
	arr[1][c1]=-1;
	shift=0;
	c1+=1;
	}
}
else if(event.keyCode==107&&text[c1]=="+")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==109&&text[c1]=="-")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==106&&text[c1]=="*")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==111&&text[c1]=="/")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==96&&text[c1]=="0")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==97&&text[c1]=="1")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==98&&text[c1]=="2")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==99&&text[c1]=="3")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==100&&text[c1]=="4")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==101&&text[c1]=="5")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==102&&text[c1]=="6")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==103&&text[c1]=="7")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==104&&text[c1]=="8")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==105&&text[c1]=="9")
{
arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==8)
{
arr[1][c1-1]=0;
shift=0;
c1-=1;
}
/*else if(event.keyCode==32)
{
if(text[c1]==" ")
{
arr[1][c1]=1;
nw+=1;
}
else
{
arr[1][c1]=-1;
}
alert(nw);
shift=0;
c1+=1;
}*/ //_________________these commented lines are not playing any role.
else
{
arr[1][c1]=-1;
shift=0;
c1+=1;
}

//_______________________________________________
for(i=0;i<=c1-1;i++)
{
if(arr[1][i]==0)
temp=temp+text[i];
else if(arr[1][i]==1)
temp=temp+'<span class="char-e">'+text[i]+'</span>';
else if(arr[1][i]==-1)
{
if(arr[0][i]==" ")
temp=temp+'<span class="char-f">_</span>';
else
temp=temp+'<span class="char-f">'+text[i]+'</span>';
}
}
if(c1<=text.length-1)
temp=temp+'<span class="char-h">'+text[c1]+'</span>';
for(i=c1+1;i<=text.length-1;i++)
{
if(arr[1][i]==0)
temp=temp+text[i];
else if(arr[1][i]==1)
temp=temp+'<span class="char-e">'+text[i]+'</span>';
else if(arr[1][i]==-1)
{
if(arr[0][i]==" ")
temp=temp+'<span class="char-f">_</span>';
else
temp=temp+'<span class="char-f">'+text[i]+'</span>';
}
}
span1.innerHTML=temp;
if(c1==text.length)
{nw+=1;over();}
});}
var sec=0;
var min;
var inctime=0;
var interval;
//while(sec>inctime)
function startTimer(){
interval=setInterval(changesec,1000);
}
var endtime;
var spd=0;
function changesec()
{sec+=1;
sec1=sec%60;
min=Math.floor(sec/60);
var str;

if(min>=10)if(sec>=10)str=min+":"+sec1;else str=min+":"+"0"+sec1;else if(sec>=10)str="0"+min+":"+sec1;else str="0"+min+":"+"0"+sec1;
{document.getElementById("timer").innerHTML='Time: '+str;endtime=str;}

spd=(nw/(min+sec/60)).toFixed(2)
document.getElementById("speed").innerHTML='Speed: '+spd+' words/minute';
}

function over()
{
//document.getElementById("b1").disabled=false;
clearInterval(interval);
document.getElementById("speed").innerHTML='Speed: '+(nw/(min+sec/60)).toFixed(2)+' words/minute';
var speed=(nw/(min+sec/60)).toFixed(2);
var time=document.getElementById("timer").innerHTML;
window.location.href="b.html? "+spd+"&"+endtime;
//alert("speed: "+speed+"\t"+time);
//window.close();
}
