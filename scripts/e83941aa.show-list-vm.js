(function() {

  define(['knockout'], function(ko) {
    var ShowListViewModel, ShowViewModel;
    ShowListViewModel = (function() {

      function ShowListViewModel(shows) {
        this.setShows(shows);
      }

      ShowListViewModel.prototype.setShows = function(shows) {
        var show;
        return this.shows = ko.observableArray((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = shows.length; _i < _len; _i++) {
            show = shows[_i];
            _results.push(new ShowViewModel(show));
          }
          return _results;
        })());
      };

      return ShowListViewModel;

    })();
    ShowViewModel = (function() {

      function ShowViewModel(show) {
        this.title = ko.observable(show.title);
        this.imageUrl = ko.observable(show.image_url);
        this.channelLogoUrl = ko.observable(show.channel.logo_url);
        this.hasImage = ko.computed(function() {
          return show.image_url != null;
        });
        this.channelName = ko.observable(show.channel.name);
        this.fileId = ko.observable(show.file_id);
      }

      ShowViewModel.prototype.goToFile = function() {
        return window.open("http://televisiononline.com.ar/buscador/clientes/yahoo/tv.php?idFicha=" + this.fileId());
      };

      return ShowViewModel;

    })();
    return ShowListViewModel;
  });

}).call(this);
