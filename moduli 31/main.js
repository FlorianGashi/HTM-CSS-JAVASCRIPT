for(var i=0 ;i<5 ; i++){
    console.log("Value of i is" +i);
}
var person ={firstname:"Florian",lastname:"Gashi"}
var text='';
var z;
for (z in person){
    text += person[z] ;
}
console.log(text);
var names =["John","Mary","David"];
var x;
for (x of names);
(
    document.write(x+"<br>")
)
    

console.log(x)

let o=0;
do{
    o+=1;
    console.log(o);
}
while(o<5);
var names=["html","java","css"]
var p;
for (p of names){
    console.log(p);
}
var names=["html","java","css"]
for (i=0;i<names.length;i++){
    document.write(names[i]+'<br>');
 }
 var name_input = document.getElementById("name_input");
 var btnADD = document.getElementById("btnADD");
 var btnShow = document.getElementById("btnShow");
 btnADD.onclick=function(){
    names.push(name_input.value)
 }
 btnShow.onclick=function(){
    for (n=0;n<names.length;n++)
        document.write(names[n]+"<br>")
 }