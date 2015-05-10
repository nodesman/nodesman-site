// featured gallery overlay
(function() {
  var triggerBttn = document.getElementById( 'trigger-overlay' );
  if (triggerBttnTwo)
    var triggerBttnTwo = document.getElementById( 'trigger-overlay-two' );

  var triggerBttnThree = document.getElementById( 'trigger-overlay-three' );
  var triggerBttnFour = document.getElementById( 'trigger-overlay-four' );
  // add here more buttons trigger

  var overlay = document.querySelector( 'div.overlay' );
  var closeBttn = overlay.querySelector( 'a.overlay-close' );
  transEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'msTransition': 'MSTransitionEnd',
    'transition': 'transitionend'
  },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };

  function toggleOverlay() {
    if( classie.has( overlay, 'open' ) ) {
      classie.remove( overlay, 'open' );
      classie.add( overlay, 'close' );
      var onEndTransitionFn = function( ev ) {
        if( support.transitions ) {
          if( ev.propertyName !== 'visibility' ) return;
          this.removeEventListener( transEndEventName, onEndTransitionFn );
        }
        classie.remove( overlay, 'close' );
      };
      if( support.transitions ) {
        overlay.addEventListener( transEndEventName, onEndTransitionFn );
      }
      else {
        onEndTransitionFn();
      }
    }
    else if( !classie.has( overlay, 'close' ) ) {
      classie.add( overlay, 'open' );
    }

    $("div.overlay").animate({ scrollTop: 0 }, "slow");
  }

  triggerBttn.addEventListener( 'click', toggleOverlay );
  if (triggerBttnTwo)
    triggerBttnTwo.addEventListener( 'click', toggleOverlay );
  if (triggerBttnThree)
    triggerBttnThree.addEventListener( 'click', toggleOverlay );
  if (triggerBttnFour)
    triggerBttnFour.addEventListener( 'click', toggleOverlay );


  closeBttn.addEventListener( 'click', toggleOverlay );
  return false;
})();
