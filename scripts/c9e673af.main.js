(function() {

  require.config({
    shim: {
      "masonry": {
        deps: ["jquery"]
      }
    },
    paths: {
      jquery: 'vendor/jquery.min',
      masonry: 'vendor/jquery.masonry.min',
      knockout: 'vendor/knockout-2.2.0',
      domReady: 'vendor/dom-ready'
    }
  });

  require(['app', 'domReady!'], function(app) {
    return app.start();
  });

}).call(this);
