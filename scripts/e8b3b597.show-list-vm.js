(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['knockout'], function(ko) {
    var ShowListViewModel, ShowViewModel;
    ShowListViewModel = (function() {

      function ShowListViewModel(shows) {
        this.setCurrentShow = __bind(this.setCurrentShow, this);

        this.selectCurrentShow = __bind(this.selectCurrentShow, this);

        this.setShows = __bind(this.setShows, this);

        var _this = this;
        this.setShows(shows);
        this.currentShow = ko.observable();
        this.currentShowIsSelected = ko.computed(function() {
          return _this.currentShow() != null;
        });
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

      ShowListViewModel.prototype.selectCurrentShow = function(item, showId, showTitle) {
        var show;
        show = ko.utils.arrayFirst(this.shows(), function(s) {
          return s.id === showId;
        });
        return this.setCurrentShow(show);
      };

      ShowListViewModel.prototype.setCurrentShow = function(show) {
        return this.currentShow(show);
      };

      return ShowListViewModel;

    })();
    ShowViewModel = (function() {

      function ShowViewModel(show) {
        this.id = show._id;
        this.title = show.title;
        this.imageUrl = ko.observable(show.image_url);
        this.channelLogoUrl = ko.observable(show.channel.logo_url);
        this.hasImage = ko.computed(function() {
          return show.image_url != null;
        });
        this.channelName = ko.observable(show.channel.name);
        this.fileId = ko.observable(show.file_id);
      }

      return ShowViewModel;

    })();
    return ShowListViewModel;
  });

}).call(this);
