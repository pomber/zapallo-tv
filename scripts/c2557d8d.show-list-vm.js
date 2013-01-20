(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['knockout'], function(ko) {
    var ShowListViewModel, ShowViewModel;
    ShowListViewModel = (function() {

      function ShowListViewModel(shows) {
        this.refreshShows = __bind(this.refreshShows, this);

        this.removeCurrentShow = __bind(this.removeCurrentShow, this);

        this.setCurrentShow = __bind(this.setCurrentShow, this);

        this.selectCurrentShow = __bind(this.selectCurrentShow, this);

        this.setShows = __bind(this.setShows, this);

        var _this = this;
        this.setShows(shows);
        this.currentShow = ko.observable();
        this.currentShowIsSelected = ko.computed(function() {
          return _this.currentShow() != null;
        });
        this.currentShowTitle = ko.observable();
      }

      ShowListViewModel.prototype.setShows = function(shows) {
        var show;
        return this.shows = ko.observableArray((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = shows.length; _i < _len; _i++) {
            show = shows[_i];
            _results.push(new ShowViewModel(show, this));
          }
          return _results;
        }).call(this));
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

      ShowListViewModel.prototype.removeCurrentShow = function() {
        this.currentShow(void 0);
        return this.currentShowTitle("");
      };

      ShowListViewModel.prototype.refreshShows = function(shows) {
        var show;
        return this.shows((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = shows.length; _i < _len; _i++) {
            show = shows[_i];
            _results.push(new ShowViewModel(show, this));
          }
          return _results;
        }).call(this));
      };

      return ShowListViewModel;

    })();
    ShowViewModel = (function() {

      function ShowViewModel(show, parent) {
        this.googleShare = __bind(this.googleShare, this);

        this.twitterShare = __bind(this.twitterShare, this);

        this.facebookShare = __bind(this.facebookShare, this);

        this.removeCurrentShow = __bind(this.removeCurrentShow, this);

        this.setAsCurrent = __bind(this.setAsCurrent, this);

        var _ref, _ref1;
        this.id = show._id;
        this.title = show.title;
        this.description = (_ref = show.description) != null ? _ref : "";
        this.imageUrl = ko.observable((_ref1 = show.image_url) != null ? _ref1 : 'images/noise.jpg');
        this.channelLogoUrl = ko.observable(show.channel.logo_url);
        this.hasImage = ko.computed(function() {
          return show.image_url != null;
        });
        this.channelName = ko.observable(show.channel.name);
        this.fileId = ko.observable(show.file_id);
        this.parent = parent;
      }

      ShowViewModel.prototype.setAsCurrent = function() {
        return this.parent.setCurrentShow(this);
      };

      ShowViewModel.prototype.removeCurrentShow = function() {
        return this.parent.removeCurrentShow(this);
      };

      ShowViewModel.prototype.facebookShare = function() {
        return alert("proximamente");
      };

      ShowViewModel.prototype.twitterShare = function() {
        return alert("proximamente");
      };

      ShowViewModel.prototype.googleShare = function() {
        return alert("proximamente");
      };

      return ShowViewModel;

    })();
    return ShowListViewModel;
  });

}).call(this);
