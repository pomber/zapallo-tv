require.config 
	shim: 
		"masonry":
			deps: ["jquery"]
		"typeahead":
			deps: ["jquery"]
		"trunk8":
			deps: ["jquery"]
		"modalManager":
			deps: ["jquery"]
		"modal":
			deps: ["modalManager"]
		"waypoints":
			deps: ["jquery"]
		"waypointsSticky":
			deps: ["waypoints"]

	paths: 
		jquery: 'vendor/jquery.min'
		masonry: 'vendor/jquery.masonry.min'
		knockout: 'vendor/knockout-2.2.0'
		domReady: 'vendor/dom-ready'
		typeahead: 'vendor/bootstrap-typeahead'
		trunk8: 'vendor/trunk8'
		modalManager: 'vendor/bootstrap-modalmanager'
		modal: 'vendor/bootstrap-modal'
		waypoints: 'vendor/waypoints.min'
		waypointsSticky: 'vendor/waypoints-sticky.min'
 
require ['app', 'domReady!', 'modal'], (app) ->
	app.start()