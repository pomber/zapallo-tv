define ['jquery', 'knockout', 'data-service', 'show-list-vm', 'masonry', 'ko.extensions'], ($, ko, dataService, ShowListViewModel) ->

	class App

		refresh: => 
			$('.d-refresh-shows').addClass('icon-spin')
			dataService.getShows (shows) =>
				@showListViewModel.refreshShows(shows)
				$('#shows-container').masonry('reload')
				$('.d-refresh-shows').removeClass('icon-spin')

		start: =>
			dataService.getShows (shows) =>
				@showListViewModel = new ShowListViewModel(shows)
				ko.applyBindings @showListViewModel, document.getElementById('page-container')
				$('#shows-container').masonry
					itemSelector : '.b-show'
	
	return new App()

