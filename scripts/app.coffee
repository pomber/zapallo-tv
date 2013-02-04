define ['jquery', 'knockout', 'data-service', 'app-vm', 'masonry', 'ko.extensions'], ($, ko, dataService, AppViewModel) ->

	class App

		refresh: => 
			$('.d-refresh-shows').addClass('icon-spin')
			dataService.getShows (shows) =>
				@showListViewModel.refreshShows(shows)
				$('#shows-container').masonry('reload')
				$('.d-refresh-shows').removeClass('icon-spin')

		start: =>
			@appViewModel = new AppViewModel()
			ko.applyBindings @appViewModel, document.getElementById('page-container')
			dataService.getShows (shows) =>
				@appViewModel.setShows shows
				# $('#shows-container').masonry
				# 	itemSelector : '.b-show'
	
	return new App()

