// init aos 
AOS.init();

// custom cursor 
const $bigBall = document.querySelector('.cursor-ball-big');
const $smallBall = document.querySelector('.cursor-ball-small');
const $hoverables = document.querySelectorAll('.hoverable');

document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

function onMouseMove(e) {
    $('.cursor').removeClass('hidden-object');
    TweenMax.to($bigBall, .4, {
        x: e.pageX - 15,
        y: e.pageY - 15
    });
    TweenMax.to($smallBall, .1, {
        x: e.pageX - 5,
        y: e.pageY - 7
    });
}

function onMouseHover() {
    TweenMax.to($bigBall, .3, {
        scale: 4
    });
}

function onMouseHoverOut() {
    TweenMax.to($bigBall, .3, {
        scale: 1
    });
}

$("body").mouseleave(function () {
    $('.cursor').addClass('hidden-object');
});

window.onscroll = function (e) {
    $('.cursor').addClass('hidden-object');
}

// navbar 
if ($("#content").hasClass("non-index")) {
    $("#logo-brand").attr("src", "assets/images/logo.svg");
    $('.nav-toggle').addClass('black');
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if ($nav.hasClass('scrolled')) {
            $("#logo-brand").attr("src", "assets/images/logo-white.svg");
        } else {
            $("#logo-brand").attr("src", "assets/images/logo.svg");
        }
    });
}


var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
    });
};
fullHeight();

var burgerMenu = function () {
    $('.js-nav-toggle').on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        if ($('body').hasClass('menu-show')) {
            $('body').removeClass('menu-show');
            $('#main-nav > .js-nav-toggle').removeClass('show');
        } else {
            $('body').addClass('menu-show');
            setTimeout(function () {
                $('#main-nav > .js-nav-toggle').addClass('show');
            }, 900);
        }
    })
};
burgerMenu();

$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// slider 
var carousel2 = function () {
    $('.product-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        dots: true,
        autoplayHoverPause: false,
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
};
carousel2();

var carousel3 = function () {
    $('.owl-carousel-product').owlCarousel({
        loop: false,
        autoplay: true,
        margin: 50,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
}
carousel3()

var carousel4 = function () {
    $('.owl-carousel-locations').owlCarousel({
        stagePadding: 125,
        loop: false,
        margin: 25,
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 35
            },
            600: {
                items: 2,
                stagePadding: 70
            },
            992: {
                items: 3,
                stagePadding: 47
            },
            1200: {
                items: 3
            }
        }
    });
}
carousel4()

var carousel5 = function () {
    var x = window.matchMedia("(min-width: 576px)")
    if (x.matches) {
        $('#slider-team').removeClass('owl-carousel-team');
        $('#slider-team').removeClass('owl-carousel');
    } else {
        $('.owl-carousel-team').owlCarousel({
            loop: false,
            autoplay: false,
            items: 1,
            stagePadding: 33,
            margin: 0,
            dots: false,
        });
    }
}
carousel5()

var carousel6 = function () {
    $('.owl-carousel-story').owlCarousel({
        loop: false,
        autoplay: false,
        items: 1,
        stagePadding: 65,
        margin: 20,
        dots: false,
    });
}
carousel6()

// custom quantity input 
function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 0) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}

// faq 
var faq = function () {
    const toggleBtn = document.querySelectorAll('.faq-card');
    toggleBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active')
        })
    })
}
faq();