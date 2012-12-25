(function() {

  define(['jquery', 'knockout', 'data-service', 'show-list-vm', 'masonry'], function($, ko, dataService, ShowListViewModel) {
    var App;
    App = (function() {

      function App() {}

      App.prototype.start = function() {
        return dataService.getShows(function(shows) {
          var showListViewModel;
          showListViewModel = new ShowListViewModel(shows);
          ko.applyBindings(showListViewModel, document.getElementById('shows-container'));
          return $('#shows-container').masonry({
            itemSelector: '.b-show'
          });
        });
      };

      return App;

    })();
    return new App();
  });

}).call(this);
