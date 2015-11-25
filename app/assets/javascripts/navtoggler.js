$(document).ready(function () {
    var $bodyElement = $("body");
    var $nav = $("nav");
    var timeout;
    var toggler = function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            var distanceOfSecondFromTop = $(".below-fold").get(0).getClientRects()[0].top;
            $nav.toggleClass('black', (distanceOfSecondFromTop < 200));
        }, 400)
    };
    $bodyElement.scroll(toggler);
    toggler();
});
