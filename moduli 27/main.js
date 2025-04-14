function showMessage(){
    alert("Hello")
}
showMessage();
function sum(num1,num2){
    return num1+num2;
}
console.log (28+2)
function dsFuntcion(){
    var localVar="Shkolla digjitale"
    alert(localVar);
}
dsFuntcion();
function tosecond(minutes ){
    return minutes *60;
}
console.log(tosecond( 60 ));
function siperfaqjaetrekendeshit(a,h){
    return 0.5 *a*h;
}
console.log(siperfaqjaetrekendeshit(1,6));
var vetura = {
    name:"llad",
    color:"sahrit",
    year:"parakrishtit",
    km:100000,
    get getkm(){
        return this.km;
    },



    set setkm(km){
        this.km=km;
    }
};
console.log(vetura.getkm)
vetura.setkm=100;
console.log(vetura.getkm);
//     startengine:function(){
//         alert("start");
//     }
// };
vetura.startengine();
alert (vetura.name);

var shkolla={
    name:"shkolla digjitale",
    viti_ndertimit:"2002",
    nexenesit:"2000",
}
alert (shkolla.name);
var computer = new Object();
computer.name = "lenov";
computer.CPU = "Intel";
computer.RAM = "16GB";
computer.type = function(){
    return this.name + " " + this.CPU + " " + this.RAM;
}
alert(computer.CPU);