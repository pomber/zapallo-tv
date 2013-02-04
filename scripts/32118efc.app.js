(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'knockout', 'data-service', 'app-vm', 'masonry', 'ko.extensions'], function($, ko, dataService, AppViewModel) {
    var App;
    App = (function() {

      function App() {
        this.start = __bind(this.start, this);

        this.refresh = __bind(this.refresh, this);

      }

      App.prototype.refresh = function() {
        var _this = this;
        $('.d-refresh-shows').addClass('icon-spin');
        return dataService.getShows(function(shows) {
          _this.showListViewModel.refreshShows(shows);
          $('#shows-container').masonry('reload');
          return $('.d-refresh-shows').removeClass('icon-spin');
        });
      };

      App.prototype.start = function() {
        var _this = this;
        this.appViewModel = new AppViewModel();
        ko.applyBindings(this.appViewModel, document.getElementById('page-container'));
        return dataService.getShows(function(shows) {
          return _this.appViewModel.setShows(shows);
        });
      };

      return App;

    })();
    return new App();
  });

}).call(this);
