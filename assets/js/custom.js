
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


  var testimonialItems = document.querySelectorAll(".item label");
  var timer;
  function cycleTestimonials(index) {
  timer = setTimeout(function() {
      var evt;
      if (document.createEvent){
      //If browser = IE, then polyfill
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      } else {
      //If Browser = modern, then create new MouseEvent
      evt = new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: true,
              clientX: 20
          });
      }
      var ele = "." + testimonialItems[index].className;
      var ele2 = document.querySelector(ele)
      ele2.dispatchEvent(evt);
      index++; // Increment the index
      if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
      }
      cycleTestimonials(index); // recursively call `cycleTestimonials()`
      document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
      });
  }, 2000); //adjust scroll speed in miliseconds
  }
  //run the function
  cycleTestimonials(0);