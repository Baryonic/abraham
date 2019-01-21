
var player;
var position;


var fps;


var moveRB;
var moveLB;

function finit(){

fps=60;
player=document.getElementById("d2");
position=0;

moveRB=true;
moveLB=false;

}

function f1(){
setInterval(function(){


if(moveRB==true){moveRight();}
else if(moveLB==true){moveLeft();}

if(player.style.left=="460px"){moveRB=false;
moveLB=true;}
if(player.style.left=="0px"){moveRB=true;
moveLB=false;}

},100);
}


function f2(){
player.style.backgroundColor="yellow";
}

function f3(){

position+=10;
document.getElementById("d2").style.left=position+'px';
}



function moveRight(){
position+=10;
document.getElementById("d2").style.left=position+'px';
}
function moveLeft(){
position-=10;
document.getElementById("d2").style.left=position+'px';
}
