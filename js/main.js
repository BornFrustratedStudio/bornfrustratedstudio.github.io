
/// ** Scroll on Section

$("a.js-scroll-trigger").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault(); 

    // Store hash
    var hash = this.hash; 

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } 
  });

  $(".game-preview").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('.game-poster', this).finish().fadeOut("slow");
    $('.game-video', this).removeClass("d-none");
    /*$('.game-poster', this).addClass("d-none"); 
     */
    $('.game-video video', this).play(); 

    e.preventDefault();
}

function hideVideo(e) {
  $('.game-poster', this).finish().fadeIn("slow")//function(){
    $('.game-video', this).addClass("d-none");
    $('.game-video video', this).stop(); 
  //});
  
  /*$('.game-poster', this).addClass("d-none"); 
  $('.game-video', this).removeClass("d-none"); */
  
  e.preventDefault();
}

$( document ).ready(function() {
  $('#navbarResponsive').on('shown.bs.collapse', function () {
    $('#mainNav').css("background-color", "rgba(0, 0, 0, 0.9)");
  });
  
  $('#navbarResponsive').on('hide.bs.collapse', function () {
    $('#mainNav').css("background-color", "rgba(0, 0, 0, 0.5)");
  });

  if(!$("#navbarResponsive").is(":visible"))
  {
    $("#mainNav").css({"background-color":"rgba(0, 0, 0, 0.6)"});
  }

  $(document).scroll(function() { // check if scroll event happened
    if($("#navbarResponsive").is(":visible"))
    {
      if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
        $("#mainNav").css({"background-color":"rgba(0, 0, 0, 0.6)", "transition":"background-color 0.5s ease"}); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
      } else {
        $("#mainNav").css({"background-color":"rgba(0, 0, 0, 0.0)", "transition":"background-color 0.5s ease"}); // if not, change it back to transparent
      }
    }
  });


});
