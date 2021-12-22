$(document).ready(function(){
    $('.carousel').carousel({
        interval: 2000
      });
    $("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();  

        if(scroll > 200){
            if(!flag){
                $('#logo').css({"margin-top":"-5px","width":"150px","height":"auto"});
                $('header').css({"background-color": "white", "border":"blue"});
                flag = true;
            }
        } else {
            if(flag){
                $('#logo').css({"margin-top":"150px","width":"300px","height":"auto"});
                $('header').css({"background-color": "transparent"});            
                flag = false;
            }
        }
    });
});