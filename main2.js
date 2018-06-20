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

readTextFile("file:///C:/Users/GAURAV/Desktop/HartronWorkspace/RapidTyping/foo.txt");


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
else if(event.keyCode==188&&text[c1]==",")
{arr[1][c1]=1;
shift=0;
c1+=1;
}
else if(event.keyCode==190&&text[c1]==".")
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
function changesec()
{sec+=1;
sec1=sec%60;
min=Math.floor(sec/60);
var str;
if(min>=10)if(sec>=10)str=min+":"+sec1;else str=min+":"+"0"+sec1;else if(sec>=10)str="0"+min+":"+sec1;else str="0"+min+":"+"0"+sec1;
document.getElementById("timer").innerHTML='Time: '+str;

document.getElementById("speed").innerHTML='Speed: '+(nw/(min+sec/60)).toFixed(2)+' words/minute';
}

function over()
{
//document.getElementById("b1").disabled=false;
clearInterval(interval);
document.getElementById("speed").innerHTML='Speed: '+(nw/(min+sec/60)).toFixed(2)+' words/minute';
var speed=(nw/(min+sec/60)).toFixed(2);
var time=document.getElementById("timer").innerHTML;
alert("speed: "+speed+"\t"+time);
window.close();
}
