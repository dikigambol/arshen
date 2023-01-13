(function ($) {
    "use strict";

    AOS.init();

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

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n
    }

    function counter(event) {
        if (!event.namespace) {
            return;
        }
        var slides = event.relatedTarget;
        $('.wrap-counter').html(`
		<p class="slider-counter">
		${minTwoDigits(slides.relative(slides.current()) + 1)}<sup class="sup-counter">${'/ ' + minTwoDigits(slides.items().length)}</sup>
		</p>`);
    }

    var carousel = function () {
        $('.featured-carousel').owlCarousel({
            loop: false,
            onInitialized: counter,
            onChanged: counter,
            autoplay: false,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: true,
            dots: true,
            autoplayHoverPause: false,
            items: 1,
            navText: ["<p><span class='ion-ios-arrow-round-back'></span></p>", "<p><span class='ion-ios-arrow-round-forward'></span></p>"],
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
    carousel();

    var carousel2 = function () {
        $('.product-carousel').owlCarousel({
            loop: true,
            onInitialized: counter,
            onChanged: counter,
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

})(jQuery);

var textM11 = function () {
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml11 .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 15],
            easing: "easeOutExpo",
            opacity: [1, 0],
            duration: 700,
            delay: 100
        }).add({
            targets: '.ml11 .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1000,
            offset: '-=775',
            delay: (el, i) => 34 * (i + 1)
        }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}
textM11()

var particles = function () {
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#ffffff"
                    },
                    "polygon": {
                        "nb_sides": 7
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 0,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 170,
                    "color": "#fff",
                    "opacity": 0.35,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );
}
particles()

var textScroll = function () {
    let viewHeight = window.innerHeight;
    let viewWidth = window.innerWidth;

    let textContainers = document.querySelectorAll('.text-container');

    textContainers.forEach((element, index) => {
        let top = element.getBoundingClientRect().top;
        let start = viewHeight - top;

        let firstText = element.querySelector('.parallax-text:first-child');
        let secondText = element.querySelector('.parallax-text:last-child');

        gsap.to(firstText, {
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: start + "px bottom",
                end: "bottom top"
            },
            x: '-50vw',
            transformOrigin: "left center",
            ease: "none"
        });
        gsap.to(secondText, {
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: start + "px bottom",
                end: "bottom top"
            },
            x: '40vw',
            transformOrigin: "left center",
            ease: "none"
        });
    });
};
textScroll()

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

var x = window.matchMedia("(min-width: 576px)")
if (x.matches) {
    $('#slider-team').removeClass('owl-carousel-team');
    $('#slider-team').removeClass('owl-carousel');
}

function storyScript() {
    gsap.registerPlugin(Observer);
    let sections = document.querySelectorAll(".story-list"),
        images = document.querySelectorAll(".bg-story"),
        headings = gsap.utils.toArray(".section-heading"),
        outerWrappers = gsap.utils.toArray(".outer"),
        innerWrappers = gsap.utils.toArray(".inner"),
        splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars, words, lines", linesClass: "clip-text" })),
        currentIndex = 1,
        wrap = gsap.utils.wrap(0, sections.length),
        animating;
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
        index = wrap(index);
        animating = true;
        let fromTop = direction === -1,
            dFactor = fromTop ? -1 : 1,
            tl = gsap.timeline({
                defaults: { duration: 1.25, ease: "power1.inOut" },
                onComplete: () => animating = false
            });
        if (currentIndex >= 0) {
            gsap.set(sections[currentIndex], { zIndex: 0 });
            tl.to(images[currentIndex], { yPercent: -15 * dFactor })
                .set(sections[currentIndex], { autoAlpha: 0 });
        }
        gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
        tl.fromTo([outerWrappers[index], innerWrappers[index]], {
            yPercent: i => i ? -100 * dFactor : 100 * dFactor
        }, {
            yPercent: 0
        }, 0)
            .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
            .fromTo(splitHeadings[index].chars, {
                autoAlpha: 0,
                yPercent: 150 * dFactor
            }, {
                autoAlpha: 1,
                yPercent: 0,
                duration: 1,
                ease: "power2",
                stagger: {
                    each: 0.02,
                    from: "random"
                }
            }, 0.2);

        currentIndex = index;
    }

    Observer.create({
        type: "wheel, touch, pointer",
        wheelSpeed: -1,
        onDown: () => !animating && gotoSection(currentIndex - 1, -1),
        onUp: () => !animating && gotoSection(currentIndex + 1, 1),
        tolerance: 50,
        preventDefault: true
    });

    gotoSection(0, 1);

    var dragBtn = $('.drag-button');
    var dragTgt = $('.drag-target');
    var overlap = '50%';

    Draggable.create(dragBtn, {
        type: 'x',
        bounds: '.drag-container',
        onDrag: function (e) {
            if (this.hitTest(dragTgt, overlap)) {
                $(this.target).addClass('in-range');
            } else {
                $(this.target).removeClass('in-range');
            }
        },
        onDragEnd: function (e) {
            var endPos = $(this.target).parent().width() - 50 + 'px';
            if ($(this.target).hasClass('in-range')) {
                $(this.target).addClass('in-target');
                gsap.to(this.target, { duration: 0.2, x: endPos });
                gsap.to('.drag', { duration: 0.5, autoAlpha: 0, delay: 0.5 });
                setTimeout(function () {
                    $('.bg').addClass('drag-success');
                    setTimeout(function () {
                        $('.content-hidden').addClass('hidden-object');
                        $('.content-photos').removeClass('hidden-object');
                    }, 1000)
                    gsap.to('.content-hidden', { duration: 0.5, y: 0, autoAlpha: 0, delay: 0.5 });
                    setTimeout(function () {
                        gsap.to('.content-photos', { duration: 0.5, y: 0, autoAlpha: 1, delay: 0.5 });
                    }, 1200)
                }, 1000);
            } else {
                gsap.to(this.target, { duration: 0.2, x: 0 });
            }
        }
    });
}

function fullStory() {
    $('#cursor-ball').addClass('expand-ball');
    setTimeout(function () {
        $('#cursor-ball').removeClass('expand-ball');
        $('#cursor-ball').addClass("transition-cursor");
        $('body').addClass("story-show");
        $('#full-story-wrapper').addClass("show");
        storyScript()
        setTimeout(function () {
            $('#cursor-ball').removeClass("transition-cursor");
        }, 600);
    }, 600);
}