define ['knockout', 'show-list-vm'], (ko, ShowListViewModel) ->

	class AppViewModel

		constructor: ->
			@showsViewModel = ko.observable()
			@areShowsLoaded = ko.observable false 
			@isLandingVisible = ko.observable true

		setShows: (shows) =>
			@showsViewModel(new ShowListViewModel(shows))
			@areShowsLoaded(true)

		hideLanding: () =>
			@isLandingVisible(false)

	return AppViewModel

