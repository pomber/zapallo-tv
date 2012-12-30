define ['jquery', 'knockout', 'data-service', 'show-list-vm', 'masonry', 'ko.extensions'], ($, ko, dataService, ShowListViewModel) ->

	class App

		start: ->
			dataService.getShows (shows) ->
				showListViewModel = new ShowListViewModel(shows)
				ko.applyBindings showListViewModel, document.getElementById('shows-section')
				$('#shows-container').masonry
	   				itemSelector : '.b-show'
	
	return new App()
