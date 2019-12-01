/*========================================adding & removing class "active" ==========================*/
$(document).ready(function() {
  $("nav li a").on("click", function() {
    $("nav li a").removeClass("active");
    $(this).addClass("active");
  });
});
/*=====================================fixed navbar================================================*/
$(document).ready(function() {
  $(window).bind("scroll", function() {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  });
});
/*======================================Smooth scrolling==============================================*/
$(function() {
  $(".nav_links a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      // Add smooth scrolling to all links

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        500,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(function() {
  $("#icon i").hover(
    function() {
      $(this).animate({ zoom: 2.2 }, 400);
    },
    function() {
      $(this).animate({ zoom: 1 }, 400);
    }
  );
});
/*============================================ ease-pie-chart ============================================*/
$(function() {
  $(".chart").easyPieChart({
    barColor: "#fff",
    lineCap: "round",
    size: "155",
    scaleLength: "0",
    scaleWidht: "0",
    lineWidth: "5",
    trackColor: "transparent"
  });
});
/*=========================================burger menu====================================================*/
$(function() {
  var link = $(".burger-menu");
  var linkActive = $(".burger-menu__active");
  var navLinks = $(".nav_links");
  var navBar = $(".navbar");

  link.click(function() {
    link.toggleClass("burger-menu__active");

    if (link.hasClass("burger-menu__active")) {
      navLinks.css("display", "flex");
      navBar.css("height", "320");
      $(".black").css("height", "320");
    } else {
      navLinks.css("display", "none");
      navBar.css("height", "80");
      $(".black").css("height", "80");
    }
  });

  linkActive.click(function() {
    link.removeClass("burger-menu__active");
  });
});
/*======================================   Slick.js      =======================================*/
$(document).ready(function() {
  $(".my-slides").slick({
    rt1: true,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 1000,
    respondTo: window,
    infinite: true
  });
});

/*  Слайдер для портфолио*/
$(document).ready(function() {
  $(".twitter").slick({
    rt1: true,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2000,
    respondTo: window,
    infinite: true
  });
});
