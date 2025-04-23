var programmingLang =['javascript','php','c#']
console.log (programmingLang[0]);
console.log(programmingLang);
programmingLang.push('Java');
console.log(programmingLang);
programmingLang.pop();
console.log(programmingLang)
programmingLang.unshift('php')
console.log(programmingLang);
programmingLang.shift()
console.log(programmingLang);
programmingLang.splice(0, 2,'screch')
console.log(programmingLang);
console.log(Math.random() *5); 
console.log(Math.floor(Math.random()*90))  
var students=['Florian','Anuar','Amar','haner']
var [s1,s2,s3,s4]= students
console.log(s1,s2,s4)
var numbers =[1,2,3,4,5,6,7,8,9]
var [frist,second, ...othernumbers] = Numbers
console.log(frist)
console.log(second)
console.log(othernumbers)
var family=[baba,nana,motra,vllau]
var [f1,f2 ... otherFamily]=family;
console.log(f1);
console.log(f2);
console.log(otherfamily);