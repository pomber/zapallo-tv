require.config 
	shim: 
		"masonry":
			deps: ["jquery"]
		"typeahead":
			deps: ["jquery"]
	paths: 
		jquery: 'vendor/jquery.min'
		masonry: 'vendor/jquery.masonry.min'
		knockout: 'vendor/knockout-2.2.0'
		domReady: 'vendor/dom-ready'
		typeahead: 'vendor/bootstrap-typeahead'
 
require ['app', 'domReady!'], (app) ->
	app.start()