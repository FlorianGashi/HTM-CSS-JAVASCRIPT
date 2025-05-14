// function printName(){
//     document.write("mia");
//     document.write("<br>");
//     setTimeout(function(){document.write("mallkova") ;},3000);
//      document.write("test2");
// }
// printName()
// var colors = ['red', 'green', 'blue','black'];
// function changeBgColor(){
//     document.querySelector('body').style.background=colors[Math.floor(Math.random()*colors.length)];
// }
// var names=['Test','Test2','Test3','Test4'];
// function changeNames(){
//     document.querySelector('p').innerHTML=names[Math.floor(Math.random()*names.length)];
// }
// setInterval(changeBgColor,1000)
// setInterval(changeNames,1000)
var circle=document.getElementById("circle")
var time=document.getElementById("time")
function showCircle (){
    circle.style.display='block';
    circle.style.top=Math.random()*500+'px';
    circle.style.left=Math.random()*500+'px';
    circle.style.backgroundColor=randomColor();
    timestart=new Date().getTime();
}
showCircle();   