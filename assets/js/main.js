jQuery(document).ready(function($){


  var win = $(window);
  var slideUp = $(".slide-up");
  var slideIn = $(".slide-in");
  var fadeIn = $(".fade-in");
  var headerHeight = $('#masthead').height();
  var viewportHeight = $(window).height();
  var viewportWidth = $(window).width();
  var mobileBreakPoint = 1000;
  var ctaHeight = $('#cta-section').height();
  var ctaTopMargin = (viewportHeight - ctaHeight) / 2 - headerHeight; 

    if (ctaTopMargin > 200) {
      ctaTopMargin = 200;
    } else if (ctaTopMargin < 50) {
      ctaTopMargin = 50;
    }

  $('#masthead').animate({
    opacity: 1
  });  

  var toggleNav = function() {
    var navWidth = $('#main-nav').width();
    $('#mobile-nav-icon').toggleClass("mobile-nav-open");
    if ($('#mobile-nav-icon').hasClass("mobile-nav-open")) {
      $('#main-nav').css({ right: "0" });
      $('body').css('overflow', 'hidden');
    } else {
      $('#main-nav').css({ right: navWidth });
      $('body').css('overflow', 'auto');
    }
  }

  $('#mobile-nav-icon').on('click', toggleNav);

  $('#cta-section').css('margin-top', ctaTopMargin);
  $('#cta-section').animate({
    opacity: 1
  });

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      var viewportWidth = $(window).width();
      if (viewportWidth <= mobileBreakPoint && $(this).hasClass("nav-link")) {
        toggleNav();
      }
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });

  $.fn.visible = function(partial) {
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };

  win.scroll(function(event) {

    var scroll = win.scrollTop();
    var x = 0;

    if(scroll > 0) {
      $("#masthead").addClass("sticky-header");
    } else {
      $("#masthead").removeClass("sticky-header");
    }

    slideUp.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });    

    slideIn.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("slide-in-visible"); 
      } 
    });    

    fadeIn.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("fade-in-visible"); 
      } 
    });

  });

});

