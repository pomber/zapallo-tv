(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'knockout', 'data-service', 'show-list-vm', 'masonry', 'ko.extensions'], function($, ko, dataService, ShowListViewModel) {
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
        return dataService.getShows(function(shows) {
          _this.showListViewModel = new ShowListViewModel(shows);
          ko.applyBindings(_this.showListViewModel, document.getElementById('shows-section'));
          $('#shows-container').masonry({
            itemSelector: '.b-show'
          });
          return $('.d-refresh-shows').click(_this.refresh);
        });
      };

      return App;

    })();
    return new App();
  });

}).call(this);
