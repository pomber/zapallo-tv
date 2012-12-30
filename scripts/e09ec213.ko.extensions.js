(function() {

  define(['jquery', 'knockout', 'typeahead', 'trunk8'], function($, ko) {
    ko.bindingHandlers.hidden = {
      update: function(element, valueAccessor) {
        var value;
        value = ko.utils.unwrapObservable(valueAccessor());
        return ko.bindingHandlers.visible.update(element, function() {
          return !value;
        });
      }
    };
    ko.bindingHandlers.stopBindings = {
      init: function(element, valueAccessor) {
        var value;
        value = ko.utils.unwrapObservable(valueAccessor());
        return {
          controlsDescendantBindings: value
        };
      }
    };
    ko.bindingHandlers.typeahead = {
      update: function(element, valueAccessor) {
        var params, source, value;
        value = valueAccessor();
        source = ko.utils.unwrapObservable(value.source);
        params = {
          source: source
        };
        params = $.extend({}, value, params);
        return $(element).typeahead(params);
      }
    };
    return ko.bindingHandlers.trunk8 = {
      init: function(element, valueAccessor) {
        var value;
        value = ko.utils.unwrapObservable(valueAccessor());
        $(element).text(value);
        return $(element).trunk8({
          lines: 2
        });
      },
      update: function(element, valueAccessor) {
        var value;
        value = ko.utils.unwrapObservable(valueAccessor());
        $(element).text(value);
        return $(element).trunk8('update', value);
      }
    };
  });

}).call(this);
