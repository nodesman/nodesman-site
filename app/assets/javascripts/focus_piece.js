//= require "scrollNav/dist/jquery.scrollNav.min.js"

$(function () {
    $(".content").scrollNav({
        subSections: true,
        headlineText: 'Index'
    });

    $(".article-page-container").on('click', '.scroll-nav__item', function (event) {
        var target = $(event.target).attr('href');
        window.location = target
    });
});