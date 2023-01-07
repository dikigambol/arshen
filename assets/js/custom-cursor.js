const $bigBall = document.querySelector('.cursor-ball-big');
const $smallBall = document.querySelector('.cursor-ball-small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener('mouseenter', onMouseHover);
    $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
    $('.cursor').removeClass('hidden-object');
    // $('.cursor-ball').css('position', 'absolute');
    TweenMax.to($bigBall, .4, {
        x: e.pageX - 15,
        y: e.pageY - 15
    });
    TweenMax.to($smallBall, .1, {
        x: e.pageX - 5,
        y: e.pageY - 7
    });
}

// Hover an element
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

$("body").mouseleave(function() {
    $('.cursor').addClass('hidden-object');
});

window.onscroll = function (e)
{
    $('.cursor').addClass('hidden-object');
}