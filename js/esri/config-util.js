require([
	"esri/arcgis/utils",
	"esri/dijit/LayerList",
	"esri/dijit/Search",
	"dijit/layout/ContentPane",
	"dojo/domReady!"
], function(
	arcgisUtils,
	LayerList,
	Search
) {

	// 35c7b90b6a194cb98d3187e4e54259e5
	// d185554a5c764080a85eb23286543b36

	arcgisUtils.createMap("d185554a5c764080a85eb23286543b36", "homeMap").then(function(response){

		response.map.enableScrollWheelZoom();
		// response.map.disableScrollWheelZoom();

		// var search = new Search({
		// 	map: response.map
		// }, "search");
		// search.startup();

		var layerList = new LayerList({
			map: response.map,
			layers: arcgisUtils.getLayerList(response)
		},"layerList");
		layerList.startup();

	});
});
