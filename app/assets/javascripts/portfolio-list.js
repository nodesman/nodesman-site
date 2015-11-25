//= require "jquery/dist/jquery"
//= require "lib/jquery.backstretch.min"
//= require "lib/jquery.fullpage"
//= require "navtoggler"
(function () {

    function setItemHeight() {
        $('.item').height($(window).height() - $("nav").height());
    }

    function backStretchHeroImage() {
        $.backstretch(hero_url, {
            centeredX: true
        });
    }

    function initializePortfolioItemHeight() {
        setItemHeight();
        $(window).resize(setItemHeight);
    }

    function pageReady() {
        backStretchHeroImage();
        initializePortfolioItemHeight();
        $("#portfolio").fullpage({
            menu: '#anchors',
            navigation: true
        });
    }

    $(pageReady)
}());