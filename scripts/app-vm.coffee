define ['knockout', 'show-list-vm'], (ko, ShowListViewModel) ->

	class AppViewModel

		constructor: ->
			@showsViewModel = ko.observable()
			@areShowsLoaded = ko.observable(false)

		setShows: (shows) =>
			@showsViewModel(new ShowListViewModel(shows))
			@areShowsLoaded(true)

	return AppViewModel

