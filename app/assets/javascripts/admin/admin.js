//= require ../lib/adminjs/vendor/modernizr-2.7.1-respond-1.4.2.min
//= require jquery/dist/jquery
//= require bootstrap/dist/js/bootstrap
//= require ../lib/adminjs/plugins
//= require ../lib/adminjs/app
//= require ../lib/adminjs/pages/index

//= require "angular/angular"
//= require "ng-multi-transclude/src/multi-transclude"
//= require marked/lib/marked
//= require ../Nodesman
//= require "epiceditor/epiceditor/js/epiceditor"
//= require directives/MarkdownEditorDirective

$(function () {
    Index.init();
});
