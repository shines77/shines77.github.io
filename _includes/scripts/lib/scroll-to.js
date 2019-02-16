(function() {
  var SOURCES = window.TEXT_VARIABLES.sources;
  var isAlwaysOnTop = window.TEXT_VARIABLES.site.header.always_on_top;
  var headerHeight = 0;
  window.Lazyload.js(SOURCES.jquery, function() {
    headerHeight = (isAlwaysOnTop ? $('#header').height() : 0);
  });
  window.Lazyload.js(SOURCES.jquery, function() {
    function scrollToAnchor(anchor, duration, callback) {
      var $root = this;
      $root.animate({ scrollTop: $(anchor).position().top - headerHeight }, duration, function() {
        window.history.replaceState(null, '', window.location.href.split('#')[0] + anchor);
        callback && callback();
      });
    }
    $.fn.scrollToAnchor = scrollToAnchor;
  });
})();