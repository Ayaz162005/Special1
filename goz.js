var baby=document.getElementsByClassName("baby");
console.log(baby);
document.onmousemove=function(){
var x=event.clientX*100/window.innerWidth+"%";
var y=event.clientY*100/window.innerHeight+"%";
for(var i=0;i<2;i++){

baby[i].style.top=y;
baby[i].style.left=x;
baby[i].style.transform="translate(-"+x+","+y+"-)";



}





}