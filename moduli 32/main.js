// var input = document.getElementById('input_id')
// var button = document.getElementById('btn')
// var text =document.getElementById('text_id')
// button.onclick=function(){
//     text.innerHTML=input.value;
// }
// var text ="The best school in world is Digital School";
// var result = text.search("Digital School");
// document.getElementById('result1').innerHTML = result;
var text = "The best school in the world is Digital School";
var result =  text.search("Digital School");
document.getElementById('result').innerHTML=result;


var text = "The best school in the world is Digital School";
var result =  text.replace(/Digital School/,"Gjin Gazulli")
document.getElementById('result1').innerHTML=result;
 var text='abcqddhef'
 var regex=new RegExp('abc')
 document.getElementById('result3').innerHTML=regex.test(text);
 var text ="My school is the best school in prishtna"
 var regex=/school/g;
 document.getElementById('result4').innerHTML=text.match(regex);
 var text ="My school is the best school in prishtna"
 var regex=/i/g;
 document.getElementById('result5').innerHTML=text.match(regex);
 var text ="My school is the best school in prishtna"
 var regex=/[ade]/g;
 document.getElementById('result5').innerHTML=text.match(regex);
 var text ="My school is2 the best school 1in 8prishtna"
 var regex=/[1-9]/g;
 document.getElementById('result5').innerHTML=text.match(regex);


