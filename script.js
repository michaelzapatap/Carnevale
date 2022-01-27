$(document).ready(function(){
    $('.carousel').carousel('cycle')({
        interval: 2000
      });
    $("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;
    $(document).ready(function(){
    
        $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {
    
            var $this = $(this),
              label = $this.prev("label");
    
            if (e.type === "keyup") {
                if ($this.val() === "") {
                    label.removeClass("active highlight");
                } else {
                    label.addClass("active highlight");
                }
            } else if (e.type === "blur") {
                if($this.val() === "") {
                    label.removeClass("active highlight"); 
                    } else {
                    label.removeClass("highlight");   
                    }   
            } else if (e.type === "focus") {
                if($this.val() === "") {
                    label.removeClass("highlight"); 
                } 
                else if($this.val() !== "") {
                    label.addClass("highlight");
                }
            }
    
        });
    
        $(".tab a").on("click", function (e) {
    
            e.preventDefault();
    
            $(this).parent().addClass("active");
            $(this).parent().siblings().removeClass("active");
    
            target = $(this).attr("href");
    
            $(".contenido-tab > div").not(target).hide();
    
            $(target).fadeIn(600);
    
        });
        
    });

});
const button = document.querySelector('button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('activated');
});

const menuButtons = document.querySelectorAll('.menu__button');

const menuButtonsArray = Array.from(menuButtons);

menuButtonsArray.forEach(button => {

    button.addEventListener('click', () => {

       closeAnotherButtons(button);       
       button.classList.toggle('activated');       
              
    });
}); 

function closeAnotherButtons(activeButton) {

    menuButtonsArray.forEach(button => {
        
        if(button != activeButton) {        
            if(button.classList.contains('activated')) {
                button.classList.remove('activated');           
            } 
        }

    });
}
/**
 * Variables
 */
 const signupButton = document.getElementById('signup-button'),
 loginButton = document.getElementById('login-button'),
 userForms = document.getElementById('user_options-forms')

/**
* Add event listener to the "Sign Up" button
*/
signupButton.addEventListener('click', () => {
    userForms.classList.remove('bounceRight')
    userForms.classList.add('bounceLeft')
}, false)

/**
* Add event listener to the "Login" button
*/
loginButton.addEventListener('click', () => {
    userForms.classList.remove('bounceLeft')
    userForms.classList.add('bounceRight')
}, false) 

// home
var slideCount = getElementById("carouselExampleIndicators").length();
var slideWidth = getElementById("carouselExampleIndicators").width();
var slideHeight = getElementById("carouselExampleIndicators").height();
var sliderUlWidth = slideCount * slideWidth;
var inner = getElementsByClassName("carousel-inner");
var innerLC = inner[inner.length -1]
var buttonAnt = getElementsByTagName("carousel-control-ant")

function moveLeft() {
    console.log(inner.length)
    inner.animate({
        left: + slideWidth
    }, 200, function () {
        innerLC.prepend(inner);
        inner.css('left', '');
    });
};
buttonAnt.addEventListener(click, function () {
    moveLeft();
});

jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#carouselExampleIndicators').length;
	var slideWidth = $('#carouselExampleIndicators').width();
	var slideHeight = $('#carouselExampleIndicators').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#carouselExampleIndicators').css({ width: slideWidth, height: slideHeight });
	
	$('.carousel-inner').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('.carousel-item:last-child').prependTo('.carousel-inner');

    function moveLeft() {
        $('.carousel-inner').animate({
            left: + slideWidth
        }, 200, function () {
            $('.carousel-item:last-child').prependTo('.carousel-inner');
            $('.carousel-inner').css('left', '');
        });
    };

    function moveRight() {
        $('.carousel-inner').animate({
            left: - slideWidth
        }, 200, function () {
            $('.carousel-item:first-child').appendTo('.carousel-inner');
            $('.carousel-inner').css('left', '');
        });
    };

    $('.carousel-control-prev-icon').click(function () {
        moveLeft();
    });

    $('.carousel-control-next-icon').click(function () {
        moveRight();
    });

});  