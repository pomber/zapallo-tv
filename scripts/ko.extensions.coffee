define ['jquery', 'knockout', 'typeahead', 'trunk8'], ($, ko) ->
	
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

	ko.bindingHandlers.trunk8 =
		init: (element, valueAccessor) ->
			params = ko.utils.unwrapObservable valueAccessor()
			text = ko.utils.unwrapObservable params.text
			$(element).text(text)
			$(element).trunk8(params)

		update: (element, valueAccessor) ->	        
			params = ko.utils.unwrapObservable valueAccessor()
			text = ko.utils.unwrapObservable params.text
			$(element).text(text)
			$(element).trunk8('update', text)