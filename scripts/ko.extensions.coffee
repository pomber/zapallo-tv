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

	ko.bindingHandlers.cycler =
		init: (element, valueAccessor) ->
			delay = ko.utils.unwrapObservable valueAccessor()
			cycle = () =>
				$cycler = $(element)
				$active = $cycler.children(".active")
				$first = $cycler.children("img:first")
				$next = if $active.next().length isnt 0 then $active.next() else $first
				$next.css('z-index', 2)
				$active.fadeOut(1500, () =>
					$active.css('z-index', 1).show().removeClass('active')
					$next.css('z-index', 3).addClass('active')
				)
			setInterval(cycle, delay)

	
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