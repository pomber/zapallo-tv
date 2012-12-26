define ['knockout'], (ko) ->
	
	class ShowListViewModel
		
		constructor: (shows) ->
			@setShows shows

		setShows: (shows) ->
			@shows = ko.observableArray (new ShowViewModel(show) for show in shows)

	class ShowViewModel 

		constructor: (show) ->
			@title = ko.observable show.title
			@imageUrl = ko.observable show.image_url
			@channelLogoUrl = ko.observable show.channel.logo_url
			@hasImage = ko.computed( -> show.image_url? )
			@channelName = ko.observable show.channel.name
			@fileId = ko.observable show.file_id

		goToFile: ->
			window.open("http://televisiononline.com.ar/buscador/clientes/yahoo/tv.php?idFicha=" + @fileId())


	return ShowListViewModel

		
	