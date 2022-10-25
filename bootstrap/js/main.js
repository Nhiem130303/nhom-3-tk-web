$(document).ready(function(){
    $('#menu_search').click(function(){
        $('.search_form').toggleClass('active');
    })
})
$(document).ready(function(){
    if($(window).width()<= 768){
    $('.nav_bar').slideToggle();
    }
    $('#menu_btn').click(function(){
        $('.nav_bar').slideToggle();
    });
})
