define ['knockout', 'data-service'], (ko, dataService) ->
	
	class DataService

		getShows: (callback) ->
			# $.getJSON 'http://localhost:8080/shows', {}, callback
			$.getJSON 'http://zapallotv-api.aws.af.cm/shows', {}, callback

	return new DataService()