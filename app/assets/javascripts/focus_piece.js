//= require "scrollNav/dist/jquery.scrollNav.js"

$(function () {
    $(".content").scrollNav({
        subSections: true,
        headlineText: 'Index'
    });

    $(".article-page-container").on('click', '.scroll-nav__item', function (event) {
        var target = $(event.target).attr('href')
        window.location = target
        //var targetElement = $(target)
        //$("html, body").scrollTop(targetElement.offset().top);
    })
});