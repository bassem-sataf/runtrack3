$(document).ready(function(){

    $("#button").click(function (){
        $('p').css('display', 'none')
    });
    $("#button + button").click(function (){
        $('p').css('display', 'block')
    }); 


})
    