//= require "lib/jquery"
//= require "lib/jquery.backstretch.min"
(function () {
    $(function () {
        $.backstretch(hero_url, {
            centeredX: true
        });
        $(".backstretch").addClass('black-overlay')
    })
}());