define ['jquery', 'knockout', 'typeahead', 'trunk8', 'waypointsSticky'], ($, ko) ->
	
	ko.bindingHandlers.hidden =
		update: (element, valueAccessor) ->
			value = ko.utils.unwrapObservable valueAccessor()
			ko.bindingHandlers.visible.update(element, -> return !value)

	ko.bindingHandlers.stopBindings =
		init: (element, valueAccessor) ->
			value = ko.utils.unwrapObservable valueAccessor()
			return { controlsDescendantBindings: value }

	ko.bindingHandlers.time = 
		update: (element, valueAccessor) ->
			date = ko.utils.unwrapObservable valueAccessor()
			h = date.getHours() 
			m = date.getMinutes()
			m = "0" + m if m < 10
			time = "#{h}:#{m}"
			$(element).text(time)

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
	
	# makes the childs of the element sticky
	ko.bindingHandlers.stickyVisible =

		update: (element, valueAccessor) ->
			value = ko.utils.unwrapObservable valueAccessor()
			ko.bindingHandlers.visible.update(element, -> return value)

			if $(element).children().hasClass('sticky-wrapper') and value
				return

			if value
				$(element).children().waypoint 'sticky'
			else if $(element).children().hasClass 'sticky-wrapper'
				$wrapper = $(element).children()
				$wrapper.waypoint 'destroy'
				$sticky = $wrapper.contents()
				$wrapper.replaceWith($sticky)
				$sticky.removeClass("stuck")