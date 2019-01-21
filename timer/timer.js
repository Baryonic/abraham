var h;
var m;
var s;

var fps;

function finit(){
h=0;
m=0;
s=0;

fps=60;

}


function run(){
setInterval(function(){

if(s<60){s+=1;}
else{if(m<60){m+=1;s=0;}else{if(h<24){h+=1;m=0;}else{h=0;}}}
    

f1();
},1000/fps);
}

function f1(){
document.getElementById("hour").innerHTML=h;
document.getElementById("min").innerHTML=m;
document.getElementById("sec").innerHTML=s;

}

