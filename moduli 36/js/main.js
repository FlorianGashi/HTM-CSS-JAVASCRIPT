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
$("#btn3").click(function(){
    $(".hidden").show('slow');
});
$("#btn4").click(function(){
    $(".hidden").hide();
});
$('#square').click(function(){
    $('#square').animate({
        'width':'200px', 
        'height':'200px'
    });
});