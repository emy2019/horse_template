$(document).ready(function(){

   // Nice Scroll Library

   $("body").niceScroll({
    cursorcolor:"#e2b571",
    cursorwidth:"10px",
    cursorborderradius:0,
    cursoropacitymin:0.4,
    autohidemode:'leave',
    scrollspeed: 60,
    mousescrollstep: 40,
    cursorborder:'1px solid transparent',
   });
   

   // Go To The Same Section 

$("a[data-scroll]").on("click", function(e){
  e.preventDefault();
  
  var target = ('#' + $(this).data("scroll")),
    $target = $(target);
    $('html,body').stop().animate({
        'scrollTop':$target.offset().top
    },800,'swing');
})


// Hide Minu when clicked anywhare


    $('.minu-icon').click(function(event){
        event.stopPropagation();
         $(".list").slideToggle("fast");
    });
    $(".list").on("click", function (event) {
        event.stopPropagation();
    });
   
    
    $(document).on("click", function () {
        $(".list").fadeOut();
    });


 // hide and Show button  

 $(window).on("scroll", function(){
     $(this).scrollTop()>=600 ? $(".btn").fadeIn():$(".btn").fadeOut()
 })

 // go to the brgining of the Page 


 $(".btn").on("click", function(){
     $('html,body').animate({
         scrollTop:0
     },1000)
 })


})