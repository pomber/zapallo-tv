define ['jquery', 'knockout', 'typeahead'], ($, ko) ->
	
	ko.bindingHandlers.hidden =
		update: (element, valueAccessor) ->
			value = ko.utils.unwrapObservable valueAccessor()
			ko.bindingHandlers.visible.update(element, -> return !value)

	ko.bindingHandlers.stopBindings =
		init: (element, valueAccessor) ->
			value = ko.utils.unwrapObservable valueAccessor()
			return { controlsDescendantBindings: value }

	ko.bindingHandlers.typeahead =
	    update: (element, valueAccessor) ->	        
	        value = valueAccessor()	         
	        source = ko.utils.unwrapObservable(value.source)
	        params = {source: source}
	        params = $.extend({}, value, params)
	        $(element).typeahead(params)