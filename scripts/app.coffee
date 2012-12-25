define ['jquery', 'knockout', 'data-service', 'show-list-vm', 'masonry'], ($, ko, dataService, ShowListViewModel) ->

	class App

		start: ->
			dataService.getShows (shows) ->
				showListViewModel = new ShowListViewModel(shows)
				ko.applyBindings showListViewModel, document.getElementById('shows-container')
				$('#shows-container').masonry
	   				itemSelector : '.b-show'
	
	return new App()
