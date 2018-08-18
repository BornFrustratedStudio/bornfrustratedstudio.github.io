/// ** Twitter Style Injection
function Repaint() 
{
    var backgroundColor = "#000"; 
    var customCSS       = "" + 
                          ".timeline-Header { background-color: " + backgroundColor + "; }" + 
                          ".timeline-Widget { background-color: " + backgroundColor + "; }"; 
    var w = document.getElementById("twitter-widget-0").contentDocument; 
    var s = document.createElement("style"); 
    s.innerHTML = customCSS; 
    s.type      = "text/css"; 
    
    w.head.appendChild(s); 
}

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
