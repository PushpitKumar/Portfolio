//window scroll
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) { //Add a class to the body tag when user scrolls
        $('body').addClass('fixed-header');
    }
    else {
        $('body').removeClass('fixed-header')
    }
});

//Document Ready (On Page Load)
$(document).ready(function() {
    //Typing Animation
    new Typed('#type-it', {
        strings: ['Developer', 'Gamer'],
        typeSpeed: 50,
        loop: true,
        startDelay: 100
      });

    //To download resume
    document.getElementById('resume-btn').addEventListener('click', function() {
        var resumeUrl = "Pushpit's Resume.pdf";
        var downloadLink = document.getElementById('download-link');
        downloadLink.href = resumeUrl;
        downloadLink.click();
    });

    //To open About Me page in a new tab
    document.getElementById('about-btn').addEventListener('click', function() {
        var aboutPageUrl = 'about.html';
        window.open(aboutPageUrl, '_blank');
    });

    //For carousel-indicators css on auto-slide. slid.bs.carousel is an event which is triggered by bootstrap when the carousel has finished sliding from 1 item to another. In the event handler, we get the index of the current item and use it to find the corresponding button in carousel-indicator.
    $('#projects-carousel').on('slid.bs.carousel', function() {
        var currentIndex = $('#projects-carousel .carousel-item.active').index();
        $(".projects-section .carousel-indicator button").removeClass("active").attr("aria-current", "false").animate({opacity: "0.5"}, 500);
        //Add active class, aria-current and opacity to the clicked button
        $(".projects-section .carousel-indicator button").eq(currentIndex).addClass("active").attr("aria-current", "true").animate({opacity: "1"}, 500);
    })

    //For carousel-indicators css on clicking them
    $(".projects-section .carousel-indicator button").click(function() {
        //Remove active class and aria current-current from all buttons
        $(".projects-section .carousel-indicator button").removeClass("active").attr("aria-current", "false").animate({opacity: "0.5"}, 500);
        //Add active class, aria-current and opacity to the clicked button
        $(this).addClass("active").attr("aria-current", "true").animate({opacity: "1"}, 100);
    });

    //Page Scroll using ScrollIt for link navigation
    $.scrollIt({
        easing: 'linear',      // the easing function for animation
        scrollTime: 100,       // how long (in ms) the animation takes
        topOffset: 0
    })
});