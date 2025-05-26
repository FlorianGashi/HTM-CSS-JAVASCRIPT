// $(window).ready(function(){
//     alert('It is working!!!');
// });

// $('#header');
// $('ul li');
// $('li');
// $('.student');
// $('a.test:first');
// $('tr:odd');
// $('div:visible');
$('li').click(function(){
    alert('clicked');
});
$('#btn').click(function(){
    console.log ($('#h1').text());
    $('#h1').text('testing text');
    $('#h1').append('Extra time');
})