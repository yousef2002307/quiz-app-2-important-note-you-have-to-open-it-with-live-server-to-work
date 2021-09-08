$(document).ready(function () {
$(".startinggame button").click(function(){
$(this).parents(".startinggame").fadeOut();
$(".rules").fadeIn();
});
$(".rules .buttons button:eq(0)").click(function(){
    
    $(".rules").fadeOut();
    $(".startinggame").fadeIn();
});
$(".rules .buttons button:eq(1)").click(function(){
    
    $(".rules").fadeOut();
    $(".quiz").fadeIn();
});
/*
$(".quiz .body").on('click','p',function(){
$("button").css("display","block");
});
*/
});