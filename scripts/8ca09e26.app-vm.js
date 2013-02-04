(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['knockout', 'show-list-vm'], function(ko, ShowListViewModel) {
    var AppViewModel;
    AppViewModel = (function() {

      function AppViewModel() {
        this.setShows = __bind(this.setShows, this);
        this.showsViewModel = ko.observable();
        this.areShowsLoaded = ko.observable(false);
      }

      AppViewModel.prototype.setShows = function(shows) {
        this.showsViewModel(new ShowListViewModel(shows));
        return this.areShowsLoaded(true);
      };

      return AppViewModel;

    })();
    return AppViewModel;
  });

}).call(this);
