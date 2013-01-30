(function() {

  define(['jquery', 'knockout', 'typeahead', 'trunk8', 'waypointsSticky'], function($, ko) {
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
    ko.bindingHandlers.time = {
      update: function(element, valueAccessor) {
        var date, h, m, time;
        date = ko.utils.unwrapObservable(valueAccessor());
        h = date.getHours();
        m = date.getMinutes();
        if (m < 10) {
          m = "0" + m;
        }
        time = "" + h + ":" + m;
        return $(element).text(time);
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
    ko.bindingHandlers.trunk8 = {
      init: function(element, valueAccessor) {
        var params, text;
        params = ko.utils.unwrapObservable(valueAccessor());
        text = ko.utils.unwrapObservable(params.text);
        $(element).text(text);
        return $(element).trunk8(params);
      },
      update: function(element, valueAccessor) {
        var params, text;
        params = ko.utils.unwrapObservable(valueAccessor());
        text = ko.utils.unwrapObservable(params.text);
        $(element).text(text);
        return $(element).trunk8('update', text);
      }
    };
    return ko.bindingHandlers.stickyVisible = {
      update: function(element, valueAccessor) {
        var $sticky, $wrapper, value;
        value = ko.utils.unwrapObservable(valueAccessor());
        ko.bindingHandlers.visible.update(element, function() {
          return value;
        });
        if ($(element).children().hasClass('sticky-wrapper') && value) {
          return;
        }
        if (value) {
          return $(element).children().waypoint('sticky');
        } else if ($(element).children().hasClass('sticky-wrapper')) {
          $wrapper = $(element).children();
          $wrapper.waypoint('destroy');
          $sticky = $wrapper.contents();
          $wrapper.replaceWith($sticky);
          return $sticky.removeClass("stuck");
        }
      }
    };
  });

}).call(this);
