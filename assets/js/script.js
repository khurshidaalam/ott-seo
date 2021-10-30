// search open close 
    const search = document.querySelector(".search");
    const searchArea = document.querySelector(".search-area");
    const cross = document.querySelector(".s-cross");

    search.addEventListener("click",function(){
        searchArea.classList.add("search-show");
    })
    cross.addEventListener("click",function(){
        searchArea.classList.remove("search-show");
    })

// navar onscroll bg color change
window.onscroll = function () { scrollFunction() };
var navbars = document.querySelector(".main-nav")
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbars.style.backgroundColor = "#0d1633";
    } else {
        navbars.style.backgroundColor = "transparent";

    }
}


// mobile navbar menu open close 
const mobilenav = document.querySelector(".mobile-navbar-dropdown");
    const mbshow = document.querySelector(".mb-show");
    const mbhide = document.querySelector(".mb-hide");

    mbshow.addEventListener("click", function(){
        mobilenav.classList.add("open");
    })
    mbhide.addEventListener("click", function(){
        mobilenav.classList.remove("open");
    })

// testimonial carousel slider 
var owl = $('.screenshot_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 0,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
            dots:true,
            margin: 10,
        },
        1200: {
            items: 3,
        }
    }
});

/****************************/

jQuery(document.documentElement).keydown(function (event) {

    // var owl = jQuery("#carousel");

    // handle cursor keys
    if (event.keyCode == 37) {
        // go left
        owl.trigger('prev.owl.carousel', [400]);
        //owl.trigger('owl.prev');
    } else if (event.keyCode == 39) {
        // go right
        owl.trigger('next.owl.carousel', [400]);
        //owl.trigger('owl.next');
    }

});

// oc carousel 
$(document).ready(function () {
    $('.card-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        slideBy: 1,
        dots: true,
        dostData: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 6,
                dots: false
            }
        }
    })
});
$(document).ready(function () {
    $('.feature-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        center: true,
        autoplay: true,
        slideTransition: `linear`,
        autoplaySpeed: `3000`,
        slideBy: 1,
        dots: true,
        dostData: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6,
            }
        }
    })
})
$(document).ready(function () {
    $('.oc-carousel').owlCarousel({
        loop: true,
        margin: 00,
        nav: false,
        slideBy: 1,
        dots: true,
        center: true,
        responsive: {
            0: {
                items: 2,
                center: true,
            },
            600: {
                items: 3,
                center: true,
            },
            1000: {
                items: 6,
                dots: true
            }
        }
    })
});


// youtube play button 
document.addEventListener("DOMContentLoaded", function () {
    var div,
        n,
        v = document.getElementsByClassName("youtube-player");
    for (n = 0; n < v.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", v[n].dataset.id);
        div.innerHTML = noThumb(v[n].dataset.id);
        div.onclick = noIframe;
        v[n].appendChild(div);
    }
});

function noThumb(id) {
    var thumb = '<img src="./assets/img/seo/meet-our-leader-video-front-img-big-compressor-min.jpg" alt="vdo" />',
        play = '<div class="play"><i class="fas fa-play"></i></div>';
    return thumb.replace("ID", id) + play;
}

function noIframe() {
    var iframe = document.createElement("iframe");
    var embed =
        "https://www.youtube.com/embed/J1sDLCKt5X4?rel=0&amp;showinfo=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.overthetopseo.com";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    this.parentNode.replaceChild(iframe, this);
}

// service list click to show 
$(function () {
    $(".service-list-item").slice(0, 4).show();

    $(window).resize(function () {
        var w = $(window).width();
        if (w < 700) {
            $(".service-list-item").slice(0, 2).show();
        }
    });

    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".service-list-item:hidden").slice(0, 4).slideDown();
        if ($(".service-list-item:hidden").length == 0) {
            $("#loadLess").fadeIn('slow');
            $("#loadMore").hide();
            // $("#loadMore").text('Load only the first 4');
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 1500);
    });

    $("#loadLess").on('click', function (e) {
        e.preventDefault();
        $('.service-list-item:not(:lt(4))').fadeOut();
        $("#loadMore").fadeIn('slow');
        $("#loadLess").hide();

        desiredHeight = $(window).height();

        // $('html,body').animate({
        //     scrollTop: $(this).offset().top + desiredHeight
        // }, 1500);
    });

});

const owldot = document.querySelector(".owl-dot");
owldot.setAttribute("aria-label", "Center Align");