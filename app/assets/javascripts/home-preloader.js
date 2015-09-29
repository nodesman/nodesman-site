(function () {
  var container = document.getElementById('bigWrapper');
  var header = container.querySelector('.ip-header');
  var loader = new PathLoader(document.getElementById('ip-loader-circle'));
  var animationEndEvents = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd',
    'animation': 'animationend'
  };

  var interval;

  var current = 0;
  var rate = 0.01;

  $(window).on('load', finishedLoadHandler);

  function init() {
    classie.add(container, 'loading');
    interval = setInterval(incrementFakeProgress, 100);
  }

  function incrementFakeProgress() {
    var value = current += rate;
    loader.setProgress(value);
    rate = 0.1;
  }

  function finishedLoadHandler() {
    loader.setProgress(1);
    classie.remove(container, 'loading');
    classie.add(container, 'loaded');
    setTimeout(function () {
      classie.add(container, 'layout-switch');
    }, 1000);
  }

  init();
})();