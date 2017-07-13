$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= 3 && $(window).scrollTop() <= 10){
            $("#header-title").css("font-size","3em");
            $("#header-desc").css("font-size","1em");
            $(".header-box").css("min-height","20em")
            $('.content-header').css("padding","4%")
            $('.content-header *').css("margin","0px")
            
            
        }else if($(window).scrollTop() >10){
            $("#header-title").css("font-size","1.3em");
            $(".header-box").css("min-height","20em")
            $("#header-desc").css("visibility","hidden");
        }else if($(window).scrollTop() < 3){
            $("#header-title").css("font-size","5em");
            $(".header-box").css("min-height","30em")
            $("#header-desc").css("visibility","visible");
            $("#header-desc").css("font-size","1.7em");
        }
    })
})