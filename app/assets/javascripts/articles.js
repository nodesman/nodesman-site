//= require jquery/dist/jquery
//= require lib/modernizr
//= require lib/highlight.pack
//= require script


function ready() {
  hljs.initHighlightingOnLoad();
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
    $(block).css({
      backgroundColor: 'transparent'
    });
  });
}

window.addEventListener("load", ready);