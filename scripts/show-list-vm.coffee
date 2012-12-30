define ['knockout'], (ko) ->
	
	class ShowListViewModel
		
		constructor: (shows) ->
			@setShows shows
			@currentShow = ko.observable() 
			@currentShowIsSelected = ko.computed => @currentShow()?
			@currentShowTitle = ko.observable()

		setShows: (shows) =>
			@shows = ko.observableArray (new ShowViewModel(show) for show in shows)

		selectCurrentShow: (item, showId, showTitle) =>
			show = ko.utils.arrayFirst @shows(), (s) -> s.id == showId
			@setCurrentShow(show)

		setCurrentShow: (show) =>
			@currentShow(show)

		removeCurrentShow: =>
			@currentShow(undefined)
			@currentShowTitle("")

	class ShowViewModel 

		constructor: (show) ->
			@id = show._id
			@title = show.title
			@description = show.description
			@imageUrl = ko.observable show.image_url
			@channelLogoUrl = ko.observable show.channel.logo_url
			@hasImage = ko.computed( -> show.image_url? )
			@channelName = ko.observable show.channel.name
			@fileId = ko.observable show.file_id

	return ShowListViewModel

		
	