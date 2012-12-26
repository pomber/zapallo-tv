(function() {

  define(['knockout', 'data-service'], function(ko, dataService) {
    var DataService;
    DataService = (function() {

      function DataService() {}

      DataService.prototype.getShows = function(callback) {
        return $.getJSON('http://zapallotv-api.aws.af.cm/shows', {}, callback);
      };

      return DataService;

    })();
    return new DataService();
  });

}).call(this);
